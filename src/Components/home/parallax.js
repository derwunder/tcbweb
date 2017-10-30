import React, { Component } from 'react';
import Parallax from 'react-springy-parallax'
import { Logo, HomeCss } from './../../directory';
import Background from './../../Images/bg.jpg';
import Background2 from './../../Images/bg2.jpg';
import Background3 from './../../Images/bg3.jpg';
class ParallaxComponent extends Component {
  render() {
    const styles = {
        fontFamily: 'Menlo-Regular, Menlo, monospace',
        fontSize: 14,
        lineHeight: '10px',
        color: 'white',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
    }
    return (
        <Parallax ref="parallax" pages={3}>
            <Parallax.Layer offset={0} speed={-0.2} style={{ backgroundImage: `url(${Background})` }} />
            <Parallax.Layer offset={1} speed={-0.5} style={{ backgroundImage: `url(${Background2})` }} />
            <Parallax.Layer offset={2} speed={-0.3} style={{ backgroundImage: `url(${Background3})` }} />

            <Parallax.Layer
                offset={0}
                speed={0.5}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(1)}>
                Click!
            </Parallax.Layer>
            <Parallax.Layer
                offset={1}
                speed={0.8}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(2)}>
                Another page ...
            </Parallax.Layer>
            <Parallax.Layer
                offset={2}
                speed={-0.5}
                style={styles}
                onClick={() => this.refs.parallax.scrollTo(0)}>
                The end.
            </Parallax.Layer>
        </Parallax>
    );
  }
}

export default ParallaxComponent;
