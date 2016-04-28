import React from 'react';
import FadeLoader from 'halogen/SyncLoader';

export default class Loader extends React.Component {
    render() {
        const obj = {
            position: 'static',
            top: '48%',
            left: '45%'
        };

        return (
            <div style={obj}>
                <FadeLoader color="#26A65B" size="16px" margin="4px"/>
            </div>
        );
    }
}
