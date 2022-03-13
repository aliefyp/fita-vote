import { render } from '@testing-library/react';
import NomineeCard from './NomineeCard';

const mockOnVote = jest.fn();
const mockMovieData = {
  "title": "Mulan",
  "photoUrL": "https://variety.com/wp-content/uploads/2020/12/minari-1.jpg",
  "id": "mulan"
}

test('unselected card', () => {
  const { getByTestId } = render(<NomineeCard movie={mockMovieData} selected={false} onVote={mockOnVote} />);
  const card = getByTestId('divNomineeCard');
  const voteBtn = card.querySelector('button');
  expect(card).toBeInTheDocument();
  expect(voteBtn).not.toBeVisible();
});

test('selected card', () => {
  const { getByTestId } = render(<NomineeCard movie={mockMovieData} selected={true} onVote={mockOnVote} />);
  const card = getByTestId('divNomineeCard');
  const voteBtn = card.querySelector('button');
  expect(card).toBeInTheDocument();
  expect(voteBtn).toBeVisible();
});
