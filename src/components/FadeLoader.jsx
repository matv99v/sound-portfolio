import React from 'react';
import SyncLoader from 'halogen/SyncLoader';
import './FadeLoader.less';

export default class Loader extends React.Component {
    render() {
        const obj = {
            position: 'absolute',
            top: '48%',
            left: '45%',
            display: this.props.display
        };

        return (
            <div style={obj}>
                <SyncLoader color="#DDD"
                            size="16px"
                            margin="4px"
                />
            </div>
        );
    }
}
