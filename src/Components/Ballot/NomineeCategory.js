import React from 'react';
import { styGrid, styCategoryContainer, styCategoryTitle } from './NomineeCategoryStyle';
import NomineeCard from './NomineeCard';

const NomineeCategory = ({ category, selected, onVote }) => {
  const handleVote = nominee => {
    onVote(category.id, nominee)
  }

  return (
    <>
      <div className={styCategoryContainer}>
        <h2 className={styCategoryTitle}>{category.title.toUpperCase()}</h2>
        <div className={styGrid}>
          {category.items.map(movie => (
            <NomineeCard
              key={movie.id}
              movie={movie}
              selected={selected?.[category.id]?.id === movie.id}
              onVote={handleVote}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default NomineeCategory;