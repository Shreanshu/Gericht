import React, { useState } from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import { Blog } from '../../components';
import './BlogPage.css';



const BlogPage = () => {
    const [view, setView] = useState(true);

    return (
        <div className="app__blogpage-wrapper">
            <div className="app__blogpage section__padding app__bg-meal" id='blogs'>

                <div className="app__blogpage-title">
                    <SubHeading title="Our Blogs" />
                    <h1 className="headtext__cormorant">Gerícht Updates</h1>
                </div>

                <div className="app__blogpage-blogs">
                    {
                        view ?
                        data.blogs.map( (blogData, index) => {
                            if (index < 6)
                                {
                                    return <Blog key={"Blog" + index + 1} idx={index} blogDetails={blogData} />
                                }
                        } )
                        :
                        data.blogs.map( (blogData, index) => {
                            return <Blog key={"Blog" + index + 1} idx={index} blogDetails={blogData} />
                        } )
                    }
                </div>
                
                <button type='button' className='custom__button' id='blog' onClick={ () => { setView(!view) } }>{ view ? <a href='#blog'>View More Blogs</a> : <a>View Less Blogs</a> }</button>

            </div>
        </div>
    );
};

export default BlogPage;