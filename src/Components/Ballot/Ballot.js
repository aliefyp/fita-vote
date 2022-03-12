import React, { useCallback, useEffect, useState, useMemo } from 'react';
import { injectGlobal } from '@emotion/css';
import useBallotData from '../../Hooks/useBallotData';
import { Colors } from '../constants';
import NomineeCategory from './NomineeCategory';
import Loader from './Loader';
import SuccessModal from './SuccessModal';
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
  const [voteData, setVoteData] = useState({});
  const [showPopup, setShopPopup] = useState(false);
  const { data, loading } = useBallotData();

  const hasVoting = useMemo(() => {
    const keys = Object.keys(voteData);
    return keys.some(k => voteData[k] !== '');
  }, [voteData])

  const handleVote = (category, nominee) => {
    setVoteData({
      ...voteData,
      [category]: nominee,
    })
  }

  const handleSubmit = useCallback(() => {
    if (!hasVoting) {
      const contentTop = document.querySelector('#content').offsetTop;

      window.scrollTo({
        top: contentTop,
        behavior: 'smooth',
      });

      return false;
    }

    setShopPopup(true);
  }, [hasVoting]);

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
      <div className={styWrapper} id="content">
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
        <button onClick={handleSubmit}>{hasVoting ? 'Vote!' : 'Start Voting'}</button>
      </div>
      <SuccessModal
        show={showPopup}
        categoryData={data}
        voteData={voteData}
      />
    </div>
  )
}

export default Ballot;