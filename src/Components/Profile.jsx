import React from "react";

function Profile(props) {
  return (
    <div>
      <div className="content">
        <img
          src="htps://ink-project.ru/sites/1-ink-project/photoalbums/18112.jpg"
          alt="Nature"
          className="content-header-image"
        />
        <div className="content-cart">
          <img
            src="htps://i.pinimg.com/280x280_RS/93/01/69/930169fa37c34fc151f2fe11df9ac812.jpg"
            alt="Львенок"
            className="content-cart-image"
          />
          <div className="content-cart-text"></div>
        </div>
        <div className="myPost">
          <div className="newPost"></div>
        </div>
        <div className="post">post1</div>
        <div className="post">post2</div>
      </div>
    </div>
  );
}

export default Profile;
