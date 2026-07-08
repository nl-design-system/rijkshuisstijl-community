import { Icon, Logo, PageHeader, SkipLink } from '@rijkshuisstijl-community/components-react';
import './header.css';
import { KeyboardEvent, PointerEvent, useEffect, useRef, useState } from 'react';

// POC: minimum pointer travel (px) before a press counts as a drag instead of a click
const DRAG_THRESHOLD = 6;
// POC: release velocity (px/ms) above which the drag direction decides open/closed
const VELOCITY_THRESHOLD = 0.25;

// POC "tactile" feature flag (?tactile in the URL, or localStorage rhc-tactile-tab=true):
// pulling from closed first stretches the tab over TUG_DISTANCE px before the drawer
// starts to follow; pulling up past fully closed folds the tab over like a real pull tag
const TUG_DISTANCE = 48;
// extra scaleY on the tab at full tug (1 + STRETCH_MAX at the moment the drawer releases)
const STRETCH_MAX = 0.4;
// px of drawer travel over which the stretch relaxes back to 1 after the drawer releases
const STRETCH_RELAX_DISTANCE = 32;
// px of upward drag for the maximum fold angle
const FOLD_RANGE = 80;
const FOLD_MAX_DEG = 80;

export default function SharedHeader() {
  // NB: pathname state for the current-link highlight belongs to the commented-out NavBar below;
  // restore it together with the NavBar:
  // const [pathname, setPathname] = useState('');
  const [tactile, setTactile] = useState(false);
  useEffect(() => {
    // NB: read in a useEffect hook to not error in a server environment
    // setPathname(globalThis.location.pathname);
    // POC feature flag for the stretch + fold-over tab effects, so both variants can be compared
    setTactile(
      new URLSearchParams(globalThis.location.search).has('tactile') ||
        globalThis.localStorage?.getItem('rhc-tactile-tab') === 'true',
    );
  }, []);

  const [open, setOpen] = useState(false);
  const [dragging, setDragging] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const drag = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    startY: 0,
    startSize: 0,
    lastY: 0,
    lastT: 0,
    velocity: 0,
  });

  const measure = () => contentRef.current?.getBoundingClientRect().height ?? 0;
  const setPanelSize = (px: number) => panelRef.current?.style.setProperty('--rhc-header-panel-size', String(px));
  const applyOpen = (next: boolean) => {
    setOpen(next);
    setPanelSize(next ? measure() : 0);
  };
  const setTabEffects = (stretch: number, foldDeg: number) => {
    const style = handleRef.current?.style;
    style?.setProperty('--rhc-tab-stretch', String(stretch));
    style?.setProperty('--rhc-tab-fold', `${foldDeg}deg`);
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      // keep the open height in sync when the nav wraps on narrow viewports
      if (open && !drag.current.active) setPanelSize(measure());
    });
    if (contentRef.current) resizeObserver.observe(contentRef.current);
    return () => resizeObserver.disconnect();
  }, [open]);

  const onPointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    drag.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      startY: event.clientY,
      startSize: panelRef.current?.getBoundingClientRect().height ?? 0,
      lastY: event.clientY,
      lastT: event.timeStamp,
      velocity: 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    const state = drag.current;
    if (!state.active || event.pointerId !== state.pointerId) return;
    const deltaY = event.clientY - state.startY;
    if (!state.moved && Math.abs(deltaY) > DRAG_THRESHOLD) {
      state.moved = true;
      setDragging(true);
    }
    if (!state.moved) return;
    const deltaT = event.timeStamp - state.lastT;
    if (deltaT > 0) state.velocity = (event.clientY - state.lastY) / deltaT;
    state.lastY = event.clientY;
    state.lastT = event.timeStamp;
    if (!tactile) {
      setPanelSize(Math.min(Math.max(state.startSize + deltaY, 0), measure()));
      return;
    }
    // tactile mode maps the drag onto one continuous "travel" axis:
    // travel <= 0 folds the tab up, (0, TUG_DISTANCE] stretches it, beyond that moves the drawer
    const travel = (state.startSize > 0 ? state.startSize + TUG_DISTANCE : 0) + deltaY;
    if (travel <= 0) {
      setPanelSize(0);
      setTabEffects(1, (Math.min(-travel, FOLD_RANGE) / FOLD_RANGE) * FOLD_MAX_DEG);
    } else if (travel <= TUG_DISTANCE) {
      setPanelSize(0);
      setTabEffects(1 + (travel / TUG_DISTANCE) * STRETCH_MAX, 0);
    } else {
      const drawer = travel - TUG_DISTANCE;
      setPanelSize(Math.min(drawer, measure()));
      // the stretch relaxes as the drawer takes over the movement
      setTabEffects(1 + Math.max(0, 1 - drawer / STRETCH_RELAX_DISTANCE) * STRETCH_MAX, 0);
    }
  };

  const onPointerEnd = (event: PointerEvent<HTMLElement>) => {
    const state = drag.current;
    if (!state.active || event.pointerId !== state.pointerId) return;
    state.active = false;
    if (!state.moved) return; // plain click — the onClick handler does the toggle
    setDragging(false); // re-enables the CSS transition so the snap animates
    if (tactile) setTabEffects(1, 0); // stretch/fold spring back on release
    const size = panelRef.current?.getBoundingClientRect().height ?? 0;
    const opening = Math.abs(state.velocity) > VELOCITY_THRESHOLD ? state.velocity > 0 : size > measure() / 2;
    applyOpen(opening);
  };

  const onClick = () => {
    if (drag.current.moved) {
      // suppress the click that follows a real drag
      drag.current.moved = false;
      return;
    }
    applyOpen(!open);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      applyOpen(!open);
    }
  };

  const handleClassName = [
    'rhc-header-drag-handle',
    tactile && 'rhc-header-drag-handle--tactile',
    dragging && 'rhc-header-drag-handle--dragging',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <PageHeader>
      <SkipLink className="rhc-skip-link--visible-on-focus" href="#main" id="top">
        Ga naar hoofdinhoud
      </SkipLink>
      <div className="rhc-page-header-layout">
        {/* POC: the logo ribbon is the drag handle; a production version should use a real <button> */}
        <Logo
          aria-controls="shared-header-nav-panel"
          aria-expanded={open}
          aria-label="Hoofdnavigatie tonen of verbergen"
          className={handleClassName}
          organisation="Rijkshuisstijl Community"
          ref={handleRef}
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onPointerCancel={onPointerEnd}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerEnd}
        >
          <Icon className={'dutch-map'} icon={'nederland-map'} />
        </Logo>
        <div
          className={`rhc-header-nav-panel${dragging ? ' rhc-header-nav-panel--dragging' : ''}`}
          id="shared-header-nav-panel"
          inert={!open && !dragging}
          ref={panelRef}
        >
          <div className="rhc-header-nav-panel__content" ref={contentRef}>
            <div className="rhc-header-nav-panel__spacer">Betaald met belasting centen</div>
          </div>
        </div>
      </div>
    </PageHeader>
  );
}
