import React, { Component } from 'react';

import './Header.css';

class Header extends Component {

    constructor(props){
        super(props);
        this.name = "Christopher Moore";
        this.initials = "CM";
    }

    render(){
        return (
            <div className="app-header">
                <div id="logo" className="no-spin">{ this.initials }</div>
                <h2>{ this.name }</h2>
            </div>
        )
    }
}

export default Header;