
import { injectGlobal, css } from '@emotion/css'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
  }
`

export const styGrid = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

export const styCategoryTitle = css`
  padding: 12px 24px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  background-color: #ffffff;
`;