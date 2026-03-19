import '@testing-library/jest-dom/vitest';
import { Article } from '@rijkshuisstijl-community/article-react';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';

describe('Article testcases', () => {
  it('should render successfully', () => {
    render(<Article />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
