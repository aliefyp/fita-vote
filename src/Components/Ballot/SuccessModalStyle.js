import { css, keyframes } from '@emotion/css';
import { Colors } from '../constants';

const pop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(60px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const styModalOverlay = css`
  position: fixed;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.8);
`;

export const styModalContainer = css`
  background-color: ${Colors.black};
  margin: 15% auto;
  padding: 32px 16px 16px;
  width: auto;
  max-width: 80vw;
  border-radius: 8px;
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  display: inline-block;
  animation: ${pop} 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  @media screen and (min-width: 768px) {
    padding: 64px 32px 32px;
  }

  * {
    margin: 0;
  }

  h2 {
    font-size: 2rem;
  }

  button {
    padding: 16px 0;
    outline: none;
    border: none;
    width: 100%;
    background-color: ${Colors.green};
    font-weight: 900;
    font-size: 1.2rem;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    
    &:hover {
      transform: scale(105%);
    }

    &:active {
      transform: scale(90%);
    }

    @media screen and (min-width: 768px) {
      width: 400px;
    }
  }
`;

export const styVoteList = css`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin: 40px auto;
  position: relative;

  div {
    width: 120px;
    display: flex;
    flex-direction: column;

    p {
      margin: 16px 0;
    }

    img {
      flex-grow: 1;
      border-radius: 8px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;