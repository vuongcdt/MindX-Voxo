import { useEffect } from 'react';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Head from 'next/head';
import PostCard from '../../components/Posts/PostCard';
import Sidebar from '../../components/Blog/Sidebar';
import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';

function Blog() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);
        feather.replace();
    }, []);

    const { isLoading, error, data } = useQuery('repoData', async () =>
        {
            const res = await fetch(BLOG_LIST);
        
            const data = await res.json();

            return {
                responseInfo: data, 
                totalPost: res.headers.get('x-wp-total'),
                totalPage: res.headers.get('x-wp-totalpages')
            }
        
        }
    );

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    return (
        <>
            <Head>
                <title>Blog Listing</title>
            </Head>
            {/* Breadcrumb section start */}
            <section className="breadcrumb-section section-b-space">
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3>New Post</h3>
                            <nav>
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="index.html">
                                            <i className="fas fa-home"></i>
                                        </a>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page"
                                    >
                                        New Post
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb section end */}

            {/* Blog Section Start */}
            <section className="left-sidebar-section masonary-blog-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 col-md-7 order-md-1 ratio_square">
                            <div className="row g-4 g-xl-5">
                                {/* minhhieu */}
                                {
                                    data.responseInfo.map( (item,index) => {
                                        return <div className="col-12" key={index}>
                                            <PostCard {...item}/>
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            {/* pagination section start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="page-section mt-0">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <a
                                            className="page-link"
                                            href="undefined"
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </a>
                                    </li>
                                    {/* minhhieu */}
                                    {
                                        data.totalPage && Array(data.totalPage * 1).fill(0).map((item, index) => {
                                            return <li className="page-item active">
                                                <a
                                                    className="page-link"
                                                    href="undefined"
                                                >
                                                    {index+1}
                                                </a>
                                            </li>
                                        })
                                    }
                                    <li className="page-item">
                                        <a className="page-link">
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* pagination section end */}

            <SubscribeBox />
        </>
    );
}

export default Blog;
