import React       from 'react';
import Masonry     from 'react-masonry-component';
import FadeLoader  from './FadeLoader.jsx';
import SingleWork  from './SingleWork.jsx';
import fetchData   from '../utilities/fetchData.js';
import ModalWindow from './ModalWindow.jsx';
// import BluePromise from 'bluebird';
import './Portfolio.less';

export default class Portfolio extends React.Component {
    state = {
        portfolio: [],
        modalVideoId: null
    };

    componentWillMount = () => {
        const URL = 'https://api.vimeo.com/users/13946485/videos?per_page=50&access_token=c33c9d2922bd3bdbb3c1f88c5f520854';

        fetchData(URL)
            .then(info => {
                const arr = info.data.map( (el, i) => {
                    return {
                        name       : el.name,
                        description: el.description,
                        pictureUrl : el.pictures.sizes[2].link_with_play_button,
                        videoId    : el.uri.match(/\d+$/)[0]
                    };
                });
                this.setState( {...this.state, portfolio: arr} );
            })
            .catch(e => console.error(e) );
    };

    activateClickedEl = videoId => {
        this.setState( {...this.state, modalVideoId: videoId} );
    };

    disableClickedEl = videoId => {
        this.setState( {...this.state, modalVideoId: null} );
    };

    getModalAttr = videoId => {
        const clickedElement  = this.state.portfolio.find(el => el.videoId === this.state.modalVideoId);
        return videoId ? {
            videoId     : clickedElement.videoId,
            name        : clickedElement.name,
            description : clickedElement.description
        } : {};
    };

    render() {
        return (
            <div>
                <FadeLoader display={this.state.portfolio.length ? 'none' : ''}/>

                <Masonry >
                    {
                        this.state.portfolio.map((el, i) => {
                            return (
                                <SingleWork name        = {el.name}
                                            description = {el.description}
                                            pictureUrl  = {el.pictureUrl}
                                            videoId     = {el.videoId}
                                            aspectRatio = {el.aspectRatio}
                                            key         = {i}
                                            activateItem = {this.activateClickedEl.bind(this)}
                                />
                            );
                        })
                    }
                </Masonry>

                <ModalWindow disableItem = {this.disableClickedEl.bind(this)}
                             {...this.getModalAttr(this.state.modalVideoId)}
                />
            </div>
        );
    }
}
