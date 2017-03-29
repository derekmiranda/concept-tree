import React, { Component } from 'react';

class SourceContainer extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    return (
      <div className='source'>
        <h2>Source {this.props.num}</h2>
        <input type='text' placeholder='Type your notes here' />
      </div>
    );
  }
};

export default SourceContainer;