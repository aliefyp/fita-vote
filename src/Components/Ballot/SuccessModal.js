import React from 'react';
import { styModalContainer, styModalOverlay, styVoteList } from './SuccessModalStyle';

const SuccessModal = ({ show, categoryData, voteData, onClose }) => {
  if (!show) return null;

  const handleOnClose = () => {
    window.scrollTo({ top: 0 })
    window.location.reload()
  }

  return (
    <div className={styModalOverlay} onClick={handleOnClose}>
      <div className={styModalContainer}>
        <span className="close" />
        <h2>THANK YOU</h2>
        <p>for your vote</p>
        <div className={styVoteList}>
          {Object.keys(voteData).map(key => {
            const item = voteData[key];
            if (!item) return null;
            
            const categoryTitle = categoryData.find(i => i.id === key)?.title;

            return (
              <div>
                <img src={item.photoUrL} alt={item.id} loading="lazy" />
                <p>{categoryTitle}</p>
              </div>
            )
          })}
        </div>
        <button type="button" onClick={handleOnClose}>CLOSE</button>
      </div>
    </div>
  );
};

export default SuccessModal;
