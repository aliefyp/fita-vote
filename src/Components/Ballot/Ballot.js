import React, { useCallback, useEffect, useState } from 'react';
import { injectGlobal } from '@emotion/css';
import useBallotData from '../../Hooks/useBallotData';
import { Colors } from '../constants';
import NomineeCategory from './NomineeCategory';
import NomineeCard from './NomineeCard';
import Loader from './Loader';
import { styBanner, styWrapper, styFooter } from './BallotStyle';

injectGlobal`
  * {
    box-sizing: border-box;
    color: ${Colors.white};

    &:hover {
      color ${Colors.grey};
    }
  }

  html, body {
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    background-color: ${Colors.black};
  }

  h1, h2, h3, h4, h5 {
    font-weight: 700;
  }
`

const Ballot = () => {
  const [voteData, setVoteData] = useState(null);
  const { data, loading } = useBallotData();

  const handleVote = (category, nominee) => {
    setVoteData({
      ...voteData,
      [category]: nominee,
    })
  }

  const handleSubmit = useCallback(() => {
    
  }, [])

  // assign api response to voteData state
  useEffect(() => {
    if (data.length && !voteData) {
      const vote = {}
      data.forEach(category => {
        vote[category.id] = '';
      })
      setVoteData(vote);
    }
  }, [data, voteData]);

  return (
    <div className='ballot'>
      <div className={styBanner}>
        <h1><span>FITA</span> MOVIE<br />FAN VOTE<br />2022</h1>
      </div>
      <div className={styWrapper}>
        {loading && <Loader />}
        {!loading && data?.map(category => (
          <NomineeCategory
            key={category.id}
            category={category}
            selected={voteData}
            onVote={handleVote}
          />
        ))}
      </div>
      <div className={styFooter}>
        <button onClick={handleSubmit}>Submit Vote</button>
      </div>
    </div>
  )
}

export default Ballot;