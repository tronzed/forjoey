import { useEffect, useState } from "react";

export default function Header() {

    const [movieListData, setMovieListData] = useState();
    const [bannerData, setBannerData] = useState();

    const getMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=809cc654f2b83dc754aa801cc1302ac1`);
        const data = await res.json();
        setMovieListData(data?.results);

        const randomNumber = Math.floor(Math.random() * 19) + 1;
        setBannerData(data?.results[randomNumber]);

    }

    useEffect(() => {
        getMovie();
    }, [])

    return (

        <>

        {console.log(bannerData,'bannerData')}

            {/* BEGIN | Header */}
            <header className="ht-header full-width-hd">
                <div className="row">
                    <nav id="mainNav" className="navbar navbar-default navbar-custom">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header logo">
                            <div
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <div id="nav-icon1">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <a href="index-2.html">
                                <img
                                    className="logo"
                                    src="images/logo1.png"
                                    alt=""
                                    width={119}
                                    height={58}
                                />
                            </a>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className="collapse navbar-collapse flex-parent"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="hidden">
                                    <a href="#page-top" />
                                </li>
                                <li className="dropdown first">
                                    <a
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        Home
                                    </a>

                                </li>

                                <li className="dropdown first">
                                    <a
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        movies

                                    </a>

                                </li>
                                <li className="dropdown first">
                                    <a
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        celebrities{" "}
                                    </a>
                                </li>
                                <li className="dropdown first">
                                    <a
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        TV
                                    </a>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="loginLink">
                                    <a href="#">LOG In</a>
                                </li>
                                <li className="btn signupLink">
                                    <a href="#">sign up</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </nav>
                    {/* search form */}
                </div>
            </header>
            {/* END | Header */}
            <div className="slider sliderv2">
                <div className="container">
                    <div className="row">

                        <div className="slider-single-item">
                            <div className="movie-item">
                                <div className="row">
                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                        <div className="title-in">
                                            <div className="cate">
                                                <span className="blue">
                                                    <a href="#">Sci-fi</a>
                                                </span>
                                                <span className="yell">
                                                    <a href="#">Action</a>
                                                </span>
                                                <span className="orange">
                                                    <a href="#">advanture</a>
                                                </span>
                                            </div>
                                            <h1>
                                                <a href="#">{bannerData?.title}
                                                    galaxy <span>2015</span>
                                                </a>
                                            </h1>
                                            <div className="social-btn">
                                                <a href="#" className="parent-btn">
                                                    <i className="ion-play" /> Watch Trailer
                                                </a>
                                                <a href="#" className="parent-btn">
                                                    <i className="ion-heart" /> Add to Favorite
                                                </a>
                                                <div className="hover-bnt">
                                                    <a href="#" className="parent-btn">
                                                        <i className="ion-android-share-alt" />
                                                        share
                                                    </a>
                                                    <div className="hvr-item">
                                                        <a href="#" className="hvr-grow">
                                                            <i className="ion-social-facebook" />
                                                        </a>
                                                        <a href="#" className="hvr-grow">
                                                            <i className="ion-social-twitter" />
                                                        </a>
                                                        <a href="#" className="hvr-grow">
                                                            <i className="ion-social-googleplus" />
                                                        </a>
                                                        <a href="#" className="hvr-grow">
                                                            <i className="ion-social-youtube" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mv-details">
                                                <p>
                                                    <i className="ion-android-star" />
                                                    <span>{bannerData?.vote_average}</span> /10
                                                </p>
                                                <ul className="mv-infor">
                                                    <li> Run Time: 2h21’ </li>
                                                    <li> Rated: PG-13</li>
                                                    <li> Release: {bannerData?.release_date}</li>
                                                </ul>
                                            </div>
                                            <div className="btn-transform transform-vertical">
                                                <div>
                                                    <a href="#" className="item item-1 redbtn">
                                                        more detail
                                                    </a>
                                                </div>
                                                <div>
                                                    <a href="#" className="item item-2 redbtn hvrbtn">
                                                        more detail
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12 col-xs-12">
                                        <div className="mv-img-2">
                                            <a href="#">
                                                <img src={`https://image.tmdb.org/t/p/w500${bannerData?.poster_path}`} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>

    );

}