import { render, screen } from '@testing-library/react';
import ResultPage from '../pages/result';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Result Page', () => {
  it('displays the correct personality trait', () => {
    (useRouter as jest.Mock).mockReturnValue({
      query: { score: '1' },
    });

    render(<ResultPage />);

    const resultText = screen.getByText(/your personality trait is: extrovert/i);
    expect(resultText).toBeInTheDocument();
  });
});
