import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";

import { getSingleCelebs } from "../utils/function";

export default function CelebsSingle() {

    const { id } = useParams();

    const [celebData, setCelebData] = useState();

    const [tabBox, setTabBox] = useState("overview");

    const getData = async (id) => {
        const data = await getSingleCelebs(id);
        setCelebData(data);

        console.log(data);

    }

    const tabbing = (item) => {
        setTabBox(item);

    }

    useEffect(() => {
        getData(id);
    }, [])


    return (

        <>
            <Header />

            <div className="hero hero3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> */}
                        </div>
                    </div>
                </div>
            </div>


            <div className="page-single movie-single cebleb-single">
                <div className="container">
                    <div className="row ipad-width">
                        <div className="col-md-4 col-sm-12 col-xs-12">
                            <div className="mv-ceb">
                                <img src={`https://image.tmdb.org/t/p/w500/${celebData?.profile_path}`} alt="" />
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12 col-xs-12">
                            <div className="movie-single-ct">
                                <h1 className="bd-hd">{celebData?.name} <span className="text-sm">{celebData?.also_known_as.join(',')}</span></h1>
                                <p className="ceb-single">Actor | Producer</p>
                                <div className="social-link cebsingle-socail">
                                    <a href="#">
                                        <i className="ion-social-facebook" />
                                    </a>
                                    <a href="#">
                                        <i className="ion-social-twitter" />
                                    </a>
                                    <a href="#">
                                        <i className="ion-social-googleplus" />
                                    </a>
                                    <a href="#">
                                        <i className="ion-social-linkedin" />
                                    </a>
                                </div>
                                <div className="movie-tabs">
                                    <div className="tabs">
                                        <ul className="tab-links tabs-mv">
                                            <li className={tabBox == 'overview' ? "active" : ""}>
                                                <a onClick={() => { tabbing('overview') }}>Overview</a>
                                            </li>
                                            <li className={tabBox == 'biography' ? "active" : ""}>
                                                <a onClick={() => { tabbing('biography') }}> biography</a>
                                            </li>
                                            <li className={tabBox == 'filmography' ? "active" : ""}>
                                                <a onClick={() => { tabbing('filmography') }}>filmography</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="overviewceb" className="tab active" style={tabBox == 'overview' ? { display: 'block' } : { display: 'none' }}>
                                                <div className="row">
                                                    <div className="col-md-8 col-sm-12 col-xs-12">
                                                        <p>
                                                            {

                                                                celebData?.biography.slice(0, celebData?.biography.slice(0, 500).lastIndexOf(" "))

                                                            }
                                                        </p>
                                                        <p className="time">
                                                            <a href="#">
                                                                See full bio <i className="ion-ios-arrow-right" />
                                                            </a>
                                                        </p>

                                                        <div className="title-hd-sm">
                                                            <h4>filmography</h4>
                                                        </div>
                                                        {/* movie cast */}

                                                        <div className="mvcast-item">
                                                            {
                                                                celebData?.combined_credits?.cast.slice(0, 15).map(function (item, index, array) {
                                                                    return (
                                                                        <>
                                                                            <div className="cast-it">
                                                                                <div className="cast-left cebleb-film">
                                                                                    <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt="" />
                                                                                    <div>
                                                                                        <Link to={`/movSingle/${item?.id}`}>{item?.title}</Link>
                                                                                        <p className="time">{item?.character || "N/A"}</p>
                                                                                    </div>
                                                                                </div>
                                                                                <p>... {item?.release_date} </p>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-xs-12 col-sm-12">
                                                        <div className="sb-it">
                                                            <h6>Fullname:</h6>
                                                            <p>
                                                                {celebData?.name}
                                                            </p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Date of Birth: </h6>
                                                            <p>{celebData?.birthday}</p>
                                                        </div>
                                                        <div className="sb-it">
                                                            <h6>Country:</h6>
                                                            <p>{celebData?.place_of_birth}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="biography" className="tab" style={tabBox == 'biography' ? { display: 'block' } : { display: 'none' }}>
                                                <div className="row">
                                                    <div className="rv-hd">
                                                        <div>
                                                            <h3>Biography of</h3>
                                                            <h2>{celebData?.name}</h2>
                                                        </div>
                                                    </div>
                                                    <p>
                                                        {celebData?.biography}
                                                    </p>
                                                </div>
                                            </div>
                                            <div id="filmography" className="tab" style={tabBox == 'filmography' ? { display: 'block' } : { display: 'none' }}>
                                                <div className="row">
                                                    <div className="topbar-filter">
                                                        <p>
                                                            Found <span>14 movies</span> in total
                                                        </p>
                                                        <label>Filter by:</label>
                                                        <select>
                                                            <option value="popularity">
                                                                Popularity Descending
                                                            </option>
                                                            <option value="popularity">Popularity Ascending</option>
                                                            <option value="rating">Rating Descending</option>
                                                            <option value="rating">Rating Ascending</option>
                                                            <option value="date">Release date Descending</option>
                                                            <option value="date">Release date Ascending</option>
                                                        </select>
                                                    </div>
                                                    {/* movie cast */}
                                                    <div className="mvcast-item">

                                                        {

                                                            celebData?.combined_credits?.cast?.map(function (item, index, array) {
                                                                return (
                                                                    <>
                                                                        <div className="cast-it">
                                                                            <div className="cast-left cebleb-film">
                                                                                <img src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`} alt="" />
                                                                                <div>
                                                                                    <Link to={`/movSingle/${item?.id}`}>{item?.title}</Link>
                                                                                    <p className="time">{ item?.character || "N/A"}</p>
                                                                                </div>
                                                                            </div>
                                                                            <p>... {item?.release_date} </p>
                                                                        </div>
                                                                    </>
                                                                )
                                                            })

                                                        }


                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >


            <Footer />
        </>

    );
}