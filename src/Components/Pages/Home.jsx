import React from "react";
import Banner from "../Organisms/Banner";
import CircleFiles from "../Organisms/CircleFiles";
import SquareFiles from "../Organisms/SquareFiles";

function Home() {
  return (
    <>
      <Banner
        bannerTitle="Konoha Academy"
        bannerImage="https://68.media.tumblr.com/5c2f8341d3a3590c0e8834cb8dd9c7f0/tumblr_oi72x7Raym1vgv3yxo6_1280.jpg"
        bannerComment="Konohagakure Village Academy official page"
        linkText="Go!!!!"
      />
      <div className="ed-grid m-grid-2">
        <SquareFiles />
        <CircleFiles />
      </div>
    </>
  );
}

export default Home;
