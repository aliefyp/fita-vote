import { render } from '@testing-library/react';
import useBallotData from '../../Hooks/useBallotData';
import Ballot from '../Ballot';

jest.mock('../../Hooks/useBallotData');

const mockData = [
  {
      "id": "best-picture",
      "items": [
          {
              "title": "Nomadland",
              "photoUrL": "https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg",
              "id": "nomadland"
          },
          {
              "title": "The Trial of the Chicago 7",
              "photoUrL": "https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg",
              "id": "the-trial-of-the-chicago-7"
          },
          {
              "title": "Minari",
              "photoUrL": "https://variety.com/wp-content/uploads/2020/12/Minari.jpg",
              "id": "minari"
          },
          {
              "title": "Mank",
              "photoUrL": "https://variety.com/wp-content/uploads/2020/12/mank.jpg",
              "id": "mank"
          },
          {
              "title": "One Night in Miami",
              "photoUrL": "https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg",
              "id": "one-night-in-miami"
          }
      ],
      "title": "Best Picture"
  },
]

test('loading', () => {
  useBallotData.mockImplementation(() => ({
    data: [],
    loading: true,
  }));

  const { getAllByTestId } = render(<Ballot />);
  const loaders = getAllByTestId('divLoader');
  expect(loaders).toHaveLength(5);
});

test('data returned', () => {
  useBallotData.mockImplementation(() => ({
    data: mockData,
    loading: false,
  }));

  const { getAllByTestId } = render(<Ballot />);

  const category = getAllByTestId('divNomineeCategory');
  expect(category).toHaveLength(1);

  const card = getAllByTestId('divNomineeCard');
  expect(card).toHaveLength(5);
});
