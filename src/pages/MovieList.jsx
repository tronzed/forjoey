import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from 'react'
import { getMovie, getTv } from '../utils/function'
import { Link } from "react-router-dom";

export default function MovieList() {

    const [movieListData, setMovieListData] = useState();

    const getMovieData = async () => {
        const res = await getMovie();
        setMovieListData(res);

    }

      useEffect(() => {
        getMovieData();
    }, [])

    return (

        <>

        {console.log(movieListData,'dddd')}

            <Header />

            <div className="page-single">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="topbar-filter fw">
                                <p>
                                    Found <span>1,608 movies</span> in total
                                </p>
                                <label>Sort by:</label>
                                <select>
                                    <option value="popularity">Popularity Descending</option>
                                    <option value="popularity">Popularity Ascending</option>
                                    <option value="rating">Rating Descending</option>
                                    <option value="rating">Rating Ascending</option>
                                    <option value="date">Release date Descending</option>
                                    <option value="date">Release date Ascending</option>
                                </select>
                                <a href="movielist.html" className="list">
                                    <i className="ion-ios-list-outline " />
                                </a>
                                <a href="moviegridfw.html" className="grid">
                                    <i className="ion-grid active" />
                                </a>
                            </div>
                            <div className="row">


                                {movieListData?.map((item, key) => (
                                    <>
                                        <div className="col-sm-2">
                                            <div className="movie-item-style-2 movie-item-style-1">
                                                <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" />
                                                <div className="hvr-inner">
                                                    <Link to={`/movSingle/${item?.id}`}>
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </Link>
                                                </div>
                                                <div className="mv-item-infor">
                                                    <h6>
                                                        <a href="#">{item?.original_title}</a>
                                                    </h6>
                                                    <p className="rate">
                                                        <i className="ion-android-star" />
                                                        <span>8.1</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}




                            </div>
                            <div className="topbar-filter">
                                <label>Movies per page:</label>
                                <select>
                                    <option value="range">20 Movies</option>
                                    <option value="saab">10 Movies</option>
                                </select>
                                <div className="pagination2">
                                    <span>Page 1 of 2:</span>
                                    <a className="active" href="#">
                                        1
                                    </a>
                                    <a href="#">2</a>
                                    <a href="#">3</a>
                                    <a href="#">...</a>
                                    <a href="#">78</a>
                                    <a href="#">79</a>
                                    <a href="#">
                                        <i className="ion-arrow-right-b" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />

        </>

    );
}