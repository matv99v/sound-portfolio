import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';

import path from 'path';
import './SingleWork.less';

export default class SingleWork extends React.Component {
    handleClick = () => {
        this.props.activateItem(this.props.videoId);
    };

    render() {

        return (
                <Col xs={6} sm={4} md={3} style={{padding: '5px'}}>
                    <Thumbnail src       = {this.props.pictureUrl}
                               className = 'SingleWork__container'
                               onClick    = {this.handleClick}
                    >
                        <h5 >{this.props.name}</h5>
                        <p>{this.props.description}</p>
                    </Thumbnail>
                </Col>
        );
    }
}
