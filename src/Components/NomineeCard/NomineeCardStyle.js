import { css } from '@emotion/css';
import { Colors } from '../constants';

export const styCard = css`
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: 6px solid transparent;
  box-shadow: 0 14px 26px rgba(0,0,0,0.04);
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    display: block;
    transform-origin: top center;
    transition: transform 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &.selected {
    border-color: ${Colors.green};

    .description button {
      background-color: ${Colors.grey};
    }
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 16px;
    opacity: 0;
    transform: translateY(100%);
    transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
    background-image: ${`linear-gradient(to top, ${Colors.black}, 70%, transparent)`};

    h3 {
      font-size: 1.5rem;
    }

    button {
      color: ${Colors.white};
      background-color: ${Colors.green2};
	    outline: inherit;
      padding: 8px 16px;
	    border: none;
      cursor: pointer;
      font-weight: 700;
      transition: transform 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);

      &:hover {
        transform: scale(110%);
      }

      &:active {
        transform: scale(90%);
      }
    }
  }

  &.selected,
  &:hover,
  &:active {
    border-color: ${Colors.green};

    img {
      transform: scale(105%);
    }

    .description {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const styCardLoader = css`
  background-color: ${Colors.grey};
`;