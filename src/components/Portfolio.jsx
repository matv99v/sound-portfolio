import React       from 'react';

import FadeLoader  from './FadeLoader.jsx';
import SingleWork  from './SingleWork.jsx';
import fetchData   from '../utilities/fetchData.js';
import getRatio    from '../utilities/getRatio.js';
import ModalWindow from './ModalWindow.jsx';

import Masonry     from 'react-masonry-component';

import BluePromise from 'bluebird';

import './Portfolio.less';



export default class Portfolio extends React.Component {
    state = {
        portfolio: null,
        showModalId: null
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
                        videoId    : el.uri.match(/\d+$/)[0],
                        aspectRatio: getRatio(el.width, el.height)
                    };
                });
                this.setState( {portfolio: arr} );
            })
            .catch(e => console.error(e) );
    };

    activateClickedEl = (videoId) => {
        this.setState( {...this.state, showModalId: videoId} );
    };

    disableClickedEl = (videoId) => {
        this.setState( {...this.state, showModalId: null} );
    };

    render() {
        const modalAttr = {
            name: null,
            description: null
        };

        if (this.state.showModalId) {
            const clickedElement  = this.state.portfolio.find(el => el.videoId === this.state.showModalId);
            modalAttr.name        = clickedElement.name;
            modalAttr.description = clickedElement.description;
            modalAttr.aspectRatio = clickedElement.aspectRatio;
        }

        return (
            <div>
                <FadeLoader display={this.state.portfolio ? 'none' : ''}/>
                <Masonry >
                    {
                        this.state.portfolio
                            ?
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
                            :
                                null
                    }
                </Masonry>

                <ModalWindow videoId     = {this.state.showModalId}
                             disableItem = {this.disableClickedEl.bind(this)}
                             {...modalAttr}

                />
            </div>
        );
    }
}
