import React from 'react';
import Card from './components/Card.jsx';

React.render(
  (
    <Card>
      <p>content</p>
    </Card>
  ),
  document.querySelector('#js-card')
);
