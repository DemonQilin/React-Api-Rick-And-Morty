import React from 'react';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="Banner">
      <picture>
        <source media="(max-width: 500px)" srcSet="https://i.imgur.com/BEKlYp3.jpg" />
        <source media="(max-width: 1000px)" srcSet="https://i.imgur.com/aWu6XT7.jpg" />
        <source media="(max-width: 1500px)" srcSet="https://i.imgur.com/9mJjbqk.jpg" />
        <img src="https://i.imgur.com/xPPTyQu.jpg" alt="" className='Banner-img'/>
      </picture>
      <div className="Banner-title">
        <img src="https://i.imgur.com/4bHW6Vl.png?1" alt="" className='title-img'/>
      </div>
    </div>
  )
}

export default Banner