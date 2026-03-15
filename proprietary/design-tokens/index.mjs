import Color from './node_modules/colorjs.io/dist/color.js';
import p3 from './node_modules/colorjs.io/src/spaces/p3.js';
import rec2020 from './node_modules/colorjs.io/src/spaces/rec2020.js';
import deltaE200 from './node_modules/colorjs.io/src/deltaE/deltaE2000.js';

import { LitElement, html, css } from 'lit';
// import set from 'lodash-es/set.js';

const setPath = (obj, path, value, i = 0) => {
  if (!Array.isArray(path)) {
    throw new Error();
  }
  if (i === path.length - 1) {
    obj[path[i]] = value;
  } else if (i < path.length - 1) {
    if (!Object.hasOwn(obj, path[i])) {
      obj[path[i]] = {};
    }
    return setPath(obj[path[i]], path, value, i + 1);
  }
};

export function walkTokens(obj, callback, partialTokenPath = []) {
  if (Object.hasOwn(obj, '$type') || Object.hasOwn(obj, '$value')) {
    callback(partialTokenPath, obj);
  } else {
    Object.keys(obj).flatMap((key) =>
      typeof obj[key] === 'object' && obj[key] !== null
        ? walkTokens(obj[key], callback, [...partialTokenPath, key])
        : [],
    );
  }
}

const colors = [
  {
    label: 'Lintblauw',
    color: '#154273',
  },
  {
    label: 'Hemelblauw',
    color: '#007BC7',
  },
  {
    label: 'Lichtblauw',
    color: '#8FCAE7',
  },
  {
    label: 'Donkerblauw',
    color: '#01689B',
  },
  {
    label: 'Mintgroen',
    color: '#76D2B6',
  },
  {
    label: 'Groen',
    color: '#39870C',
  },
  {
    label: 'Donkergroen',
    color: '#275937',
  },
  {
    label: 'Mosgroen',
    color: '#777B00',
  },
  {
    label: 'Geel',
    color: '#F9E11E',
  },
  {
    label: 'Donkergeel',
    color: '#FFB612',
  },
  {
    label: 'Oranje',
    color: '#E17000',
  },
  {
    label: 'Rood',
    color: '#D52B1E',
  },
  {
    label: 'Robijnrood',
    color: '#CA005D',
  },
  {
    label: 'Violet',
    color: '#A90061',
  },
  {
    label: 'Roze',
    color: '#F092CD',
  },
  {
    label: 'Paars',
    color: '#42145F',
  },
  {
    label: 'Donkerbruin',
    color: '#673327',
  },
  {
    label: 'Bruin',
    color: '#94710A',
  },
];
const items = [1, 0.75, 0.6, 0.45, 0.3, 0.15];

const prefix = 'rhc-new';

const baseTokens = {
  [prefix]: {
    color: {
      zwart: { $type: 'color', $value: '#000000' },
      wit: { $type: 'color', $value: '#ffffff' },
      coolgray: {
        'tint-900': { $type: 'color', $value: '#0F172A' },
        'tint-800': { $type: 'color', $value: '#1E293B' },
        'tint-700': { $type: 'color', $value: '#334155' },
        'tint-600': { $type: 'color', $value: '#475569' },
        'tint-500': { $type: 'color', $value: '#64748B' },
        'tint-400': { $type: 'color', $value: '#94A3B8' },
        'tint-300': { $type: 'color', $value: '#CBD5E1' },
        'tint-200': { $type: 'color', $value: '#E2E8F0' },
        'tint-100': { $type: 'color', $value: '#F1F5F9' },
        'tint-050': { $type: 'color', $value: '#F8FAFC' },
      },
    },
  },
};
const designTokensX = colors.reduce(
  (designTokens, { color, label }) => {
    return items.reduce((designTokens, n) => {
      const slug = label.toLowerCase();
      const lightValue = `color-mix(in lab, ${color} ${n * 100}%, var(--white, white) ${100 - n * 100}%)`;
      const darkValue = `color-mix(in lab, ${color} ${n * 100}%, var(--black, black) ${100 - n * 100}%)`;
      const lightPath = [prefix, 'color', 'light', slug, `tint-${Math.round(n * 100)}`];
      const darkPath = [prefix, 'color', 'dark', slug, `tint-${Math.round(n * 100).toString()}`];
      setPath(designTokens, lightPath, { $type: 'color', $value: lightValue });
      setPath(designTokens, darkPath, { $type: 'color', $value: darkValue });
      return designTokens;
    }, designTokens);
  },
  { ...baseTokens },
);
console.log(JSON.stringify(designTokensX, null, 2));
const designTokens2 = colors.reduce(
  (state, { color, label }) => {
    const white = new Color('white');
    const black = new Color('black');
    let whiteRange = white.range(color, {
      space: 'lch', // interpolation space
      outputSpace: 'srgb',
    });
    let blackRange = black.range(color, {
      space: 'lch', // interpolation space
      outputSpace: 'srgb',
    });

    return items.reduce((state, n) => {
      const slug = label.toLowerCase();
      const lightValue = whiteRange(n).toString({ format: 'hex' });
      const darkValue = blackRange(n).toString({ format: 'hex' });
      const lightPath = [prefix, 'color', 'light', slug, `tint-${Math.round(n * 100)}`];
      const darkPath = [prefix, 'color', 'dark', slug, `tint-${Math.round(n * 100).toString()}`];
      setPath(state, lightPath, { $type: 'color', $value: lightValue });
      setPath(state, darkPath, { $type: 'color', $value: darkValue });
      return state;
    }, state);
  },
  { ...baseTokens },
);

export class ExampleColorGrid extends LitElement {
  static properties = {
    duration: {},
    end: { state: true },
    remaining: { state: true },
  };
  static styles = css`
    .utrecht-color-sample {
      background-color: var(--utrecht-color-sample-background-color, currentColor);
      block-size: var(--utrecht-color-sample-block-size, 2em);
      border-color: var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));
      border-radius: var(--utrecht-color-sample-border-radius, 0);
      border-style: solid;
      border-width: var(--utrecht-color-sample-border-width, 0);
      box-sizing: border-box;
      display: inline-block;
      inline-size: var(--utrecht-color-sample-inline-size, 2em);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    @media (forced-colors: active) {
      .utrecht-color-sample {
        forced-color-adjust: none;
      }
    }
    @media (forced-colors: active) and (prefers-color-scheme: dark) {
      .utrecht-color-sample {
        --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-dark-border-color, #000);
      }
    }
    @media (forced-colors: active) and (prefers-color-scheme: light) {
      .utrecht-color-sample {
        --utrecht-color-sample-default-border-color: var(--utrecht-color-sample-light-border-color, #fff);
      }
    }
    :host {
      --basis-color-root-background-color: white;
      --basis-color-root-color: black;
      --rhc-new-color-coolgray-tint-500: #64748b;
      --rhc-new-color-coolgray-tint-900: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 15%,
        var(--rhc-new-color-dark-lintblauw-tint-15, var(--rhc-new-color-zwart)) 85%
      );
      --rhc-new-color-coolgray-tint-800: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 30%,
        var(--rhc-new-color-dark-lintblauw-tint-15, var(--rhc-new-color-zwart)) 70%
      );
      --rhc-new-color-coolgray-tint-700: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 45%,
        var(--rhc-new-color-dark-lintblauw-tint-15, var(--rhc-new-color-zwart)) 55%
      );
      --rhc-new-color-coolgray-tint-600: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 60%,
        var(--rhc-new-color-dark-lintblauw-tint-15, var(--rhc-new-color-zwart)) 40%
      );
      --rhc-new-color-coolgray-tint-400: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 65%,
        var(--basis-color-root-background-color, var(--rhc-new-color-wit)) 35%
      );
      --rhc-new-color-coolgray-tint-300: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 29%,
        var(--basis-color-root-background-color, var(--rhc-new-color-wit)) 71%
      );
      --rhc-new-color-coolgray-tint-200: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 15%,
        var(--basis-color-root-background-color, var(--rhc-new-color-wit)) 85%
      );
      --rhc-new-color-coolgray-tint-100: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 8%,
        var(--basis-color-root-background-color, var(--rhc-new-color-wit)) 92%
      );
      --rhc-new-color-coolgray-tint-050: color-mix(
        in lab,
        var(--rhc-new-color-coolgray-tint-500) 4%,
        var(--basis-color-root-background-color, var(--rhc-new-color-wit)) 96%
      );
    }
  `;

  render() {
    const label = this.getAttribute('label');
    const color = this.getAttribute('color');

    // console.log(JSON.stringify(designTokens, null, 2));

    const variablesLight = colors.reduce((state, { color, label }) => {
      return items.reduce((state, n) => {
        const slug = label.toLowerCase();
        const propertyName = `--${prefix}-color-light-${slug}-tint-${Math.round(n * 100)}`;
        const baseName = `--${prefix}-color-light-${slug}-tint-100`;
        const propertyValue =
          n === 1
            ? color
            : `color-mix(in lab, var(${baseName}) ${n * 100}%, var(--basis-color-root-background-color, white) ${100 - n * 100}%)`;
        state[propertyName] = propertyValue;
        return state;
      }, state);
    }, {});

    const variablesDark = colors.reduce((state, { color, label }) => {
      return items.reduce((state, n) => {
        const slug = label.toLowerCase();
        const propertyName = `--${prefix}-color-dark-${slug}-tint-${Math.round(n * 100)}`;
        const baseName = `--${prefix}-color-dark-${slug}-tint-100`;
        const propertyValue =
          n === 1
            ? color
            : `color-mix(in lab, var(${baseName}) ${n * 100}%, var(--basis-color-root-background-color, black) ${100 - n * 100}%)`;

        // const propertyValue = `color-mix(in lab, ${color} ${n * 100}%, var(--rhs-color-dark, black) ${100 - n * 100}%)`;
        state[propertyName] = propertyValue;
        return state;
      }, state);
    }, {});

    const colorVariables = {
      ...variablesLight,
      ...variablesDark,
    };

    // walkTokens(designTokens, (path, token) => {
    //   console.log(path.join('.'));
    // });
    Object.entries(colorVariables).forEach(([key, value]) => {
      this.style.setProperty(key, value);
    });
    console.log(this.style.cssText);

    return html`<table>
        <thead>
          <tr>
            <th></th>
            ${colors.map(({ label }) => html`<th>${label}</th>`)}
          </tr>
        </thead>
        <tbody>
          ${items.map(
            /*
                            xstyle="color: oklab(from ${color} calc(l) calc(a) calc(b) / calc(${item}))"
                            xxstyle="color: oklab(from ${color} ${item} calc(a) calc(b) / calc(alpha))"
                            xstyle="color: oklab(from ${color} calc(l * (2 - ${item})) calc(a) calc(b) / calc(alpha))"
                            ystyle="color: oklch(from ${color} calc(l * (2 - ${item})) calc(c) calc(h) / calc(alpha))"*/
            (item) =>
              html`<tr>
                <th>${item * 100}</th>
                ${colors.map(({ color, label }) => {
                  const slug = label.toLowerCase();
                  return html`<td>
                    <data
                      class="utrecht-color-sample"
                      style="--color: var(--${prefix}-color-light-${slug}-tint-${Math.round(
                        item * 100,
                      )}); color: var(--color); display: inline-flex; align-items: flex-end; justify-content: center;"
                    >
                      <span style="color: contrast-color(var(--color));"
                        ><code>var(--${prefix}-color-${slug}-${Math.round(item * 100)})</code></span
                      >
                      <span hidden style="color: contrast-color(var(--color));">${Math.round(item * 100)}%</span></data
                    >
                  </td>`;
                })}${colors.map(({ color, label }) => {
                  const slug = label.toLowerCase();
                  const cssVariable = `var(--${prefix}-color-dark-${slug}-tint-${Math.round(item * 100)})`;
                  return html`<td>
                    <data
                      class="utrecht-color-sample"
                      style="--color: ${cssVariable}; color: var(--color); display: inline-flex; align-items: flex-end; justify-content: center;"
                    >
                      <span style="color: contrast-color(var(--color));"><code>${cssVariable}</code></span>
                      <span hidden style="color: contrast-color(var(--color));">${Math.round(item * 100)}%</span></data
                    >
                  </td>`;
                })}
              </tr>`,
          )}
        </tbody>
      </table>

      <div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-900);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-800);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-700);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-600);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-500);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-400);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-300);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-200);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-100);"></data></div>
        <div><data class="utrecht-color-sample" style="color: var(--rhc-new-color-coolgray-tint-050);"></data></div>
      </div>`;
  }
}

customElements.define('example-color-grid', ExampleColorGrid);

const figmaTokens = await (await fetch('./figma/figma.tokens.json')).json();

const allColors = [];

walkTokens(designTokens2, (path, token) => {
  if (token.$type === 'color') {
    allColors.push({
      token,
      path,
      color: new Color(token['$value']),
    });
  }
});

const findClosestColor = (color, allColors) => {
  const sortedColors = [...allColors].sort(({ color: colorA }, { color: colorB }) => {
    // https://colorjs.io/docs/color-difference
    const a = Color.deltaE(color, colorA, 'ITP');
    const b = Color.deltaE(color, colorB, 'ITP');
    return a > b ? 1 : a === b ? 0 : -1;
  });
  return sortedColors[0];
};

const mapping = [];
Object.values(figmaTokens).forEach((tree) =>
  walkTokens(tree, (path, token) => {
    console.log(path[0]);
    if (path[0] === 'rhc-new') {
      return;
    }
    if (token.$type === 'color') {
      let color;
      try {
        color = new Color(token['$value']);
      } catch (e) {
        // The `$value` probably is a reference: `{example.color.something}`
        return;
      }

      if (color.alpha < 1) {
        // Ignore fully transparent colors
        return;
      }

      const closest = findClosestColor(color, allColors);
      console.count('x');

      mapping.push({
        token,
        tokenPath: path,
        tokenValue: token['$value'],
        newPath: closest.path,
        newValue: closest.token['$value'],
        delta: Color.deltaE(color, closest.color, 'ITP'),
      });
    }
  }),
);

const aliasTokens = {};

mapping.reduce((state, { tokenPath, token, newPath }) => {
  setPath(state, tokenPath, {
    ...token,
    $value: `{${newPath.join('.')}}`,
  });
  return state;
}, aliasTokens);

console.log(JSON.stringify(aliasTokens, null, '  '));
export class ExampleMigrationTable extends LitElement {
  static styles = css`
    .utrecht-color-sample {
      background-color: var(--utrecht-color-sample-background-color, currentColor);
      block-size: var(--utrecht-color-sample-block-size, 2em);
      border-color: var(--utrecht-color-sample-border-color, var(--utrecht-color-sample-default-border-color));
      border-radius: var(--utrecht-color-sample-border-radius, 0);
      border-style: solid;
      border-width: var(--utrecht-color-sample-border-width, 0);
      box-sizing: border-box;
      display: inline-block;
      inline-size: var(--utrecht-color-sample-inline-size, 2em);
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
  `;

  render() {
    return html`<table>
        <thead>
          <tr>
            <th>source token</th>
            <th>example source</th>
            <th>example target</th>
            <th>delta</th>
            <th>target token</th>
          </tr>
        </thead>
        <tbody>
          ${mapping.map(
            ({ tokenPath, tokenValue, delta, newPath, newValue }) =>
              html`<tr>
                <th>${tokenPath.join('.')}</th>
                <td>
                  <data class="utrecht-color-sample" style="color: ${tokenValue}"></data>
                </td>
                <td>
                  <data class="utrecht-color-sample" style="color: ${newValue}"></data>
                </td>
                <td>${delta}</td>
                <td>${newPath.join('.')}</td>
              </tr>`,
          )}
        </tbody>
      </table>
      <h2>New calculated brand tokens</h2>
      <pre>${JSON.stringify(designTokensX, null, '  ')}</pre>
      <h2>New brand tokens</h2>
      <pre>${JSON.stringify(designTokens2, null, '  ')}</pre>
      <h2>Migration alias tokens</h2>
      <pre>${JSON.stringify(aliasTokens, null, '  ')}</pre>`;
  }
}

customElements.define('example-migration-table', ExampleMigrationTable);
