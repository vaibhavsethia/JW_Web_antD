import React from "react";
import BannerAnim, { Element } from "rc-banner-anim";
import TweenOne from "rc-tween-one";

import "rc-banner-anim/assets/index.css";
import "./styles.css";

const BgElement = Element.BgElement;

class Carousel extends React.Component {
  render() {
    return (
      <BannerAnim prefixCls="banner-user">
        <Element key="1"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Paintball/1500x2000/Cathedral/Cathedral_1.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          J Williamson
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            You Play, We Develop
            </TweenOne>
        </Element>
        <Element key="2"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Bed_Wars/1500x2000/JPEG/Honeybloom.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          ESports and Enhanced Gameplay
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            To keep creators motivated
            </TweenOne>
        </Element>
        <Element key="3"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Bed_Wars/1500x2000/JPEG/Candy_Island.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Entertainment Platform
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            For Youtube and Twitch Content Creators
            </TweenOne>
        </Element>
        <Element key="4"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Bed_Wars/1500x2000/JPEG/Candy_Island.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Simple but Creative Game Modes
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            To keep you interested and enthusiastic
            </TweenOne>
        </Element>
        <Element key="5"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Duels/1500x2000/JPEG/Clay_Mounds.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Custom 3D Models and Items
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            To make your gaming experience personalized
            </TweenOne>
        </Element>
        <Element key="6"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/Parkour/1500x2000/JPEG/Time.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Competitive Gaming
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            and many new modes in Minecraft
            </TweenOne>
        </Element>
        <Element key="7"
          prefixCls="banner-user-elem"
        >
          <BgElement
            key="bg"
            className="bg"
            style={{
              backgroundImage: `url(https://megaminehostedimages.s3.amazonaws.com/GameModes/King_of_the_hill/1500x2000/JPEG/Death_Valley.jpg)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
          Using AI and ML
          </TweenOne>
          <TweenOne 
            className="banner-user-text" 
            animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
          >
            In Gaming for an immersive experience
            </TweenOne>
        </Element>
      </BannerAnim>
    );
  }
}

export default Carousel;
