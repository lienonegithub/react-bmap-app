import React, { Component } from 'react'

import {
  Map,
  Base,
  Circle
} from 'rc-bmap'

const { Point } = Base

class Example extends Component {
  render() {
    return (
      <div style={{ height: '100vh'}}>
        <Map
          ak={process.env.REACT_APP_BAIDU_MAP_KEY}
          zoom={15}
          scrollWheelZoom
        >
          <Point name="center" lng="116.404" lat="39.915" />
          <Circle
            strokeColor="blue"
            radius={500}
            strokeWeight={2}
            strokeOpacity={0.5}
            editing
          >
            <Point name="center" lng="116.404" lat="39.915" />
          </Circle>
        </Map>
      </div>
    )
  }
}

export default Example