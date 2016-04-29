import React from 'react';
import Navigation from './Navigation.jsx';
import Portfolio from './Portfolio.jsx';
import Example from './Example.jsx';


export default class App extends React.Component {

    render() {
        return (
            <div>
                <Navigation />
                <Portfolio />
            </div>
        );
    }
}
