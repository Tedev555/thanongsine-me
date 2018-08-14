import React, { Component } from 'react';
import './HomeHeader.css';

class HomeHeader extends Component {
  render() {
    return (
      <div className="HomeHeader">
        <header className="HomeHeader-space">
          <h1 className="HomeHeader-title">Welcome To My Personal Website</h1>
          <p className="HomeHeader-intro">
            I'm a front-end web developer from Kuala Lumpur. I am trying to make the web great again with Firebase, Progressive Web Apps, Polymer and Web Components.Also, I'm the co-organizer at Google Developer Group Kuala Lumpur. We organize conferences, meetups, workshops, and bringing all the latest Google technologies into the town.
          </p>
        </header>
      </div>
    );
  }
}

export default HomeHeader;
