import React from "react";

function Banner(props) {
  return (
    <div>
      <div className="w-full h-[60vh] bg-center bg-cover mb-10 bg-[url('https://ik.imagekit.io/knqnox49e/Img/paper_plane_sflTHo5oP.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1660813673662')] ">
        <div />
        {props.children}
      </div>
    </div>
  );
}

export default Banner;
