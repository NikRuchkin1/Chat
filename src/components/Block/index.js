import React from 'react';
import classNames from 'classnames';

import './Block.scss';

const Block = ({ children, className }) => (
  <div className={classNames('block', className)}>
    {children}
    <div></div>
    <span>123</span>
  </div>
);

export default Block;
