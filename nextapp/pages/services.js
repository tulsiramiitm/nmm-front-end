import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from "next/link";


const inter = Inter({ subsets: ['latin'] })

export default function Services() {
    return (
        <>
            <Head>
                <title>Monsoon Mission | Services</title>
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
                        <h1 className="display-4 text-white">Services</h1>
                        <Link href="/">Home</Link>
                        <i className="fas fa-chevron-right text-primary px-2"></i>
                        <Link href="/services">Services</Link>
                        
                    </div>
                </div>
            </div>
            {/* Page Header End */}


            {/* Services Start */}
            <div class="container-fluid pt-6 px-5">
                <div class="text-center mx-auto mb-5" style={{maxWidth: "600px"}}>
                    <h1 class="display-5 mb-0">What We Offer</h1>
                    <hr class="w-25 mx-auto bg-primary" />
                </div>
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-user-tie fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Data</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-chart-pie fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Publications</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-chart-line fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Activities</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-chart-area fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Prediction</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-balance-scale fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Model</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="service-item bg-secondary text-center px-5">
                            <div class="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mx-auto mb-4" style={{width: "90px", height: "90px"}}>
                                <i class="fa fa-house-damage fa-2x"></i>
                            </div>
                            <h3 class="mb-3">Others</h3>
                            <p class="mb-0">Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem</p>
                        </div>
                    </div>
                </div>
            </div> 
            {/* Services End */}
            

            {/* Footer Start */}
            <Footer />
            {/* Footer End */}


            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i className="bi bi-arrow-up"></i></a>
        </>
    )
}