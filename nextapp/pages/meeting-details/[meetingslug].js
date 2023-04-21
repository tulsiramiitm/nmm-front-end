import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from "next/link";
import logo from "/img/mm-logo.png";




const MeetingDetails = () => {
  const router = useRouter()
  const { meetingslug } = router.query

  return (
    <>
        <Head>
            <title>Monsoon Mission | { meetingslug } </title>
            <meta name="description" content="Ministry of Earth Sciences (MoES), Government of India has launched 'National Monsoon Mission' (NMM) with a vision to develop a state-of-the-art dynamical prediction system for monsoon rainfall on different time scales" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="Rainfall, Weather, Climate" />
            <meta name="author" content="Indian Institute of Tropical Meteorology" />
            <link rel="icon" href={logo.src} />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap"  />
        </Head>


        {/* Header */}
        <Header />
        {/* Header */}


        {/* Page Header Start */}
        <div className="container-fluid bg-dark p-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className="display-5 text-white">Magna sea dolor ipsum amet lorem eos Magna sea dolor ipsum amet lorem eos</h1>
                    {/* <span className='text-white'>Magna sea dolor ipsum amet lorem eos</span> */}
                    {/* <Link href="/">Home</Link>
                    <i className="fas fa-chevron-right text-primary px-2"></i>
                    <Link href={"/meeting-details/"+meetingslug} >About</Link> */}
                </div>
            </div>
        </div>
        {/* Page Header End */}


        {/* Blog Start */}
        <div className="container-fluid py-6 px-5">
            <div className="row g-5">
                <div className="col-lg-8">
                    {/* Blog Detail Start */}
                    <div className="mb-5">
                        <img className="img-fluid w-100 mb-5" src="/img/blog-1.jpg" alt="" />
                        <h1 className="mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor duo</h1>
                        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                            magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                            amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                            sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                            aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                            sit stet no diam kasd vero.</p>
                        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                            vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                            nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                            ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                            clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                            justo dolore sit invidunt.</p>
                        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                            invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                            lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                            rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                            sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                            lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                            sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
                    </div>
                    {/* Blog Detail End */}

                    {/* Comment List Start */}
                    <div className="mb-5">
                        <h2 className="mb-4">3 Comments</h2>
                        <div className="d-flex mb-4">
                            <img src="/img/user.jpg" className="img-fluid rounded-circle" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <img src="/img/user.jpg" className="img-fluid rounded-circle" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                        <div className="d-flex ms-5 mb-4">
                            <img src="/img/user.jpg" className="img-fluid rounded-circle" style={{width: "45px", height: "45px"}} />
                            <div className="ps-3">
                                <h6><a href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                    accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed eirmod</p>
                                <button className="btn btn-sm btn-light">Reply</button>
                            </div>
                        </div>
                    </div>
                    {/* Comment List End */}

                    {/* Comment Form Start */}
                    <div className="bg-secondary p-5">
                        <h2 className="mb-4">Leave a comment</h2>
                        <form>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Your Name" style={{height: "55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-white border-0" placeholder="Your Email" style={{height: "55px"}} />
                                </div>
                                <div className="col-12">
                                    <input type="text" className="form-control bg-white border-0" placeholder="Website" style={{height: "55px"}} />
                                </div>
                                <div className="col-12">
                                    <textarea className="form-control bg-white border-0" rows="5" placeholder="Comment"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Leave Your Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* Comment Form End */}
                </div>

                {/* Sidebar Start */}
                <div className="col-lg-4">
                    {/* Search Form Start */}
                    <div className="mb-5">
                        <div className="input-group">
                            <input type="text" className="form-control p-3" placeholder="Search document" />
                            <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                    {/* Search Form End */}

                    {/* Agenda Start */}
                    <div className='my-4'>
                        <Link className='flash-text fs-3' href="/">Agenda</Link>
                        
                    </div>
                    {/* Agenda end */}

                    {/* Category Start */}
                    <div className="mb-5">
                        <h2 className="mb-4">Latest Documents</h2>
                        <div className="d-flex flex-column justify-content-start bg-secondary p-4">
                            <a className="h5 mb-3" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Document 1</a>
                            <a className="h5 mb-3" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Document 2</a>
                            <a className="h5 mb-3" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Document 3</a>
                            <a className="h5 mb-3" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Document 4</a>
                            <a className="h5" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Document 5</a>
                        </div>
                    </div>
                    {/* Category End */}

                    

                    

                    

                    
                </div>
                {/* Sidebar End */}
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

export default MeetingDetails