var React = require('react');
var BufferAvatar = require('./BufferAvatar');

React.render(
  <BufferAvatar type={'small'} imgsrc={'https://local.buffer.com/images/team/sunil.png'} />, document.getElementById('avatarsmall')
);

React.render(
  <BufferAvatar type={'medium'} imgsrc={'https://local.buffer.com/images/team/sunil.png'} />, document.getElementById('avatarmedium')
);

React.render(
  <BufferAvatar type={'large'} imgsrc={'https://local.buffer.com/images/team/sunil.png'} />, document.getElementById('avatarlarge')
);


