import React from "react";

import "./style.scss";

import HeroBanner from "../../components/heroBanner/HeroBanner";
import Trending from "../../components/trending/Trending";
import Popular from "../../components/popular/Popular";
import TopRated from "../../components/topRated/TopRated";

const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            <Popular />
            <TopRated />
        </div>
    );
};

export default Home;
