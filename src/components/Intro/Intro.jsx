import React from 'react';

import { meal } from '../../constants';
import './intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  return (
    <div className="intro__section section__padding">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={true}
        muted
      />
      <div className="intro__app">
        <div className='intro__play'
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >

        </div>
      </div>
    </div>
  );
};

export default Intro;