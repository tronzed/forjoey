import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from '../assets/logo1.png'

export default function Header() {

    const [movieListData, setMovieListData] = useState();
    const [bannerData, setBannerData] = useState();
    const loc = useLocation();

    const [mobToggle, setMobToggle] = useState(false);

    const getMovie = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=809cc654f2b83dc754aa801cc1302ac1`);
        const data = await res.json();
        setMovieListData(data?.results);

        const randomNumber = Math.floor(Math.random() * 19) + 1;
        setBannerData(data?.results[randomNumber]);
    }


    const menuToggleHandle = () => {
        setMobToggle(!mobToggle);
    }


    useEffect(() => {
        getMovie();
    }, [])

    return (

        <>
            {
                console.log(bannerData, 'bannerData')

            }

            {/* BEGIN | Header */}
            <header className="ht-header full-width-hd">
                <div className="row">
                    <nav id="mainNav" className="navbar navbar-default navbar-custom">
                        {/* Brand and toggle get grouped for better mobile display */}
                        <div className="navbar-header logo">
                            <div
                                className={`navbar-toggle`}
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                onClick={menuToggleHandle}
                            >
                                <span className="sr-only">Toggle navigation</span>
                                <div id="nav-icon1">
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                            <Link to="/">
                                <img
                                    className="logo"
                                    src={logo}
                                    alt=""
                                    width={119}
                                    height={58}
                                />
                            </Link>
                        </div>
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div
                            className={`collapse navbar-collapse flex-parent ${mobToggle ? "collapse in" : ""}`}
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul className="nav navbar-nav flex-child-menu menu-left">
                                <li className="hidden">
                                    <a href="#page-top" />
                                </li>
                                <li className="dropdown first">
                                    <Link
                                        to='/'
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        Home
                                    </Link>

                                </li>

                                <li className="dropdown first">
                                    <Link
                                        to='/movies'
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        movies

                                    </Link>

                                </li>
                                <li className="dropdown first">
                                    <Link
                                        to='/celebs'
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        celebrities{" "}
                                    </Link>
                                </li>
                                <li className="dropdown first">
                                    <Link
                                        to='/tv'
                                        className="btn btn-default dropdown-toggle lv1"
                                        data-toggle="dropdown"
                                        data-hover="dropdown"
                                    >
                                        TV
                                    </Link>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav flex-child-menu menu-right">
                                <li className="loginLink">
                                    <Link to="#">LOG In</Link>
                                </li>
                                <li className="btn signupLink">
                                    <Link to="#">sign up</Link>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </nav>
                    {/* search form */}
                </div>
            </header>
            {/* END | Header */}



            {loc.pathname === '/' ? (

                <div className="slider sliderv2">
                    <div className="container">
                        <div className="row">

                            <div className="slider-single-item">
                                <div className="movie-item">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-12 col-xs-12">
                                            <div className="title-in">
                                                <div className="cate hide_me">
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
                                                        <Link to={`/movSingle/${bannerData?.id}`} className="item  redbtn">
                                                            More Detail
                                                        </Link>
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

            ) : loc.pathname.split('/')[1] === 'movSingle' ? (

                <>


                </>

            ) : (

                <>

                    <div className="hero common-hero ">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="hero-ct">
                                        <h1>Movie Listing - Grid Fullwidth</h1>
                                        <ul className="breadcumb">
                                            <li className="active">
                                                <a href="#">Home</a>
                                            </li>
                                            <li>
                                                {" "}
                                                <span className="ion-ios-arrow-right" /> movie listing
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </>

            )}





        </>

    );

}