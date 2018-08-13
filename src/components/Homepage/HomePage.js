import React, { Component } from 'react';
import AppBar from '../AppBar/AppBar';
import HomeHeader from './HomeHeader';
import HomeArticle from './HomeArticle';

class HomePage extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <HomeHeader/>
                <HomeArticle/>
            </div>
        )
    }
}

export default HomePage;