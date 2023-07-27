import React from 'react'

const Intro = () => {
    return (
        <div>
            <div className="featured-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <p className="text-muted"><span className="typewrite d-inline" data-period="2000" data-type='["Travel Blogger.," Content Writer."," Food Guides"]'></span></p>
                            <h2>Hello, I’m <span>Steven</span></h2>
                            <h3 className="mb-20">Welcome to my blog</h3>
                            <h5 className="text-muted">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</h5>
                            <form className="form-subcriber mt-30 newsletter-form" action="https://stories.botble.com/newsletter/subscribe" method="post">
                                <input type="hidden" name="_token" value="3fKdat2lDGOdyeQz8dDV7CVj9wNq3rsoPp2jt2aa" />
                                <div className="form-group">
                                    <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response-62fcbe85d7368" />
                                </div>
                                <div className="input-group d-flex">
                                    <input type="email" name="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                                    <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 text-right d-none d-lg-block">
                            <img src="storage/general/featured.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro