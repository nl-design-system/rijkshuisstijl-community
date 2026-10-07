import { SharedFooterOverheidNl } from '../shared/footer';
import { SharedHeaderOverheidNl } from '../shared/header';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';

const HeaderFooter = () => (
  <>
    <SharedHeaderOverheidNl />
    <div className="rhc-page-section" style={{ marginBlockEnd: 'var(--rhc-space-2xl)' }}>
      <div className="rhc-page-section__content">
        <h1>Voorbeeldpagina</h1>
        <p>
          Pitchfork art party microdosing, digicam spritz polycule sambas ascot. Offal meditation bruh, twee akerman
          pabst angela davis. Next level vaporware bruh, wide-leg blackbird spyplane sally rooney fanny pack messenger
          bag didion n+1. Banjo marfa mlkshk ottessa moshfegh, sus wide-leg locavore baffler beard eames digicam
          chillwave poke hexagon try-hard.
        </p>
        <p>
          Molly baz birth chart cacio e pepe bluesky. Lockwood marfa supper club bodega boys, booktok mezcal bluesky
          vibe check cacio e pepe open studio. Jawn yes plz EMDR, sus helvetica salvia listicle jean shorts ethical
          hashtag ayahuasca small batch furikake. Harissa I think you should leave humblebrag pét-nat vagus nerve
          chronically online, pour-over duck fat tattooed master cleanse moss wall omakase cliche knausgaard. Shabby
          chic chia cold-pressed, taiyaki bauhaus cortado chartreuse paleo aeropress art party gorpcore prism.
          Attachment style 8-bit copper mug bauhaus.
        </p>
      </div>
    </div>
    <SharedFooterOverheidNl />
  </>
);

export default HeaderFooter;
