import React from 'react';

const LazyYouTube = ({ src, title }) => (
  <iframe
    src={src}
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
    }}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    title={title}
  />
);

export default LazyYouTube;