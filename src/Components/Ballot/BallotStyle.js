import { css } from '@emotion/css';
import { Breakpoints, Colors } from '../constants';

export const styBanner = css`
  width: 100%;
  height: 100vh;
  background-image: url('/banner.jpeg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 48px;
  padding: 32px;
  width: 100vw;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    padding: 64px;
    height: unset;
  }

  &:before {
    content: '';
    filter: blur(4px);
    position: absolute;
    left: 0;
    top: 0;
    width: 150%;
    height: 150%;
    transform: translateX(-10%);
    background-image: ${`linear-gradient(to top, ${Colors.black}, 90%, transparent)`};
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
  }

  h1 {
    font-size: 4rem;
    text-transform: uppercase;
    line-height: 0.85;
    font-weight: 900;
    text-align: left;
    z-index: 1;
    margin: 0;

    span {
      color: ${Colors.green};
    }

    @media screen and (min-width: 1024px) {
      font-size: 5rem;
    }
  }
`;

export const styWrapper = css`
  max-width: 1024px;
  margin: 0 auto 160px;
`;

export const styFooter = css`
  padding: 32px 16px 16px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background-image: ${`linear-gradient(to top, ${Colors.black}, 90%, transparent)`};
  z-index: 2;

  button {
    padding: 16px 0;
    outline: none;
    border: none;
    width: 100%;
    background-color: ${Colors.green};
    font-weight: 900;
    font-size: 1.2rem;
    /* text-transform: uppercase; */
    cursor: pointer;
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    
    &:hover {
      transform: scale(105%);
    }

    &:active {
      transform: scale(90%);
    }

    @media screen and (min-width: ${Breakpoints.sm}) {
      width: 400px;
    }
  }
`;

export const styError = css`
  margin: 32px auto;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  img {
    width: 200px;
    margin-bottom: 32px;

    @media screen and (min-width: ${Breakpoints.sm}) {
      width: 400px;
    }
  }
`