import React from 'react';
import useBallotData from '../../Hooks/useBallotData';
import { styGrid, styCategoryTitle } from './BallotStyle';
import NomineeCard from './NomineeCard';

const Ballot = () => {
  const { data, loading } = useBallotData();

  return (
    <div className='ballot'>
      {data.map(category => (
        <div>
          <h2 className={styCategoryTitle}>{category.title}</h2>
          <div className={styGrid}>
            {category.items.map((movie, index) => (
              <NomineeCard key={`nominee-${index}`} data={movie} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Ballot;