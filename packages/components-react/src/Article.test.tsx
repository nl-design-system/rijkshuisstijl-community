import { render, screen } from '@testing-library/react';
import { Article } from './Article';
import '@testing-library/jest-dom';

describe('Article testcases', () => {
  it('should render successfully', () => {
    render(<Article />);
    const article = screen.getByRole('article');
    expect(article).toBeInTheDocument();
  });
});
