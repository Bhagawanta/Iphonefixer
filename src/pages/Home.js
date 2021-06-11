import React from 'react'
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <React.Fragment>
    <section className="banner_part">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-5">
                    <div className="banner_img d-none d-lg-block">
                        <img src="assets/img/banner_img.png" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="banner_text">
                        <div className="banner_text_iner">
                            <h1><b>iPhone</b>Fix<br/>
                                We <b>FiX</b>It In Your Face</h1>
                            <p>Let’s face it.
                            Accidents happen but you know what?
                            We can FiX your device with original replacement parts so that your iPhone and iPad is as good as new, right in front of you.</p>
                            {/* <Link to="/contact">Contact Us</Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_7.png" alt="" className="feature_icon_1 custom-animation1"/>
        <img src="assets/img/animate_icon/Ellipse_8.png" alt="" className="feature_icon_2 custom-animation2"/>
        <img src="assets/img/animate_icon/Ellipse_1.png" alt="" className="feature_icon_3 custom-animation3"/>
        <img src="assets/img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_4 custom-animation4"/>
        <img src="assets/img/animate_icon/Ellipse_3.png" alt="" className="feature_icon_5 custom-animation5"/>
        <img src="assets/img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_6 custom-animation6"/>
    </section>
    {/* <!--::banner part start::--> */}

    {/* <!--::use sasu part end::--> */}
    <section className="use_sasu padding_top">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="assets/img/icon/feature_icon_1.png" alt=""/>
                            <h4>High Quality FiXParts</h4>
                            <p>Customer satisfaction is our ultimate priority and sourcing for the best replacement parts come with a 90 day warranty. </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="assets/img/icon/feature_icon_2.png" alt=""/>
                            <h4>Free FiX Diagnosis</h4>
                            <p>Our technical specialists are professional in conducting a diagnosis for our customers’ device, at no cost</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <div className="single_feature">
                        <div className="single_feature_part">
                            <img src="assets/img/icon/feature_icon_3.png" alt=""/>
                            <h4>FiX Contact & Support</h4>
                            <p>Our customers can get in touch with us for a quicker response through our various online communication platforms.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_1.png" alt="" className="feature_icon_1 custom-animation1"/>
    </section>
    {/* <!--::use sasu part end::--> */}

    {/* <!--::about_us part start::--> */}
    <section className="about_us section_padding">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <img src="assets/img/icon/Icon_1.png" alt=""/>
                        <h2>We Can FiX <br/>
                        It In Your Face</h2>
                        <p>We offer various repair and replacements for iPhone & iPad. 
                        At iPhoneFix, we ensure that your mobile devices are intact, while your personal data are safeguarded.
                         Rest assured that your device security is also our priority.</p>
                        <a href="#" className="btn_2">learn more</a>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="learning_img">
                        <img src="assets/img/about_img.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_1 custom-animation1"/>
    </section>
    {/* <!--::about_us part end::--> */}

    {/* <!--::about_us part start::--> */}
    <section className="about_us right_time">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="learning_img">
                        <img src="assets/img/about_img_1.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="about_us_text">
                        <img src="assets/img/icon/Icon_2.png" alt=""/>
                        <h2>Bring Your Device To Us</h2>
                        <p>Overall, our repairs are done right in front of you - “ We Fix It in Your Face!".
                            Where it is deemed necessary, we will open up your device and examine the root cause of the problem</p>
                        <a href="#" className="btn_2">learn more</a>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_5.png" alt="" className="feature_icon_2 custom-animation2"/>
    </section>
    {/* <!--::about_us part end::--> */}

    {/* <!--::pricing part start::--> */}
    <section className="pricing_part section_padding home_page_pricing">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section_tittle text-center">
                        <h2>We Fix It With Care</h2>
                        <p>At iPhoneFiX, we aim to achieve 100% customer satisfaction.</p>
                    </div>
                </div>
            
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_2.png" alt="" className="feature_icon_2 custom-animation2"/>
    </section>
    {/* <!--::pricing part end::--> */}

    {/* <!--::about_us part start::--> */}
    <section className="review_part padding_bottom">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md-6 col-lg-6">
                    <div className="review_img">
                        <img src="assets/img/review_bg.png" alt=""/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-5">
                    <div className="review_slider owl-carousel">
                        <div className="review_part_text">
                            <h2>With efficiency to
                                unlock more opportunities</h2>
                            <p>Saw shall light. Us their to place had creepeth day
                                night great wher appear to. Hath, called, sea called,
                                gathering wherein open make living Female itself
                                gathering man. Waters and, two. Bearing. Saw she'd
                                all let she'd lights abundantly blessed.</p>
                            <h3>Mitchel Jeferson, <span>CEO of softking</span> </h3>
                        </div>
                        <div className="review_part_text">
                            <h2>With efficiency to
                                unlock more opportunities</h2>
                            <p>Saw shall light. Us their to place had creepeth day
                                night great wher appear to. Hath, called, sea called,
                                gathering wherein open make living Female itself
                                gathering man. Waters and, two. Bearing. Saw she'd
                                all let she'd lights abundantly blessed.</p>
                            <h3>Mitchel Jeferson, <span>CEO of softking</span> </h3>
                        </div>
                        <div className="review_part_text">
                            <h2>With efficiency to
                                unlock more opportunities</h2>
                            <p>Saw shall light. Us their to place had creepeth day
                                night great wher appear to. Hath, called, sea called,
                                gathering wherein open make living Female itself
                                gathering man. Waters and, two. Bearing. Saw she'd
                                all let she'd lights abundantly blessed.</p>
                            <h3>Mitchel Jeferson, <span>CEO of softking</span> </h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_4.png" alt="" className="feature_icon_2 custom-animation2"/>
    </section>
    {/* <!--::about_us part end::--> */}

    {/* <!--::subscribe us part end::--/> */}
    <section className="subscribe_part padding_bottom">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="subscribe_part_text text-center">
                        <h2>Experience the most simple way to <br/>
                            manage business</h2>
                        <div className="subscribe_form">
                            <form action="#">
                                <div className="form-row">
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" placeholder="enter your email"/>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="subscribe_btn">
                                            <div className="btn_2 d-block">free trail</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <img src="assets/img/animate_icon/Ellipse_5.png" alt="" className="feature_icon_2 custom-animation2"/>
    </section>
    {/* <!--::subscribe us part end::--> */}

    {/* <!--::client logo part end::--> 
    <section className="client_logo">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-12">
                    <div className="client_logo_slider owl-carousel d-flex justify-content-between">
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_1.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_2.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_3.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_4.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_5.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_1.png" alt=""/>
                        </div>
                        <div className="single_client_logo">
                            <img src="assets/img/client_logo/client_logo_2.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--::client logo part end::--> */}

        </React.Fragment>
    )
}
