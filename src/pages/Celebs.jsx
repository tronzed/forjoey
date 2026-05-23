
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { getCelebs, getTv } from '../utils/function'
import { Link } from 'react-router-dom'
import Loader from '../components/Loader'

export default function Celebs() {

    const [celebsListData, setCelebsListData] = useState();

    const [loader, setLoader] = useState(true);

    const getMovieData = async () => {
        const res = await getCelebs();
        setCelebsListData(res);
        setLoader(false);
    }




    useEffect(() => {
        getMovieData();
    }, [])

    return (

        <>
            <Header />

            <div className="movie-items  full-width">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tabs">

                            <div className="tab-content">
                                <div id="tab1-h2" className="tab active">
                                    <div className="row">


                                        {

                                            celebsListData?.map((item, key) => (
                                                <>
                                                    <div className='col-sm-2'>
                                                        <div className="slide-it">
                                                            <div className="movie-item">
                                                                <Link to={`/celebsingle/${item?.id}`}>
                                                                    <div className="mv-img">
                                                                        <img src={`https://image.tmdb.org/t/p/w500${item?.profile_path}`} alt="" />
                                                                    </div>
                                                                    <div className="title-in">
                                                                        <h6>{item?.name}</h6>
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
                    </div>
                </div>
            </div>

            <Footer />
        </>

    );
}