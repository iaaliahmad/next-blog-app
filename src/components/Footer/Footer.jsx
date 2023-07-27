import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="pt-50 pb-20 bg-grey">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="sidebar-widget wow fadeInUp animated mb-30">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">About me</h5>
                            </div>
                            <div className="textwidget">
                                <p>
                                    Start writing, no matter what. The water does not flow until the faucet is turned on.
                                </p>
                                <p><strong className="color-black">Address</strong><br />
                                    123 Main Street New York, NY 100012
                                </p>
                                <p>
                                    <strong className="color-black">Follow me</strong><br />
                                </p>
                                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                    <li className="list-inline-item"><Link style={{ background: '#3b5999' }} href="https://facebook.com/" target="_blank" title="Facebook"><i className="elegant-icon social_facebook"></i></Link></li>
                                    <li className="list-inline-item"><Link style={{ background: '#55ACF9' }} href="https://twitter.com/" target="_blank" title="Twitter"><i className="elegant-icon social_twitter"></i></Link></li>
                                    <li className="list-inline-item"><Link style={{ background: '#0a66c2' }} href="https://linkedin.com/" target="_blank" title="Linkedin"><i className="elegant-icon social_linkedin"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="sidebar-widget widget_categories wow fadeInUp animated mb-30" data-wow-delay="0.1s">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Quick links</h5>
                            </div>
                            <ul className="font-small">
                                <li className="current ">
                                    <Link href="index.html">
                                        <span>Homepage</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="contact.html">
                                        <span>Contact</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="blog.html">
                                        <span>Blog</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="travel.html">
                                        <span>Travel</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="galleries.html">
                                        <span>Galleries</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30" data-wow-delay="0.2s">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Tags</h5>
                            </div>
                            <div className="tagcloud mt-50">
                                <Link className="tag-cloud-link" href="tag/general.html">General</Link>
                                <Link className="tag-cloud-link" href="tag/design.html">Design</Link>
                                <Link className="tag-cloud-link" href="tag/fashion.html">Fashion</Link>
                                <Link className="tag-cloud-link" href="tag/branding.html">Branding</Link>
                                <Link className="tag-cloud-link" href="tag/modern.html">Modern</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30" data-wow-delay="0.3s">
                            <div className="widget-header-2 position-relative mb-30">
                                <h5 className="mt-5 mb-30">Newsletter</h5>
                            </div>
                            <div className="newsletter">
                                <p className="font-medium">Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                                <form className="input-group form-subcriber mt-30 d-flex newsletter-form" action="https://stories.botble.com/newsletter/subscribe" method="post">
                                    <input type="hidden" name="_token" value="3fKdat2lDGOdyeQz8dDV7CVj9wNq3rsoPp2jt2aa" />
                                    <div className="form-group">
                                        <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response-62fcbe85f07f1" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                                        <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                    <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                        <p className="float-md-left font-small text-muted">©2021 Stories - Laravel Personal Blog Script</p>
                        <p className="float-md-right font-small text-muted">
                            Designed by AliThemes | All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer