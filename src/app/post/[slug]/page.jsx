import React from 'react'
import { getThumbnail, getAuthorImage, formatDate, getTags } from '/utils/helper';

export default async function page({ params }) {

    let post = await fetch(`https://improperties.ae/wp-json/wp/v2/posts?slug=${params.slug}&_embed=true`);
    post = await post.json();
    post = post[0];

    return (
        <div className="container single-content">
            <div className="entry-header entry-header-style-1 mb-50 pt-50">
                <h1 className="entry-title mb-50 font-weight-900" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h1>
                <div className="row">
                    <div className="col-md-6">
                        <div className="entry-meta align-items-center meta-2 font-small color-muted">
                            <p className="mb-5">
                                <span className="author-avatar"><img className="img-circle" src={getAuthorImage(post)} alt="Steven Madden" /></span>
                                By <span className="author-name font-weight-bold">Steven Madden</span>
                            </p>
                            <span className="mr-10">{formatDate(post.date)}</span>
                            <span className="has-dot"> 12 mins read</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-right d-none d-md-inline">
                        <ul className="header-social-network d-inline-block list-inline mr-15">
                            <li className="list-inline-item text-muted"><span>Share this: </span></li>
                            <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;title=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_facebook"></i></a></li>
                            <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;text=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_twitter"></i></a></li>
                            <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;summary=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <figure className="image mb-30 m-auto text-center border-radius-10">
                <img className="border-radius-10" src={getThumbnail(post)} alt="The Top 2020 Handbag Trends to Know" />
            </figure>
            <article className="entry-wraper mb-50">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                <div className="entry-bottom mt-50 mb-30 wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <div className="tags">
                        <span>Tags: </span>
                        {getTags(post).map((tag) => {
                            <a href="#" rel="tag">{tag}</a>
                        })}
                    </div>
                </div>
                <div className="single-social-share clearfix wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <ul className="header-social-network d-inline-block list-inline float-md-right mt-md-0 mt-4">
                        <li className="list-inline-item text-muted"><span>Share this: </span></li>
                        <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;title=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_facebook"></i></a></li>
                        <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;text=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_twitter"></i></a></li>
                        <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fstories.botble.com%2Fthe-top-2020-handbag-trends-to-know&amp;summary=Ab%20cum%20ipsum%20totam%20incidunt%20impedit%20omnis.%20Et%20expedita%20sint%20nulla%20voluptas.%20Officia%20exercitationem%20consequuntur%20ut%20voluptate%20et%20quidem%20veritatis."><i className="elegant-icon social_linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn  animated" style={{ visibility: 'visible', animationName: 'fadeIn' }}>
                    <div className="author-image mb-30">
                        <img className="avatar" src="storage/users/default.jpg" alt="Steven Madden" />
                    </div>
                    <div className="author-info">
                        <h4 className="font-weight-bold mb-20">
                            <span className="vcard author"><span className="fn">Steven Madden</span></span>
                        </h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem blanditiis deleniti inventore porro quidem rem suscipit voluptatibus! Aut illum libero, praesentium quis quod rerum sint? Ducimus iure nulla totam!</p>
                    </div>
                </div>
                <br />
                <div className="facebook-comment">
                    <div className="fb-comments" data-href="https://stories.botble.com/the-top-2020-handbag-trends-to-know" data-numposts="5" data-width="100%"></div>
                </div>
                <div className="related-posts">
                    <div className="post-module-3">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Related posts</h5>
                        </div>
                        {/* <div className="loop-list loop-list-style-1">
                            <article className="hover-up-2 transition-normal wow fadeInUp   animated" style="visibility: visible; animation-name: fadeInUp;">
                                <div className="row mb-40 list-style-2">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative border-radius-5">
                                            <div className="img-hover-slide border-radius-5 position-relative" style="background-image: url(storage/news/3.jpg)">
                                                <a className="img-link" href="which-company-would-you-choose.html"></a>
                                            </div>
                                            <ul className="social-share">
                                                <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                                                <li><a className="fb" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;title=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook"></i></a></li>
                                                <li><a className="tw" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;text=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                                                <li><a className="pt" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;summary=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." target="_blank" title="Share on Linkedin"><i className="elegant-icon social_linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-self-center">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-10">
                                                <a href="guides.html"><span className="post-cat text-info">Guides</span></a>
                                                <a href="hotels.html"><span className="post-cat text-info">Hotels</span></a>
                                            </div>
                                            <h5 className="post-title font-weight-900 mb-20">
                                                <a href="which-company-would-you-choose.html">Which Company Would You Choose?</a>
                                                <span className="post-format-icon"><i className="elegant-icon icon_star_alt"></i></span>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">Dec 23, 2021</span>
                                                <span className="time-reading has-dot">19 mins read</span>
                                                <span className="post-by has-dot">1,037 views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            <article className="hover-up-2 transition-normal wow fadeInUp   animated" style="visibility: visible; animation-name: fadeInUp;">
                                <div className="row mb-40 list-style-2">
                                    <div className="col-md-4">
                                        <div className="post-thumb position-relative border-radius-5">
                                            <div className="img-hover-slide border-radius-5 position-relative" style="background-image: url(storage/news/4.jpg)">
                                                <a className="img-link" href="used-car-dealer-sales-tricks-exposed.html"></a>
                                            </div>
                                            <ul className="social-share">
                                                <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                                                <li><a className="fb" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstories.botble.com%2Fused-car-dealer-sales-tricks-exposed&amp;title=Id%20modi%20tempore%20temporibus%20sapiente%20ipsa.%20Id%20dolores%20voluptatem%20sit%20quas%20incidunt%20consequatur%20nihil.%20Tempore%20aut%20excepturi%20saepe%20eum%20corrupti%20nisi.%20Modi%20sunt%20exercitationem%20atque%20et." title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook"></i></a></li>
                                                <li><a className="tw" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstories.botble.com%2Fused-car-dealer-sales-tricks-exposed&amp;text=Id%20modi%20tempore%20temporibus%20sapiente%20ipsa.%20Id%20dolores%20voluptatem%20sit%20quas%20incidunt%20consequatur%20nihil.%20Tempore%20aut%20excepturi%20saepe%20eum%20corrupti%20nisi.%20Modi%20sunt%20exercitationem%20atque%20et." target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                                                <li><a className="pt" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fstories.botble.com%2Fused-car-dealer-sales-tricks-exposed&amp;summary=Id%20modi%20tempore%20temporibus%20sapiente%20ipsa.%20Id%20dolores%20voluptatem%20sit%20quas%20incidunt%20consequatur%20nihil.%20Tempore%20aut%20excepturi%20saepe%20eum%20corrupti%20nisi.%20Modi%20sunt%20exercitationem%20atque%20et." target="_blank" title="Share on Linkedin"><i className="elegant-icon social_linkedin"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-8 align-self-center">
                                        <div className="post-content">
                                            <div className="entry-meta meta-0 font-small mb-10">
                                                <a href="hotels.html"><span className="post-cat text-warning">Hotels</span></a>
                                                <a href="travel.html"><span className="post-cat text-info">Travel</span></a>
                                            </div>
                                            <h5 className="post-title font-weight-900 mb-20">
                                                <a href="used-car-dealer-sales-tricks-exposed.html">Used Car Dealer Sales Tricks Exposed</a>
                                                <span className="post-format-icon"><i className="elegant-icon icon_star_alt"></i></span>
                                            </h5>
                                            <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                <span className="post-on">Dec 23, 2021</span>
                                                <span className="time-reading has-dot">19 mins read</span>
                                                <span className="post-by has-dot">632 views</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div> */}
                    </div>
                </div>
                {/* <div className="single-more-articles border-radius-5">
                    <div className="widget-header-2 position-relative mb-30">
                        <h5 className="mt-5 mb-30">You might be interested in</h5>
                        <button className="single-more-articles-close"><i className="elegant-icon icon_close"></i></button>
                    </div>
                    <div className="post-block-list post-module-1 post-module-5">
                        <ul className="list-post">
                            <li className="mb-30">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <a className="color-white" href="20-ways-to-sell-your-product-faster.html">
                                            <img src="storage/news/5.jpg" alt="20 Ways To Sell Your Product Faster" />
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="20-ways-to-sell-your-product-faster.html">20 Ways To Sell Your Product Faster</a></h6>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on">Dec 23, 2021</span>
                                            <span className="post-by has-dot">1,127 views</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="mb-30">
                                <div className="d-flex hover-up-2 transition-normal">
                                    <div className="post-thumb post-thumb-80 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                                        <a className="color-white" href="the-secrets-of-rich-and-famous-writers.html">
                                            <img src="storage/news/6.jpg" alt="The Secrets Of Rich And Famous Writers" />
                                        </a>
                                    </div>
                                    <div className="post-content media-body">
                                        <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="the-secrets-of-rich-and-famous-writers.html">The Secrets Of Rich And Famous Writers</a></h6>
                                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                            <span className="post-on">Dec 23, 2021</span>
                                            <span className="post-by has-dot">1,171 views</span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div> */}
            </article >
        </div >
    )
}

