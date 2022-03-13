import { render } from '@testing-library/react';
import NomineeCategory from './NomineeCategory';

const mockOnVote = jest.fn();
const mockSelected = {
  "best-picture": "",
  "best-director": "",
  "best-actor": "",
  "best-actress": "",
  "best-supporting-actor": "",
  "best-supporting-actress": "",
  "best-visual-effects": ""
};
const mockCategoryData = {
  "id": "best-visual-effects",
  "items": [
      {
          "title": "The Midnight Sky",
          "photoUrL": "https://variety.com/wp-content/uploads/2020/12/midnight_sky_ver2.jpg",
          "id": "midnight-sky"
      },
      {
          "title": "Tenet",
          "photoUrL": "https://variety.com/wp-content/uploads/2020/12/tenet_ver7.jpg",
          "id": "tenet"
      },
      {
          "title": "Wonder Woman 1984",
          "photoUrL": "https://variety.com/wp-content/uploads/2020/12/wonder_woman_nineteen_eighty_four_ver18.jpg",
          "id": "wonder-woman"
      },
      {
          "title": "The Invisible Man",
          "photoUrL": "https://variety.com/wp-content/uploads/2020/12/invisible_man.jpg",
          "id": "the-invisible-man"
      },
      {
          "title": "Mulan",
          "photoUrL": "https://variety.com/wp-content/uploads/2020/12/minari-1.jpg",
          "id": "mulan"
      }
  ],
  "title": "Best Visual Effects"
}

test('render category', () => {
  const { getByTestId, getAllByTestId } = render(
    <NomineeCategory
      category={mockCategoryData}
      selected={mockSelected}
      onVote={mockOnVote}
    />
  );

  const category = getByTestId('divNomineeCategory');
  expect(category).toBeInTheDocument();

  const title = getByTestId('divNomineeCategoryTitle');
  expect(title.textContent).toBe('Best Visual Effects'.toLocaleUpperCase());

  const cards = getAllByTestId('divNomineeCard');
  expect(cards).toHaveLength(5);
});
