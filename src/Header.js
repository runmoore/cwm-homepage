import React, { Component } from 'react';

import './Header.css';

class Header extends Component {

    constructor(props){
        super(props);
        this.name = "Christopher Moore";
        this.initials = "CM";
        this.intro = "London based Software Engineer";
    }

    render(){
        return (
            <div className="app-header">
                <div id="logo">{ this.initials }</div>
                <h2>{ this.name }</h2>
                <p className="app-intro">{ this.intro }</p>
            </div>
        )
    }
}

export default Header;