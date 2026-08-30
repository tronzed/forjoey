
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link, Links } from 'react-router-dom';

export default function Login() {


    return (

        <>
            <Header />

            <div className='page-single'>
                <div className='container'>

                    <div className='form_box'>


                        <div className="login-wrapper">
                            <div className="login-panel">
                                <h2 className="login-title">Login</h2>
                                <form>
                                    {/* Email */}
                                    <div className="form-group">
                                        <label htmlFor="email">Email address</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Enter email"
                                            required=""
                                        />
                                    </div>
                                    {/* Password */}
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Enter password"
                                            required=""
                                        />
                                    </div>
                                    {/* Remember + Forgot */}
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" />
                                            Remember me
                                        </label>
                                        <Link to="/sign-up" className="forgot-password">
                                            No Account? SignUp now
                                        </Link>
                                    </div>
                                    {/* Submit */}
                                    <button type="submit" className="btn btn-danger-custom btn-lg">
                                        Login
                                    </button>
                                </form>
                            </div>
                        </div>



                    </div>

                </div>
            </div>

            <Footer />
        </>

    );
}