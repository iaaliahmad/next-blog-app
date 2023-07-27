import React from 'react'
import { getThumbnail, getCategory, formatDate } from '/utils/helper';

const PostCard = ({ post }) => {
    return (
        <article className="col-lg-4 col-md-6 mb-30">
            <div className="post-card-1 border-radius-10 hover-up">
                <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{ backgroundImage: `url(${getThumbnail(post)})` }}>
                    <a className="img-link" href="which-company-would-you-choose.html"></a>
                    <ul className="social-share">
                        <li><a href="#"><i className="elegant-icon social_share"></i></a></li>
                        <li><a className="fb" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;title=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." title="Share on Facebook" target="_blank"><i className="elegant-icon social_facebook"></i></a></li>
                        <li><a className="tw" href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;text=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                        <li><a className="pt" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fstories.botble.com%2Fwhich-company-would-you-choose&amp;summary=Saepe%20ad%20quibusdam%20temporibus%20consectetur.%20Ad%20dolorem%20sequi%20enim%20quisquam.%20Consequatur%20dignissimos%20amet%20qui%20magni%20aut%20sint." target="_blank" title="Share on Linkedin"><i className="elegant-icon social_linkedin"></i></a></li>
                    </ul>
                </div>
                <div className="post-content p-30">
                    <div className="entry-meta meta-0 font-small mb-10">
                        <a href="guides.html"><span className="post-cat text-success">{getCategory(post).name}</span></a>
                    </div>
                    <div className="d-flex post-card-content">
                        <h5 className="post-title mb-20 font-weight-900">
                            <a href="which-company-would-you-choose.html">{post.title.rendered}</a>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                            <span className="post-on">{formatDate(post.date)}</span>
                            <span className="time-reading has-dot">12 mins read</span>
                            <span className="post-by has-dot">1,037 views</span>
                        </div>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default PostCard