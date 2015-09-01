import React from 'react';
import { getValidProps } from '../utils';

class Card extends React.Component {
  render () {
    return (
      <div className="Card"
           {...getValidProps(this.props)}>
        {this.props.children}
      </div>
    )
  }
}

export default Card;
