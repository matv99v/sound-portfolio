import React from 'react';

export default class Example extends React.Component {
    state = { isLoading: true };

    _iframeLoaded = () => {
        this.setState( {isLoading: false} );
        console.log('loaded!');
    };


    render() {
        // const classes = cx({
        //     'is-loading': this.state.isLoading // Hide `is-loading` with CSS
        // });

        return (
            <div>
                {
                    this.state.isLoading
                        ? <p>Loading... A spinner would probably be nice here</p>
                        : null
                }

                {/* <BzIframe style={{}} onLoad={this._iframeLoaded} src="http://link-to-somewhere"/> */}

                <iframe src="https://player.vimeo.com/video/124915698"
                        width="640"
                        height="360"
                        frameborder="0"
                        onLoad={this._iframeLoaded}
                >
                </iframe>

            </div>
        );
    }
}
