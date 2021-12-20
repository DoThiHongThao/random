import React, { memo } from 'react';

function Header() {
  return (
    <h1>
      Random{' '}
      <sup
        className="warning tooltip"
        data-tooltip="Generator of random positive integers in a given range"
      >
        *
      </sup>
    </h1>
  );
}

export default memo(Header);
