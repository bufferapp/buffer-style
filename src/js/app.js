var React = require('react');
var BufferAvatar = require('./BufferAvatar');

React.render(
  <BufferAvatar type={'small'} imgsrc={'https://buffer.com/images/team/sunil.png'} />, document.getElementById('avatarsmall')
);

React.render(
  <BufferAvatar type={'medium'} imgsrc={'https://buffer.com/images/team/sunil.png'} />, document.getElementById('avatarmedium')
);

React.render(
  <BufferAvatar type={'large'} imgsrc={'https://buffer.com/images/team/sunil.png'} />, document.getElementById('avatarlarge')
);


