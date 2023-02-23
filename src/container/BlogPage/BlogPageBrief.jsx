import React from 'react';
import { SubHeading } from '../../components';
import { data } from '../../constants';
import { BlogBrief } from '../../components';
import './BlogPage.css';



const BlogPageBrief = () => {
    return (
        <div className="app__blogpage-wrapper">
            <div className="app__blogpage section__padding" id='blogs'>

                <div className="app__blogpage-title">
                    <SubHeading title="Explore Our Blogs" />
                    <h1 className="headtext__cormorant">Gerícht Updates</h1>
                </div>

                <div className="app__blogpage-blogs">
                    {
                        data.blogs.map( (blogData, index) => {
                            if (blogData.render === 'true')
                                {
                                    return <BlogBrief key={"Blog" + index + 1} idx={index} blogDetails={blogData} />
                                }
                        } )
                    }
                </div>

            </div>
        </div>
    );
};

export default BlogPageBrief;