import { css } from '@emotion/css';
import { Colors } from '../constants';

export const styLoaderGrid = css`
  display: grid;
  gap: 16px;
  padding: 0 16px;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const styLoaderCard = css`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 6px solid transparent;
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  background-color: ${Colors.grey};
  height: 250px;
  opacity: 0.2;
`;