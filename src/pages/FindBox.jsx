import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { suggest } from '../utils/function'
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function FindBox() {

    const nav = useNavigate();


    const [genresBox, setGenresBox] = useState(28);
    const [runtimeBox, setRuntimeBox] = useState('90-120');
    const [ratingBox, setRatingBox] = useState(7.5);
    const [languageBox, setLanguageBox] = useState('en');
    const [sortByBox, setSortByBox] = useState('popularity.desc');
    const [yearBox, setYearBox] = useState('2021-2026');
    const [providerBox, setProviderBox] = useState('');


    const handleForm = async (e) => {

        e.preventDefault();

        const [minRun, maxRun] = runtimeBox.split("-");
        const [relFrom, relTo] = yearBox.split("-");

        const movData = {
            genres: genresBox,
            language: languageBox,
            sortBy: sortByBox,
            minRating: ratingBox,
            minRuntime: minRun,
            maxRuntime: maxRun,
            releaseFrom: relFrom,
            releaseTo: relTo,
            with_watch_providers: providerBox,
        };

        // console.log('getMovieData', movData);

        const res = await suggest(movData);
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

                        <form onSubmit={handleForm}>
                            <div className="panel-dark">

                                <div className="row">
                                    {/* GENRES */}
                                    <div className="col-md-3">
                                        <div className="suggest_item_box">
                                            <div className="section-title">Genres</div>

                                            <select className="form-control" value={genresBox} onChange={(e) => { setGenresBox(e.target.value) }}>
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
                                            <select className="form-control" value={runtimeBox} onChange={(e) => { setRuntimeBox(e.target.value) }}>
                                                <option value="">Any Runtime</option>
                                                <option value="0-90">Under 90 min</option>
                                                <option value="90-120">90–120 min</option>
                                                <option value="120-150">120–150 min</option>
                                                <option value="150-180">150–180 min</option>
                                                <option value="180-999">Over 180 min</option>
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
                                            <select className="form-control" value={ratingBox} onChange={(e) => { setRatingBox(e.target.value) }}>
                                                <option value="">Any Rating</option>
                                                <option value="5">5+</option>
                                                <option value="6">6+</option>
                                                <option value="7">7+</option>
                                                <option value="7.5">7.5+</option>
                                                <option value="8">8+</option>
                                                <option value="8.5">8.5+</option>
                                                <option value="9">9+</option>
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
                                            <select class="form-control" value={yearBox} onChange={(e) => { setYearBox(e.target.value) }}>
                                                <option value="">Any Time</option>
                                                <option value="2024-2026">Last 3 Years</option>
                                                <option value="2021-2026">Last 5 Years</option>
                                                <option value="2016-2026">Last 10 Years</option>
                                                <option value="2010-2015">2010–2015</option>
                                                <option value="2000-2009">2000–2009</option>
                                                <option value="1990-1999">1990s</option>
                                                <option value="1980-1989">1980s</option>
                                                <option value="1970-1979">1970s</option>
                                                <option value="1960-1969">1960s</option>
                                                <option value="1950-1959">1950s</option>
                                                <option value="1940-1949">1940s</option>
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
                                </div>
                                <hr style={{ borderColor: "#22304d" }} />

                                <div className="row">
                                    {/* LANGUAGE */}
                                    <div className="col-md-3">
                                        <div className="suggest_item_box">

                                            <div className="section-title">Language</div>
                                            <select class="form-control" value={languageBox} onChange={(e) => { setLanguageBox(e.target.value) }}>
                                                <option value="">Any Language</option>
                                                <option value="en">English</option>
                                                <option value="hi">Hindi</option>
                                                <option value="ta">Tamil</option>
                                                <option value="te">Telugu</option>
                                                <option value="ml">Malayalam</option>
                                                <option value="kn">Kannada</option>
                                                <option value="bn">Bengali</option>
                                                <option value="mr">Marathi</option>
                                                <option value="pa">Punjabi</option>
                                                <option value="gu">Gujarati</option>
                                                <option value="ja">Japanese</option>
                                                <option value="ko">Korean</option>
                                                <option value="zh">Chinese</option>
                                                <option value="fr">French</option>
                                                <option value="de">German</option>
                                                <option value="es">Spanish</option>
                                                <option value="it">Italian</option>
                                                <option value="ru">Russian</option>
                                                <option value="pt">Portuguese</option>
                                                <option value="ar">Arabic</option>
                                                <option value="tr">Turkish</option>
                                                <option value="th">Thai</option>
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
                                            <select class="form-control" onChange={(e) => { setProviderBox(e.target.value) }}>
                                                <option value="">Any Provider</option>
                                                <option value="8">Netflix</option>
                                                <option value="119">Amazon Prime Video</option>
                                                <option value="337">Disney+ Hotstar</option>
                                                <option value="350">Apple TV+</option>
                                                <option value="2">Apple TV</option>
                                                <option value="283">Crunchyroll</option>
                                                <option value="386">JioHotstar</option>
                                                <option value="531">Paramount+</option>
                                                <option value="387">Peacock</option>
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

                                            <div className="section-title">Sort By</div>
                                            <select className="form-control" value={sortByBox} onChange={(e) => { setSortByBox(e.target.value) }}>
                                                <option value="popularity.desc">Popularity (High to Low)</option>
                                                <option value="popularity.asc">Popularity (Low to High)</option>
                                                <option value="vote_average.desc">Rating (High to Low)</option>
                                                <option value="vote_average.asc">Rating (Low to High)</option>
                                                <option value="vote_count.desc">Most Rated</option>
                                                <option value="primary_release_date.desc">Newest First</option>
                                                <option value="primary_release_date.asc">Oldest First</option>
                                                <option value="revenue.desc">Highest Revenue</option>
                                                <option value="original_title.asc">Title (A–Z)</option>
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
                                    <button className="btn btn-danger-custom btn-lg" type="submit">
                                        <i className="fa fa-search" /> Search Movie
                                    </button>
                                </div>
                            </div>
                        </form>


                    </>


                </div>
            </div>



            <Footer />

        </>

    );
}