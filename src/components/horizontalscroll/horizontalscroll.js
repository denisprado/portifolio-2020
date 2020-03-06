import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

function onMouseWheel(e) {
  this.refs.scrollBars.scrollLeft(this.refs.scrollBars.scrollTop);
}

const ScrollingHorizontally = ({ children }) => (
  <Scrollbars
    refs="scrollbars"
    style={{ height: '100vh', overflowX: 'scroll' }}
    onUpdate={e => onMouseWheel(e)}
  >
    {children}
  </Scrollbars>
);

export default ScrollingHorizontally;
