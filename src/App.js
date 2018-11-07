import React, { Component } from 'react';
import './App.css';
import YouTube from 'react-youtube';

class App extends Component {

  state = {
    playerStatus: 0,
    scroll: 0,
    /* offset: 0 */ // if needed
  }

  componentDidMount = () => {

    window.addEventListener('scroll', this.handleScroll);
    /*     const videoElement = ReactDOM.findDOMNode(this.refs.video).offsetTop;
        this.setState({ offset: videoElement }); */ // offset of video element from top if needed
    console.log('State Mounted', this.state);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollY = window.scrollY
    this.setState({ scroll: scrollY })
  }


  onStateChange = (event) => {

    console.log('data', event.data);
    console.log('Player State', YouTube.PlayerState);
    /* const videoElement = ReactDOM.findDOMNode(this.refs.video).offsetTop; */
    this.setState({
      playerStatus: event.data,
      /*   offset: videoElement */
    })
    console.log('nextState', this.state);
  }


  render() {

    let classForPlayer;

    console.log(this.state.playerStatus);
    console.log(this.state.scroll);



    if ((this.state.playerStatus === 1) && (this.state.scroll > 30)) {

      classForPlayer = "featured-video is-sticky"

    } else if (this.state.playerStatus === 1 || this.state.playerStatus === 2) {

      classForPlayer = "featured-video"

    }


    const opts = {
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };



    return (
      <div className="site-content">

        <div className="container" ref="video"  >
          <header className="content-header">
            <h1 className="title">Video Animation</h1>
            <div className={`content-media content-media--video ${classForPlayer ? classForPlayer : ""}`} >
              <div>
                <YouTube className="content-media__object"
                  videoId="EKyirtVHsK0"
                  opts={opts}
                  onReady={this._onReady}
                  className="featured-video"
                  onStateChange={this.onStateChange}
                />
              </div>
            </div>
          </header>
        </div>
        <main className="content-body container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio ipsum, accumsan sit amet odio eu, scelerisque semper felis. Cras a ex finibus, blandit dui id, efficitur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu consectetur quam, a consequat odio. Etiam eu libero vel elit scelerisque vehicula ut non orci. Etiam laoreet commodo quam vel malesuada. Duis eu porttitor felis, id dictum turpis. Nulla sodales quam sagittis consectetur suscipit. Suspendisse potenti. Donec turpis purus, eleifend quis est et, semper varius tortor. Mauris nec justo a dui pretium convallis ut ut velit. Nullam dignissim tristique justo euismod malesuada. Donec laoreet porttitor velit, quis porttitor urna accumsan finibus. Phasellus fermentum arcu eget nibh ullamcorper suscipit.
          </p>
          <p>
            Aenean volutpat condimentum enim a condimentum. Integer ut dapibus enim, vel condimentum erat. Nunc ullamcorper aliquet malesuada. Donec facilisis ligula ut rhoncus aliquet. Duis sem nisl, consequat et scelerisque ac, egestas rutrum tortor. Pellentesque mattis augue in molestie vulputate. Aliquam eu eros ac tortor pulvinar lacinia. Suspendisse a ornare elit.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vestibulum lacinia maximus. Nulla nulla est, mattis ut ipsum a, ornare scelerisque purus. Duis convallis mi efficitur neque finibus, nec varius tortor dignissim. Etiam sit amet venenatis purus. Phasellus a sollicitudin mauris. Phasellus in felis rutrum, sodales nibh et, porttitor purus. Aenean dignissim in diam in finibus.
          </p>
          <p>
            Duis at pharetra quam. Curabitur congue dui in ultrices aliquam. Morbi egestas dignissim leo, eu interdum lorem malesuada ac. Suspendisse lacinia, ex eget varius tempus, massa ligula mollis diam, consectetur dictum nibh eros pulvinar justo. Proin volutpat orci augue, ut semper odio tincidunt eu. Nunc accumsan nibh in ipsum blandit, non vulputate ante dapibus. Duis rhoncus diam a tortor fringilla dictum. Proin et mi ut leo feugiat pretium. Praesent facilisis est ipsum, at consectetur quam faucibus lacinia.
          </p>
          <p>
            Morbi nec interdum ante, vitae lacinia lorem. Praesent quis mi quam. Vestibulum ipsum mauris, dictum scelerisque varius in, sollicitudin ac lectus. Suspendisse aliquam odio nibh, ut suscipit dolor dictum ac. Duis vestibulum condimentum tincidunt. Aliquam erat volutpat. Donec tempor, velit eget ultrices fermentum, ante ligula fermentum nisl, sed consequat ante purus vitae risus. Praesent at fermentum lectus. Sed pharetra, justo in egestas dapibus, est turpis fermentum nunc, laoreet tincidunt purus dolor sit amet erat. Etiam congue mauris quis ligula fermentum, quis viverra libero ullamcorper. Phasellus tempor ultricies justo, eu accumsan arcu tempor non.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio ipsum, accumsan sit amet odio eu, scelerisque semper felis. Cras a ex finibus, blandit dui id, efficitur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu consectetur quam, a consequat odio. Etiam eu libero vel elit scelerisque vehicula ut non orci. Etiam laoreet commodo quam vel malesuada. Duis eu porttitor felis, id dictum turpis. Nulla sodales quam sagittis consectetur suscipit. Suspendisse potenti. Donec turpis purus, eleifend quis est et, semper varius tortor. Mauris nec justo a dui pretium convallis ut ut velit. Nullam dignissim tristique justo euismod malesuada. Donec laoreet porttitor velit, quis porttitor urna accumsan finibus. Phasellus fermentum arcu eget nibh ullamcorper suscipit.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio ipsum, accumsan sit amet odio eu, scelerisque semper felis. Cras a ex finibus, blandit dui id, efficitur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu consectetur quam, a consequat odio. Etiam eu libero vel elit scelerisque vehicula ut non orci. Etiam laoreet commodo quam vel malesuada. Duis eu porttitor felis, id dictum turpis. Nulla sodales quam sagittis consectetur suscipit. Suspendisse potenti. Donec turpis purus, eleifend quis est et, semper varius tortor. Mauris nec justo a dui pretium convallis ut ut velit. Nullam dignissim tristique justo euismod malesuada. Donec laoreet porttitor velit, quis porttitor urna accumsan finibus. Phasellus fermentum arcu eget nibh ullamcorper suscipit.
          </p>
          <p>
            Aenean volutpat condimentum enim a condimentum. Integer ut dapibus enim, vel condimentum erat. Nunc ullamcorper aliquet malesuada. Donec facilisis ligula ut rhoncus aliquet. Duis sem nisl, consequat et scelerisque ac, egestas rutrum tortor. Pellentesque mattis augue in molestie vulputate. Aliquam eu eros ac tortor pulvinar lacinia. Suspendisse a ornare elit.
          </p>
          <p>
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus vestibulum lacinia maximus. Nulla nulla est, mattis ut ipsum a, ornare scelerisque purus. Duis convallis mi efficitur neque finibus, nec varius tortor dignissim. Etiam sit amet venenatis purus. Phasellus a sollicitudin mauris. Phasellus in felis rutrum, sodales nibh et, porttitor purus. Aenean dignissim in diam in finibus.
          </p>
          <p>
            Duis at pharetra quam. Curabitur congue dui in ultrices aliquam. Morbi egestas dignissim leo, eu interdum lorem malesuada ac. Suspendisse lacinia, ex eget varius tempus, massa ligula mollis diam, consectetur dictum nibh eros pulvinar justo. Proin volutpat orci augue, ut semper odio tincidunt eu. Nunc accumsan nibh in ipsum blandit, non vulputate ante dapibus. Duis rhoncus diam a tortor fringilla dictum. Proin et mi ut leo feugiat pretium. Praesent facilisis est ipsum, at consectetur quam faucibus lacinia.
          </p>
          <p>
            Morbi nec interdum ante, vitae lacinia lorem. Praesent quis mi quam. Vestibulum ipsum mauris, dictum scelerisque varius in, sollicitudin ac lectus. Suspendisse aliquam odio nibh, ut suscipit dolor dictum ac. Duis vestibulum condimentum tincidunt. Aliquam erat volutpat. Donec tempor, velit eget ultrices fermentum, ante ligula fermentum nisl, sed consequat ante purus vitae risus. Praesent at fermentum lectus. Sed pharetra, justo in egestas dapibus, est turpis fermentum nunc, laoreet tincidunt purus dolor sit amet erat. Etiam congue mauris quis ligula fermentum, quis viverra libero ullamcorper. Phasellus tempor ultricies justo, eu accumsan arcu tempor non.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut odio ipsum, accumsan sit amet odio eu, scelerisque semper felis. Cras a ex finibus, blandit dui id, efficitur turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed eu consectetur quam, a consequat odio. Etiam eu libero vel elit scelerisque vehicula ut non orci. Etiam laoreet commodo quam vel malesuada. Duis eu porttitor felis, id dictum turpis. Nulla sodales quam sagittis consectetur suscipit. Suspendisse potenti. Donec turpis purus, eleifend quis est et, semper varius tortor. Mauris nec justo a dui pretium convallis ut ut velit. Nullam dignissim tristique justo euismod malesuada. Donec laoreet porttitor velit, quis porttitor urna accumsan finibus. Phasellus fermentum arcu eget nibh ullamcorper suscipit.
          </p>



        </main>

      </div>
    );
  }
}

export default App;
