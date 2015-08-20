var React = require('react');

var BufferAvatar = React.createClass({
  render: function() {
    var imgsrc = this.props.imgsrc;
    var href = this.props.href;
    var type = this.props.type ? this.props.type : '';
    //types: small medium large
    var className = 'buffer-avatar ' + type;
    var image = <img className={className} src={imgsrc} />
    if(this.props.href) {
      return (<a className={className} href={href}>{image}</a>)
    }
    else {
      return image;
    }
  }
});

module.exports = BufferAvatar;
