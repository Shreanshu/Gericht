import React from 'react';
import { images } from '../../constants';
import { FaCalendar } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import './Blog.css';



const Blog = ( {idx, blogDetails} ) => {
    const posts = [images.BlogPost01, images.BlogPost02, images.BlogPost03, images.BlogPost04, images.BlogPost05, images.BlogPost06,
                   images.BlogPost07, images.BlogPost08, images.BlogPost09, images.BlogPost10, images.BlogPost11, images.BlogPost12];

    return (
        <div className="app__blogcard">

            <div className="app__blogcard-img">
                <img src={posts[idx]} alt={"Blog Post Image" + idx} />
            </div>

            <div className="app__blogcard-content">

                <div className="app__blogcard-content_blogdetails">
                    <div className="app__blogcard-content_blogdetails-date">
                        <FaCalendar color='white' />
                        <p className="p__opensans">{blogDetails.date}</p>
                    </div>
                    <div className="app__blogcard-content_blogdetails-author">
                        <BsPersonFill color='white' />
                        <p className="p__opensans author">{blogDetails.author}</p>
                    </div>
                </div>

                <p className="p__cormorant blogtitle">{blogDetails.title}</p>

                <p className="p__opensans">{blogDetails.description}</p>

                <button type='button' className='small__button'><a>Read More</a></button>

            </div>

        </div>
    );
};

export default Blog;