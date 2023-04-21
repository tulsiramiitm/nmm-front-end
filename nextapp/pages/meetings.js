import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from "next/link";



const inter = Inter({ subsets: ['latin'] })

export default function Meetings() {
  return (
    <>
        <Head>
            <title>Monsoon Mission | Meetings</title>
            <meta name="description" content="Ministry of Earth Sciences (MoES), Government of India has launched 'National Monsoon Mission' (NMM) with a vision to develop a state-of-the-art dynamical prediction system for monsoon rainfall on different time scales" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Rainfall, Weather, Climate" />
            <meta name="author" content="Indian Institute of Tropical Meteorology" />
            <link rel="icon" href="img/mm-logo.png" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"  />
        </Head>


        {/* Header */}
        <Header />
        {/* Header */}


        {/* Page Header Start */}
        <div className="container-fluid bg-dark p-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-4 text-white">All Meetings</h1>
                    <Link href="/">Home</Link>
                    <i className="fas fa-chevron-right text-primary px-2"></i>
                    <Link href="/meetings">Meetings</Link>
                </div>
            </div>
        </div>
        {/* Page Header End */}


        

        {/* Upcoming Start */}
        <div className="container-fluid bg-secondary px-0 py-6">
            <div className="row g-0">
                <div className="col-lg-6 py-6 px-5">
                    <h1 className="display-5 mb-4">Upcoming SMRC and SSC Meeting soon</h1>
                    <p className="mb-4">We will display Upcoming SMRC and SSC Meeting date and time here, kindly check website frequently.</p>
                    <form>
                        <div className="row gx-3">
                            <small>Get notification on email</small>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="form-floating-1" placeholder="John Doe" />
                                    <label htmlFor="form-floating-1">Full Name</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="form-floating-2" placeholder="name@example.com" />
                                    <label htmlFor="form-floating-2">Email address</label>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <button className="btn btn-primary w-100 h-100" type="submit">Subscribe Now</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6" style={{minHeight: "400px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/quote.jpg" style={{objectFit: "cover"}} />
                    </div>
                </div>
            </div>
        </div>
        {/* Upcoming End */}


        


        {/* Blog Start */}
        <div className="container-fluid py-6 px-5">
            <div className="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                <h1 className="display-5 mb-0">Previous Meetings</h1>
                <hr className="w-25 mx-auto bg-primary" />
            </div>
            <div className="row g-5">
                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-1.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="/meeting-details/20-July-2023-First-meeting">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-2.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="blog-item">
                        <div className="position-relative overflow-hidden">
                            <img className="img-fluid" src="img/blog-3.jpg" alt="" />
                        </div>
                        <div className="bg-secondary d-flex">
                            <div className="flex-shrink-0 d-flex flex-column justify-content-center text-center bg-primary text-white px-4">
                                <span>01</span>
                                <h5 className="text-uppercase m-0">Jan</h5>
                                <span>2045</span>
                            </div>
                            <div className="d-flex flex-column justify-content-center py-3 px-4">
                                <div className="d-flex mb-2">
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="fa fa-check me-2"></i>Agenda</small>
                                    </a>
                                    <a href="#.">
                                        <small className="text-uppercase me-3"><i className="bi bi-bookmarks me-2"></i>Documents</small>
                                    </a>
                                </div>
                                <a className="h4" href="">Magna sea dolor ipsum amet lorem eos</a>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
        {/* Blog End */}
        

        {/* Footer Start */}
        <Footer />
        {/* Footer End */}


        {/* Back to Top */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
    </>
  )
}
