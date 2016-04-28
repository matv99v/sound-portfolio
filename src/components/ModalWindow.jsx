import React     from 'react';
import Modal     from 'react-bootstrap/lib/Modal';
import ResponsiveEmbed     from 'react-bootstrap/lib/ResponsiveEmbed';
import  './ModalWindow.less';

export default class ModalWindow extends React.Component {

    state = {
        showModal: false,
        windowWidth: window.innerWidth
    };

    handleResize = () => {
        this.setState({...this.state, windowWidth: window.innerWidth});
    };

    componentDidMount = () => {
        window.addEventListener('resize', this.handleResize);
    };

    componentWillUnmount = () => {
        window.removeEventListener('resize', this.handleResize);
    };

    closeModal       = () => {
        this.setState( {showModal: false} );
        this.props.disableItem(this.props.videoId);
    };

    componentWillReceiveProps = (nextProps) => {
        this.setState( {showModal: !!nextProps.videoId} );
    };

    render() {
        console.log(this.props);
        return (
            <Modal show={this.state.showModal}
                   onHide={this.closeModal}
                   autoFocus
                   dialogClassName="ModalWindow__main"
                   bsSize='large'
                   >

                <Modal.Header closeModalButton closeButton >
                    <Modal.Title>{this.props.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body style={{width: '100%', height: 'auto'}}>

                        <ResponsiveEmbed a16by9>
                            <embed src={`https://player.vimeo.com/video/${ this.props.videoId }?badge=0&autopause=0&player_id=0'&autoplay=true`} />
                        </ResponsiveEmbed>

                </Modal.Body>

                <Modal.Footer>
                    <p>{this.props.description}</p>
                </Modal.Footer>

            </Modal>
        );
    }
}
