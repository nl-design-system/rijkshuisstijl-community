import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Article } from './Article';

describe('Article testcases', () => {
  it('should render successfully', () => {
    render(<Article />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
