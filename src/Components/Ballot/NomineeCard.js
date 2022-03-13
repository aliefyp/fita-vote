import React, { memo } from 'react';
import { cx } from '@emotion/css';
import { styCard } from './NomineeCardStyle';

const NomineeCard = ({ movie, selected, onVote }) => {
  const handleVote = () => {
    if (!selected) onVote(movie)
  }

  return (
    <div className={cx([styCard, (selected && 'selected')])} data-testid="divNomineeCard">
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