import React from 'react';
import { styLoaderGrid, styLoaderCard } from './LoaderStyle';

const Loader = () => {
  return (
    <div className={styLoaderGrid}>
      {[...new Array(5)].map(item => (
        <div className={styLoaderCard} />
      ))}
    </div>
  );
}

export default Loader;
