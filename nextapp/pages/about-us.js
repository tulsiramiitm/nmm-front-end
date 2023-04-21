import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function About() {
    return (
        <>
            <Head>
                <title>Monsoon Mission | About us </title>
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
                        <h1 className="display-4 text-white">About Us</h1>
                        <Link href="/">Home</Link>
                        <i className="fas fa-chevron-right text-primary px-2"></i>
                        <Link href="/about-us">About</Link>
                        
                    </div>
                </div>
            </div>
            {/* Page Header End */}


            {/* About Start */}
            <div className="container-fluid bg-secondary p-0">
                <div className="row g-0">
                    <div className="col-lg-6 py-6 px-5">
                        <h1 className="display-5 mb-4">Welcome To <span className="text-primary">CONSULT</span></h1>
                        <h4 className="text-primary mb-4">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h4>
                        <p className="mb-4">Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus sanctus invidunt erat ipsum eirmod.</p>
                        <a href="" className="btn btn-primary py-md-3 px-md-5 rounded-pill">Get A Quote</a>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100 d-flex flex-column justify-content-center bg-primary p-5">
                            <div className="d-flex text-white mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-user-tie fs-4"></i>
                                </div>
                                <div className="ps-4">
                                    <h3>Business Planning</h3>
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                                </div>
                            </div>
                            <div className="d-flex text-white mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-chart-line fs-4"></i>
                                </div>
                                <div className="ps-4">
                                    <h3>Financial Analaysis</h3>
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                                </div>
                            </div>
                            <div className="d-flex text-white">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center bg-white text-primary rounded-circle mx-auto mb-4" style={{width: "60px", height: "60px"}}>
                                    <i className="fa fa-balance-scale fs-4"></i>
                                </div>
                                <div className="ps-4">
                                    <h3>legal Advisory</h3>
                                    <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}


            {/* Team Start */}
            <div className="container-fluid py-6 px-5">
                <div className="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                    <h1 className="display-5 mb-0">Our Team Members</h1>
                    <hr className="w-25 mx-auto bg-primary" />
                </div>
                <div className="row g-5">
                    <div className="col-lg-4">
                        <div className="team-item position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./img/team-1.jpg" alt="" />
                            <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                                <h3 className="text-white">Full Name</h3>
                                <p className="text-white text-uppercase mb-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-item position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./img/team-2.jpg" alt="" />
                            <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                                <h3 className="text-white">Full Name</h3>
                                <p className="text-white text-uppercase mb-0">Designation</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-item position-relative overflow-hidden">
                            <img className="img-fluid w-100" src="./img/team-3.jpg" alt="" />
                            <div className="team-text w-100 position-absolute top-50 text-center bg-primary p-4">
                                <h3 className="text-white">Full Name</h3>
                                <p className="text-white text-uppercase mb-0">Designation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}
            

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}


            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    )
}