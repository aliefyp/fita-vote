import { render } from '@testing-library/react';
import Loader from '../Loader';

test('renders loaders', () => {
  const { getAllByTestId } = render(<Loader />);
  const loaders = getAllByTestId('divLoader');
  expect(loaders).toHaveLength(5);
});
