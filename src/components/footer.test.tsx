import React from 'react';
import { render } from '@testing-library/react';
import Footer from '~components/Footer';

describe('Footer component', () => {
  beforeAll(() => {
    let portalRoot = document.getElementById('footer');
    if (!portalRoot) {
      portalRoot = document.createElement('div');
      portalRoot.setAttribute('id', 'footer');
      document.body.appendChild(portalRoot);
    }
  });

  it('Footer in a portal should take a snapshot', () => {
    const { baseElement } = render(<Footer />);

    expect(baseElement).toMatchSnapshot();
  });
});
