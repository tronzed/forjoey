
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { getMovie, getTv } from '../utils/function'
import { Link } from 'react-router-dom'

const Home = () => {


    const [movieListData, setMovieListData] = useState();
    const [tvListData, setTvListData] = useState();
    const [bannerData, setBannerData] = useState();

    const getMovieData = async () => {
        const res = await getMovie();
        setMovieListData(res);

        const randomNumber = Math.floor(Math.random() * 19) + 1;
        setBannerData(res[randomNumber]);
    }

    const getTvData = async () => {
        const res = await getTv();
        setTvListData(res);
    }



    useEffect(() => {
        getMovieData();
        getTvData();
    }, [])

    return (
        <>


            <Header />

            <div className="movie-items  full-width">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-hd">
                            <h2>in theater</h2>
                            <a href="#" className="viewall">
                                View all <i className="ion-ios-arrow-right" />
                            </a>
                        </div>
                        <div className="tabs">

                            <div className="tab-content">
                                <div id="tab1-h2" className="tab active">
                                    <div className="row">


                                        {

                                            movieListData?.map((item, key) => (
                                                <>
                                                    <div className='col-sm-2'>
                                                        <div className="slide-it">
                                                            <div className="movie-item">
                                                                <Link to={`/movSingle/${item?.id}`}>
                                                                    <div className="mv-img">
                                                                        <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" />
                                                                    </div>
                                                                    <div className="title-in">
                                                                        <h6>
                                                                            <a href="#">{item?.original_title}</a>
                                                                        </h6>
                                                                        <p>
                                                                            <i className="ion-android-star" />
                                                                            <span>7.4</span> /10
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ))

                                        }


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="title-hd">
                            <h2>on tv</h2>
                            <a href="#" className="viewall">
                                View all <i className="ion-ios-arrow-right" />
                            </a>
                        </div>
                        <div className="tabs">
                            <div className="tab-content">
                                <div id="tab21-h2" className="tab active">
                                    <div className="row">
                                        <div className="">

                                            <div className='row'>
                                                {

                                                    tvListData?.map((item, key) => (
                                                        <>
                                                            <div className='col-sm-2'>
                                                                <div className="slide-it">
                                                                    <div className="movie-item">
                                                                        <div className="mv-img">
                                                                            <img src={`https://image.tmdb.org/t/p/w500${item?.poster_path}`} alt="" />
                                                                        </div>
                                                                        <div className="hvr-inner">
                                                                            <a href="moviesingle.html">
                                                                                {" "}
                                                                                Read more{" "}
                                                                                <i className="ion-android-arrow-dropright" />{" "}
                                                                            </a>
                                                                        </div>
                                                                        <div className="title-in">
                                                                            <h6>
                                                                                <a href="#">{item?.original_title}</a>
                                                                            </h6>
                                                                            <p>
                                                                                <i className="ion-android-star" />
                                                                                <span>7.4</span> /10
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    ))

                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div id="tab22-h2" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem2">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it4.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">The walk</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it5.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it6.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Interstellar</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it7.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it8.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab23-h2" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem2">
                                            <div className="movie-item">
                                                <div className="mv-img">
                                                    <img src="images/uploads/mv-it1.jpg" alt="" />
                                                </div>
                                                <div className="hvr-inner">
                                                    <a href="moviesingle.html">
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </a>
                                                </div>
                                                <div className="title-in">
                                                    <h6>
                                                        <a href="#">Interstellar</a>
                                                    </h6>
                                                    <p>
                                                        <i className="ion-android-star" />
                                                        <span>7.4</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="movie-item">
                                                <div className="mv-img">
                                                    <img src="images/uploads/mv-it2.jpg" alt="" />
                                                </div>
                                                <div className="hvr-inner">
                                                    <a href="moviesingle.html">
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </a>
                                                </div>
                                                <div className="title-in">
                                                    <h6>
                                                        <a href="#">The revenant</a>
                                                    </h6>
                                                    <p>
                                                        <i className="ion-android-star" />
                                                        <span>7.4</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="movie-item">
                                                <div className="mv-img">
                                                    <img src="images/uploads/mv-it3.jpg" alt="" />
                                                </div>
                                                <div className="hvr-inner">
                                                    <a href="moviesingle.html">
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </a>
                                                </div>
                                                <div className="title-in">
                                                    <h6>
                                                        <a href="#">Die hard</a>
                                                    </h6>
                                                    <p>
                                                        <i className="ion-android-star" />
                                                        <span>7.4</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="movie-item">
                                                <div className="mv-img">
                                                    <img src="images/uploads/mv-it4.jpg" alt="" />
                                                </div>
                                                <div className="hvr-inner">
                                                    <a href="moviesingle.html">
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </a>
                                                </div>
                                                <div className="title-in">
                                                    <h6>
                                                        <a href="#">The walk</a>
                                                    </h6>
                                                    <p>
                                                        <i className="ion-android-star" />
                                                        <span>7.4</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="movie-item">
                                                <div className="mv-img">
                                                    <img src="images/uploads/mv-it3.jpg" alt="" />
                                                </div>
                                                <div className="hvr-inner">
                                                    <a href="moviesingle.html">
                                                        {" "}
                                                        Read more <i className="ion-android-arrow-dropright" />{" "}
                                                    </a>
                                                </div>
                                                <div className="title-in">
                                                    <h6>
                                                        <a href="#">Die hard</a>
                                                    </h6>
                                                    <p>
                                                        <i className="ion-android-star" />
                                                        <span>7.4</span> /10
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="tab24-h2" className="tab">
                                    <div className="row">
                                        <div className="slick-multiItem2">
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it4.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">The walk</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it5.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it6.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Interstellar</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it7.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-it">
                                                <div className="movie-item">
                                                    <div className="mv-img">
                                                        <img src="images/uploads/mv-it8.jpg" alt="" />
                                                    </div>
                                                    <div className="hvr-inner">
                                                        <a href="moviesingle.html">
                                                            {" "}
                                                            Read more{" "}
                                                            <i className="ion-android-arrow-dropright" />{" "}
                                                        </a>
                                                    </div>
                                                    <div className="title-in">
                                                        <h6>
                                                            <a href="#">Die hard</a>
                                                        </h6>
                                                        <p>
                                                            <i className="ion-android-star" />
                                                            <span>7.4</span> /10
                                                        </p>
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
            </div>

            {/* latest new v2 section*/}
            <div className="latestnew full-width hide_me">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title-hd">
                            <h2>Latest news</h2>
                            <a href="bloggrid.html" className="viewall">
                                see all news <i className="ion-ios-arrow-right" />
                            </a>
                        </div>
                        <div className="latestnewv2">

                            <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div>

                            <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div> <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div> <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div> <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div> <div className="blog-item-style-2">
                                <a href="blogdetail.html">
                                    <img src="images/uploads/blogv21.jpg" alt="" />
                                </a>
                                <div className="blog-it-infor">
                                    <h3>
                                        <a href="blogdetail.html">
                                            Godzilla: King Of The Monsters Adds O’Shea Jackson Jr
                                        </a>
                                    </h3>
                                    <span className="time">27 Mar 2017</span>
                                    <p>
                                        Looks like Kong: Skull Island started a tradition with its
                                        casting of Straight ...
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            {/*end of latest new v2 section*/}

            <Footer />

        </>
    );
}

export default Home;