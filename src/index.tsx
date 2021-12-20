// <reference path='../index.d.ts'/>
import React, { FunctionComponent } from 'react';
import { render } from 'react-dom';
import Footer from './components/Footer';
import MainContainer from './containers/MainContainer';
import * as serviceWorker from './serviceWorker';
import './scss/style.scss';

const App: FunctionComponent = () => (
  <>
    <MainContainer />
    <Footer />
  </>
);

render(<App />, document.getElementById('app'));

serviceWorker.register();
