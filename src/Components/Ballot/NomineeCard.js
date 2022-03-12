import React from 'react';
import { styCard } from './NomineeCardStyle';

const NomineeCard = ({ data }) => {
  return (
    <div className={styCard}>
      <img src={data.photoUrL} alt={data.id} loading="lazy" />
    </div>
  );
}

export default NomineeCard;