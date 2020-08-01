import React from 'react';
import {useSpring, animated} from 'react-spring';
import { useSelector } from 'react-redux';

function Ht() {
    const val = useSelector(state => state.explorer);
        const spring = useSpring({
          from: {
            //transform: `translateY(0px)`,
            display: val.isShowToolbar?'none':'flex',
            height:val.isShowToolbar?'0px':'95px',
          },
          to: {
            //transform: `translateY(90px)`,
            
            height: val.isShowToolbar?'95px':'0px',
            display: val.isShowToolbar?'flex':'none',
          },
          config: {
            mass: 6,
          },
        });

    return (
        <animated.div className="toolbar" style={{ ...spring }}>            
            <div className="sec">
              <div className="main-mnu-bar">
                <div className="main-menu-bar-group-big">
                  <div className='mnu-btn-big'>
                  Translated Div
                  </div>
                  <div className='mnu-btn-big'>
                  Translated Div
                  </div>
                </div>
                <div className="main-menu-bar-group-small">
                  <div className='mnu-btn-small'>
                  Translated D
                  </div>
                  <div className='mnu-btn-small'>
                  Translated Di
                  </div>
                 
                </div>
              </div>
              <div className="mnu-bar">
                <div className="menu-bar-text">Translated Div</div>
                <div className="menu-bar-drop-down">iv</div>
              </div>
            </div>
            <div  className="sec">
              Translated Div
            </div>
            
        </animated.div>
    )
}

export default Ht;
