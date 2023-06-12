import React from 'react';

const BannerCover = ({title, subTitle, image}) => {
    return (
        <div>
          <div
            className="hero h-[600px] mb-10"
            style={{backgroundImage:` url(${image})`, backgroundSize:'cover'}}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                <p className="mb-5">
                  {subTitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      );
};

export default BannerCover;