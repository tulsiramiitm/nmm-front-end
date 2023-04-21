import { useRouter } from "next/router";
import Link from "next/link";
import logo from "/img/mm-logo.png";


function Header() {

    const router = useRouter();
    
    return (
        <>
            {/* Topbar Start */}
            <div className="container-fluid bg-secondary ps-5 pe-0 d-none d-lg-block">
                <div className="row gx-0">
                    <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                        <div className="d-inline-flex align-items-center">
                            {/* <a className="text-body py-2 px-3 border-end" href=""><small>Support</small></a>
                            <a className="text-body py-2 px-3 border-end" href=""><small>Privacy</small></a>
                            <a className="text-body py-2 px-3 border-end" href=""><small>Policy</small></a>
                            <a className="text-body py-2 ps-3" href=""><small>Career</small></a> */}
                            <span className="text-body py-2 pe-3 border-end" ><small>Upcoming SMRC and SSC Meeting soon</small></span>
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-lg-end">
                        <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                            <div className="me-3 pe-3 border-end py-2">
                                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>monsoon_mission@tropmet.res.in</p>
                            </div>
                            <div className="py-2">
                                <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+91-20-2590-4424</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Topbar End */}


            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
                <Link href="/" className="navbar-brand p-0">
                    <h1 className="m-0 text-uppercase text-primary pt-1" style={{fontSize: "20px"}}>
                        <img src={logo.src} alt="mm-logo" style={{height: "95px"}} />Monsoon Mission
                        {/* <i className="far fa-smile text-primary me-2"></i>consult */}
                    </h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 me-n3">
                        <Link href="/" className={router.pathname == "/" ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>
                        <Link href="/about-us" className={router.pathname == "/about-us" ? "nav-item nav-link active" : "nav-item nav-link"}>About</Link>
                        <Link href="/meetings" className={router.pathname == "/meetings" ? "nav-item nav-link active" : "nav-item nav-link"}>Meetings</Link>
                        <Link href="/services" className={router.pathname == "/services" ? "nav-item nav-link active" : "nav-item nav-link"}>Services</Link>
                        <div className="nav-item dropdown">
                            <Link href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Committees</Link>
                            <div className="dropdown-menu m-0">
                                <Link href="/Committees/SSC" className="dropdown-item">SSC</Link>
                                <Link href="/Committees/SMRC" className="dropdown-item">SMRC</Link>
                                <Link href="/Committees/Monsoon-Mission-Directorate" className="dropdown-item">Monsoon Mission Directorate</Link>
                            </div>
                        </div>
                        <Link href="/contact" className="nav-item nav-link">Contact</Link>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}
        </>
    )
       
} 
export default Header