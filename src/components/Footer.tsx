import React, { memo } from 'react';
import { createPortal } from 'react-dom';

const version =
  process.env.NODE_ENV === 'test' ? '1.0.0' : process.env.npm_package_version;

function Footer() {
  const FooterContent = (
    <span>
      <a
        href="https://github.com/SW999/random-number"
        rel="nofollow"
        title="Github page"
      ></a>{' '}
      | Siarhei Vaitehovich | {`v. ${version}`}
    </span>
  );

  return createPortal(FooterContent, document.getElementById('footer'));
}

export default memo(Footer);
