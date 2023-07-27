"use client";
import React from 'react'
import PostCard from '../PostCard/PostCard'
import Slider from "react-slick";
import { getThumbnail, getCategory, formatDate } from '/utils/helper';
import Link from 'next/link'


// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FeaturedPosts = ({ posts, sliderPosts }) => {
    var sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <div>
            <div className="container">
                <div className="hot-tags pt-30 pb-30 font-small align-self-center">
                    <div className="widget-header-3">
                        <div className="row align-self-center">
                            <div className="col-md-4 align-self-center">
                                <h5 className="widget-title">Featured posts</h5>
                            </div>
                            <div className="col-md-8 text-md-right font-small align-self-center">
                                <p className="d-inline-block mr-5 mb-0"><i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>Hot tags:</p>
                                <ul className="list-inline d-inline-block tags">
                                    <li className="list-inline-item"><Link href="tag/general.html"># General</Link></li>
                                    <li className="list-inline-item"><Link href="tag/design.html"># Design</Link></li>
                                    <li className="list-inline-item"><Link href="tag/fashion.html"># Fashion</Link></li>
                                    <li className="list-inline-item"><Link href="tag/branding.html"># Branding</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="loop-grid mb-30">
                    <div className="row">
                        <div className="col-lg-8 mb-30">
                            <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative" {...sliderSettings}>
                                <div className="arrow-cover"></div>
                                <Slider className="slide-fade" {...sliderSettings}>
                                    {sliderPosts.map((post) => (
                                        <div className="position-relative post-thumb">
                                            <div className="thumb-overlay img-hover-slide position-relative" style={{ backgroundImage: `url(${getThumbnail(post)})` }}>
                                                <Link className="img-link" href={`/post/${post.slug}`}></Link>
                                                <span className="top-left-icon bg-warning"><i className="elegant-icon icon_star_alt"></i></span>
                                                <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                                    <div className="entry-meta meta-0 font-small mb-20">
                                                        <Link href="guides.html"><span className="post-cat text-warning text-uppercase">{getCategory(post).name}</span></Link>
                                                    </div>
                                                    <h3 className="post-title font-weight-900 mb-20">
                                                        <Link href={`/post/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                                                    </h3>
                                                    <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                        <span className="post-on">{formatDate(post.date)}</span>
                                                        <span className="hit-count has-dot">1,118 views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>

                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div >
        </div >
    )
}

export default FeaturedPosts