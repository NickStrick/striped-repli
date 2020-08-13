import React from 'react';
import './Recentposts.css';

function Recentposts() {

    const links = [
        {link: 'google.com', title:'Google at it again'},
        {link: 'google.com', title:'Lorem ipsum dolor'},
        {link: 'google.com', title:'Sed dolore magna'},
        {link: 'google.com', title:'Malesuada commodo'},
        {link: 'google.com', title:'Ipsum metus nullam'}
    ]

    return (
        <>
        <h2 className={'rposts-head'}>Recent Posts</h2>
        <div className={'rposts-links'}>
            {links.map((post) => {
                return(
                <a  className='rpost' href={post.link}>{post.title}</a>
                    
                )
            })
            }
        </div>

        </>
        
    );
}


export default Recentposts;