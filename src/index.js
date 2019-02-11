import React, { Component } from 'react';
import { render } from 'react-dom';
import Card from './components/Card';
import Button from './components/Button';
import { ScoreBoard } from './components/ScoreBoard';
import configureStore from './configureStore';
import { Provider } from 'react-redux';
import App from './App';
const store = configureStore();


render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
