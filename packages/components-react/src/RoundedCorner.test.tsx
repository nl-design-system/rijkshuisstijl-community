import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { RoundedCorner } from './RoundedCorner';

describe('RoundedCorner', () => {
  it('applies correct class names based on props', async () => {
    render(<RoundedCorner corner="start-start" data-testid="rhc-rounded-corner" size="md" />);

    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');

    expect(roundedCorner).toBeInTheDocument();
    expect(roundedCorner).toHaveClass('rhc-rounded-corner--corner-start-start');
  });

  it('applies custom overwriteTokens correctly', async () => {
    const overwriteTokens = {
      '--rhc-rounded-corner-radius': '10px',
      '--rhc-rounded-corner-overflow': 'hidden',
    };
    render(<RoundedCorner corner="start-start" data-testid="rhc-rounded-corner" overwriteTokens={overwriteTokens} />);
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    // check base style instead of variable
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-radius')).toBe('10px');
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-overflow')).toBe('hidden');
  });

  it('merges classname prop correctly', async () => {
    render(<RoundedCorner className="custom-class" corner="start-start" data-testid="rhc-rounded-corner" />);
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    expect(roundedCorner.classList).toContain('custom-class');
  });

  it('merges style prop correctly with overwriteTokens', async () => {
    const overwriteTokens = {
      '--rhc-rounded-corner-radius': '15px',
    };
    const styleProp = {
      backgroundColor: 'red',
    };
    render(
      <RoundedCorner
        corner="start-start"
        data-testid="rhc-rounded-corner"
        overwriteTokens={overwriteTokens}
        style={styleProp}
      />,
    );
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-radius')).toBe('15px');
    expect(roundedCorner.style.backgroundColor).toBe('red');
  });
});

afterEach(() => cleanup());
