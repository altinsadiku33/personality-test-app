import { render, screen, fireEvent } from '@testing-library/react';
import Test from '../pages/test';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Test Page', () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            id: 1,
            question: "Do you prefer to work in a team or alone?",
            options: [
              { text: "Team", score: 1 },
              { text: "Alone", score: -1 },
            ],
          },
        ]),
      })
    ) as jest.Mock;
  });

  it('renders loading initially', () => {
    render(<Test />);
    const loading = screen.getByText(/loading.../i);
    expect(loading).toBeInTheDocument();
  });

  it('renders questions and handles answers', async () => {
    const mockRouterPush = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockRouterPush,
    });

    render(<Test />);

    const question = await screen.findByText(/do you prefer to work in a team or alone\?/i);
    expect(question).toBeInTheDocument();

    const teamButton = screen.getByText(/team/i);
    fireEvent.click(teamButton);

    expect(mockRouterPush).toHaveBeenCalledWith('/result?score=1');
  });
});
