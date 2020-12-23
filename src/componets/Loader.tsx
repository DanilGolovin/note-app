import React from 'react';

import LoaderStyles from '../styles/Loader.module.css';

const Loader = () => (
  <div className={LoaderStyles.gooey}>
    <span className={LoaderStyles.dot}></span>
    <div className={LoaderStyles.dots}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
);

export default Loader;
