import React, { memo } from 'react';
import { cx } from '@emotion/css';
import { styCard, styCardLoader } from './NomineeCardStyle';

const NomineeCard = ({ movie, selected, disableOnHover, onVote }) => {
  const handleVote = () => {
    onVote(movie)
  }

  return (
    <div className={cx([styCard, (selected && 'selected'), (disableOnHover && 'disabled')])}>
      <img src={movie.photoUrL} alt={movie.id} loading="lazy" />
      <div className="description">
        <h3>{movie.title}</h3>
        <button onClick={handleVote} type="button">
          {selected ? 'VOTED' : 'VOTE NOW!'}
        </button>
      </div>
    </div>
  );
}

export default memo(NomineeCard);