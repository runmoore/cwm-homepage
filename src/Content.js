import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.intro = 'London based Software Engineer';
  }

  render() {
    return (
      <div>
        <p className="app-intro">{ this.intro }</p>
        <code>puevfzbber@bhgybbx.pbz 13</code>
      </div>
    );
  }
}

export default Content;
