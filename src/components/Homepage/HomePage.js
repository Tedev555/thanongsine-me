import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import HomeHeader from './HomeHeader';
import HomeArticle from './HomeArticle';
import Portfolio from './Portfolio';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <HomeHeader/>
                <HomeArticle/>
                <Portfolio/>
            </div>
        )
    }
}

export default HomePage;