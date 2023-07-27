import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className="main-header header-style-1 font-heading">
            <div className="header-select-language d-block d-sm-none">
                <div className="container">
                    <div className="language-wrapper d-block d-sm-none">
                        <span>Language:</span> <ul className="language_bar_list ">
                            <li>
                                <Link href="vi.html">
                                    <img src="vendor/core/core/base/images/flags/vn.svg" title="Tiếng Việt" width="16" alt="Tiếng Việt" />
                                    <span>Tiếng Việt</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
            <div className="header-top">
                <div className="container">
                    <div className="row pt-20 pb-20">
                        <div className="col-md-3 col-6">
                            <Link href="/"><img className="logo" src="storage/general/logo.png" alt="Stories - Laravel Personal Blog Script" /></Link>
                        </div>
                        <div className="col-md-9 col-6 text-right header-top-right">
                            <div className="language-wrapper d-none d-md-inline">
                                <ul className="language_bar_list ">
                                    <li>
                                        <Link href="vi.html">
                                            <img src="vendor/core/core/base/images/flags/vn.svg" title="Tiếng Việt" width="16" alt="Tiếng Việt" />
                                            <span>Tiếng Việt</span>
                                        </Link>
                                    </li>
                                </ul>
                                <div className="clearfix"></div>
                            </div>
                            <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                            <button className="search-icon d-inline"><span className="mr-15 text-muted font-small"><i className="elegant-icon icon_search mr-5"></i>Search</span></button>
                            <Link href="https://botble.com/go/stories" className="btn btn-radius bg-primary text-white d-none d-md-inline ml-15 font-small box-shadow">Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-sticky">
                <div className="container align-self-center">
                    <div className="mobile_menu d-lg-none d-block"></div>
                    <div className="main-nav d-none d-lg-block float-left">
                        <nav>
                            <ul className="main-menu d-none d-lg-inline font-small">
                                <li className="">
                                    <Link href="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="travel.html">
                                        Travel
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="destination.html">
                                        Destination
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="hotels.html">
                                        Hotels
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="lifestyle.html">
                                        Lifestyle
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="blog.html">
                                        Blog
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="galleries.html">
                                        Galleries
                                    </Link>
                                </li>
                                <li className=" menu-item-has-children   ">
                                    <Link href="blog.html">
                                        Blog layouts
                                    </Link>
                                    <ul className="sub-menu text-muted font-small">
                                        <li className="  ">
                                            <Link href="blog-grid-layout.html">
                                                Grid layout
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="blog-list-layout.html">
                                                List layout
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="blog-big-layout.html">
                                                Big layout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="  ">
                                    <Link href="contact.html">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                            <ul className="d-block d-lg-none text-muted" id="mobile-menu" data-label="Menu">
                                <li className=" menu-item-has-children    current-menu-item ">
                                    <Link href="/">
                                        <i className="elegant-icon mr-5elegant-icon icon_house_alt mr-5"></i> Home
                                    </Link>
                                    <ul className="sub-menu text-muted font-small">
                                        <li className="   current-menu-item ">
                                            <Link href="/">
                                                Home default
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="home-2.html">
                                                Home 2
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="home-3.html">
                                                Home 3
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="  ">
                                    <Link href="travel.html">
                                        Travel
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="destination.html">
                                        Destination
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="hotels.html">
                                        Hotels
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="lifestyle.html">
                                        Lifestyle
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="blog.html">
                                        Blog
                                    </Link>
                                </li>
                                <li className="  ">
                                    <Link href="galleries.html">
                                        Galleries
                                    </Link>
                                </li>
                                <li className=" menu-item-has-children   ">
                                    <Link href="blog.html">
                                        Blog layouts
                                    </Link>
                                    <ul className="sub-menu text-muted font-small">
                                        <li className="  ">
                                            <Link href="blog-grid-layout.html">
                                                Grid layout
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="blog-list-layout.html">
                                                List layout
                                            </Link>
                                        </li>
                                        <li className="  ">
                                            <Link href="blog-big-layout.html">
                                                Big layout
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="  ">
                                    <Link href="contact.html">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="float-right header-tools text-muted font-small">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item"><Link className="social-icon text-xs-center" style={{ background: '#3b5999' }} href="https://facebook.com/" target="_blank" title="Facebook"><i className="elegant-icon social_facebook"></i></Link></li>
                            <li className="list-inline-item"><Link className="social-icon text-xs-center" style={{ background: '#55ACF9' }} href="https://twitter.com/" target="_blank" title="Twitter"><i className="elegant-icon social_twitter"></i></Link></li>
                            <li className="list-inline-item"><Link className="social-icon text-xs-center" style={{ background: '#0a66c2' }} href="https://linkedin.com/" target="_blank" title="Linkedin"><i className="elegant-icon social_linkedin"></i></Link></li>
                        </ul>
                        <div className="off-canvas-toggle-cover d-inline-block">
                            <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </header>
    )
}

export default Header