import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'



const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () =>{
    const res = await fetch('http://127.0.0.1:8000/api/slider');
    const data = await res.json();

    return {
        props:{
            data,
        },
    };
};

export default function Home({data}) {
    console.log(data);
  return (
    <>
        <Head>
            <title>Monsoon Mission</title>
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


        {/* Carousel Start */}
        <div className="container-fluid p-0">
            <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                {data.map((slider, i) => (
                    <div className={i == 0 ? "carousel-item active" : "carousel-item "} key={slider.id}>
                        <img className="w-100" src={"http://127.0.0.1:8000/"+slider.image} alt="Image" style={{height: "480px"}} />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" style={{maxWidth: "900px"}}>                            
                                <h1 className="display-1 text-white mb-md-4">{slider.heading}</h1>
                                <h5 className="text-white mb-3rem">{slider.desc}</h5>
                                {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a> */}
                            </div>
                        </div>
                    </div>


                ))}
                    
                    {/* <div className="carousel-item ">
                        <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" >
                                <h5 className="text-white text-uppercase">Business Consultancy</h5>
                                <h1 className="display-1 text-white mb-md-4">Take Our Help To Reach The Top Level</h1>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img className="w-100" src="/img/carousel-2.jpg" alt="Image" />
                        <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div className="p-3" >
                                <h5 className="text-white text-uppercase">Business Consultancy</h5>
                                <h1 className="display-1 text-white mb-md-4">Take Our Help To Reach The Top Level</h1>
                                <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 rounded-pill">Get Quote</a>
                                <a href="" className="btn btn-secondary py-md-3 px-md-5 rounded-pill">Contact Us</a>
                            </div>
                        </div>
                    </div> */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        {/* Carousel End */}


        {/* About Start */}
        <div className="container-fluid bg-secondary p-0">
            <div className="row g-0">
                <div className="col-lg-6 py-6 px-5">
                    <h1 className="display-5 mb-4">Welcome To <span className="text-primary">Monsoon Mission</span></h1>
                    <h4 className="text-primary mb-4">Here we discuss about accurate prediction of monsoon rainfall, Weather and Climate etc.</h4>
                    <p className="mb-4">The Indian summer (southwest) monsoon is referred as lifeline of India, as ariability in any of its aspects (onset, withdrawal and quantum of rainfall) greatly influences the agriculture yield, economy, water resources, power generation and ecosystem. Hence, if the variations in monsoon rainfall are known well in advance, it would be possible to reduce the adverse impacts related to excess or deficient rainfall, providing us prior information about droughts and floods.</p>
                    <a href="about-us" className="btn btn-primary py-md-3 px-md-5 rounded-pill">Read More</a>
                </div>
                <div className="col-lg-6">
                    <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
                        <div className="d-flex text-white mb-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-check fs-4"></i>
                            </div>
                            <div className="ps-4">
                                <h3>Agenda</h3>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                            </div>
                        </div>
                        <div className="d-flex text-white mb-5">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-users fs-4"></i>
                            </div>
                            <div className="ps-4">
                                <h3>Meeting/Discussion</h3>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                            </div>
                        </div>
                        <div className="d-flex text-white">
                            <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                <i className="fa fa-file fs-4"></i>
                            </div>
                            <div className="ps-4">
                                <h3>Documentation</h3>
                                <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* About End */}

        {/* Quote Start */}
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
        {/* Quote End */}


        


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

                <div className="col-lg-12">
                    <a href="about-us" className="btn btn-primary py-md-3 px-md-5 rounded-pill float-end">All Meetings</a>
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
