import React, { Component } from 'react';
import './Content.css';

class Content extends Component {

	constructor(props){
		super(props);
		this.intro = "London based Software Engineer";
	}

	render (){
		return <p className="app-intro">{ this.intro }</p>
	}
}

export default Content