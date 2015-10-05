import React from 'react';
import Card from './components/Card.jsx';

React.render(
  (
    <Card>
      <p>This is a card</p>
    </Card>
  ),
  document.querySelector('#js-card')
);
