import React           from 'react';
import Modal           from 'react-bootstrap/lib/Modal';
import ResponsiveEmbed from 'react-bootstrap/lib/ResponsiveEmbed';
import  './ModalWindow.less';

export default class ModalWindow extends React.Component {

    state = { showModal: false };

    closeModal       = () => {
        this.setState( {showModal: false} );
        this.props.disableItem(this.props.videoId);
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState( {showModal: !!nextProps.videoId} );
    };

    handleEnter = () => {
    };

    handleLoad = () => {
        setTimeout( () => {
            console.log(`loaded - ${this.props.name}`);
        }, 100);

    };

    render() {
        return (
            <Modal show={this.state.showModal}
                   onHide={this.closeModal}
                   autoFocus
                   bsSize='large'
                   onEnter={this.handleEnter}
            >

                <Modal.Header closeModalButton closeButton >
                    <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body >

                        <ResponsiveEmbed a16by9>
                            <iframe src={`https://player.vimeo.com/video/${ this.props.videoId }?badge=0&autopause=0&player_id=0'&autoplay=true`}
                                    frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen
                                    ref='modalVideo'
                                    onLoad={this.handleLoad}
                            />
                        </ResponsiveEmbed>

                </Modal.Body>

                <Modal.Footer>
                    <p>{this.props.description}</p>
                </Modal.Footer>

            </Modal>
        );
    }
}
