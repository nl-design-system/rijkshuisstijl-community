import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { RoundedCorner } from './RoundedCorner';

describe('RoundedCorner', () => {
  it('applies correct class names based on props', async () => {
    render(<RoundedCorner data-testid="rhc-rounded-corner" position="start-start" size="md" />);

    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');

    expect(roundedCorner).toBeInTheDocument();
    expect(roundedCorner).toHaveClass('rhc-rounded-corner--position-start-start');
  });

  it('applies custom overwriteTokens correctly', async () => {
    const overwriteTokens = {
      '--rhc-rounded-corner-border-radius': '10px',
      '--rhc-rounded-corner-overflow': 'hidden',
    };
    render(<RoundedCorner data-testid="rhc-rounded-corner" overwriteTokens={overwriteTokens} position="start-start" />);
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-border-radius')).toBe('10px');
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-overflow')).toBe('hidden');
  });

  it('merges classname prop correctly', async () => {
    render(<RoundedCorner className="custom-class" data-testid="rhc-rounded-corner" position="start-start" />);
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    expect(roundedCorner.classList).toContain('custom-class');
  });

  it('merges style prop correctly with overwriteTokens', async () => {
    const overwriteTokens = {
      '--rhc-rounded-corner-border-radius': '15px',
    };
    const styleProp = {
      backgroundColor: 'red',
    };
    render(
      <RoundedCorner
        data-testid="rhc-rounded-corner"
        overwriteTokens={overwriteTokens}
        position="start-start"
        style={styleProp}
      />,
    );
    const roundedCorner = await screen.getByTestId('rhc-rounded-corner');
    expect(roundedCorner.style.getPropertyValue('--rhc-rounded-corner-border-radius')).toBe('15px');
    expect(roundedCorner.style.backgroundColor).toBe('red');
  });
});

afterEach(() => cleanup());
