import React, { Component } from 'react';
import './Links.css';

class Links extends Component {

  constructor(props) {
    super(props);
    this.links = [{
      id: 'twitter',
      name: 'fa fa-twitter',
      link: 'https://twitter.com/runmoore',
    },
    {
      id: 'instagram',
      name: 'fa fa-instagram',
      link: 'https://www.instagram.com/runmoore',
    },
    {
      id: 'linkedin',
      name: 'fa fa-linkedin-square',
      link: 'https://uk.linkedin.com/in/christopherwesleymoore',
    },
    {
      id: 'github',
      name: 'fa fa-github',
      link: 'https://github.com/runmoore',
    },
    {
      id: 'stack',
      name: 'fa fa-stack-overflow',
      link: 'http://stackoverflow.com/users/6806381/christopher-moore',
    },
    ];
  }

  render() {
    const links = [];
    this.links.forEach(link =>
      links.push(
        <a key={link.id} href={link.link} target="_blank" rel="noopener noreferrer">
          <span className={link.name} aria-hidden="true" />
        </a>,
      ),
    );

    return (
      <div id="links">
        { links }
      </div>
    );
  }
}

export default Links;
