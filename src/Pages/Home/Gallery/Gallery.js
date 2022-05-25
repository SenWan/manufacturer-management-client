import React from 'react';

const Gallery = () => {
    return (
    <div className='container mt-5'>
        <h2 className='text-primary text-center'>Our Latest Products Gallery</h2>
        <div className="row">
     <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        <img
            src="img3.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
            />

        <img
            src="img2.jpg"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
        />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="img4.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="img5.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div className="col-lg-4 mb-4 mb-lg-0">
    <img
      src="img1.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="img9.jpg"
      className="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
    </div>
    );
};

export default Gallery;