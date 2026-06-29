import Footer from "../components/Footer";
import Header from "../components/Header";
import { suggest } from '../utils/function'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function FindBox() {

    const nav = useNavigate();

    const getMovieData = async (item) => {

        const res = await suggest(item);

        nav('/suggest/', { state: res.results });
    }

    return (

        <>


            <Header />

            <div className="page-single">
                <div className="container-flid">

                    <>
                        {/* NAVBAR */}


                        {/* <span className="reset">
                            <i className="fa fa-refresh" /> RESET ALL
                        </span> */}
                        <div className="panel-dark">

                            <div className="row">
                                {/* GENRES */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">
                                        <div className="section-title">Genres</div>

                                        <select className="form-control" multiple onChange={(e) => { getMovieData(e.target.value) }}>
                                            <option value="28">Action</option>
                                            <option value="12">Adventure</option>
                                            <option value="16">Animation</option>
                                            <option value="35">Comedy</option>
                                            <option value="80">Crime</option>
                                            <option value="99">Documentary</option>
                                            <option value="18">Drama</option>
                                            <option value="10751">Family</option>
                                            <option value="14">Fantasy</option>
                                            <option value="36">History</option>
                                            <option value="27">Horror</option>
                                            <option value="10402">Music</option>
                                            <option value="9648">Mystery</option>
                                            <option value="10749">Romance</option>
                                            <option value="878">Science Fiction</option>
                                            <option value="10770">TV Movie</option>
                                            <option value="53">Thriller</option>
                                            <option value="10752">War</option>
                                            <option value="37">Western</option>
                                        </select>

                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">Action</span>
                                            <span className="label-pill">Adventure</span>
                                            <span className="label-pill">Comedy</span>
                                            <span className="label-pill">Drama</span>
                                            <span className="label-pill">Sci-Fi</span>
                                            <span className="label-pill">Horror</span>
                                        </div>
                                    </div>
                                </div>
                                {/* RUNTIME */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">

                                        <div className="section-title">Runtime</div>
                                        <select className="form-control">
                                            <option>Any</option>
                                        </select>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">Under 90 min</span>
                                            <span className="label-pill">90–120 min</span>
                                            <span className="label-pill">120–150 min</span>
                                            <span className="label-pill">150+ min</span>
                                        </div>
                                    </div>
                                </div>
                                {/* RATING */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">

                                        <div className="section-title">Rating</div>
                                        <select className="form-control">
                                            <option>Any</option>
                                        </select>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">7+</span>
                                            <span className="label-pill">8+</span>
                                            <span className="label-pill">9+</span>
                                        </div>
                                    </div>
                                </div>
                                {/* YEAR */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">
                                        <div className="section-title">Release Year</div>
                                        <input type="range" min="0" max="100" value="50" class="form-control"></input>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">Action</span>
                                            <span className="label-pill">Adventure</span>
                                            <span className="label-pill">Comedy</span>
                                            <span className="label-pill">Drama</span>
                                            <span className="label-pill">Sci-Fi</span>
                                            <span className="label-pill">Horror</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr style={{ borderColor: "#22304d" }} />

                            <div className="row">
                                {/* LANGUAGE */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">

                                        <div className="section-title">Language</div>
                                        <select className="form-control">
                                            <option>Any</option>
                                        </select>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">English</span>
                                            <span className="label-pill">Hindi</span>
                                        </div>
                                    </div>
                                </div>
                                {/* STREAMING */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">

                                        <div className="section-title">Streaming Provider</div>
                                        <select className="form-control">
                                            <option>Any</option>
                                        </select>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">Netflix</span>
                                            <span className="label-pill">Prime Video</span>
                                            <span className="label-pill">Disney+</span>
                                        </div>
                                    </div>
                                </div>

                                {/* POPULARITY */}
                                <div className="col-md-3">
                                    <div className="suggest_item_box">

                                        <div className="section-title">Popularity</div>
                                        <select className="form-control">
                                            <option>Any</option>
                                        </select>
                                        <div style={{ marginTop: 10 }}>
                                            <span className="label-pill">Most Popular</span>
                                            <span className="label-pill">Trending</span>
                                            <span className="label-pill">Top Rated</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <hr style={{ borderColor: "#22304d" }} />
                            <div className="text-center">
                                <button className="btn btn-danger-custom btn-lg">
                                    <i className="fa fa-search" /> SEARCH MOVIES
                                </button>
                            </div>
                        </div>
                    </>


                </div>
            </div>



            <Footer />

        </>

    );
}