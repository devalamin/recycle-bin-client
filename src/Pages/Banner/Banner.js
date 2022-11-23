import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cmVjeWNsZSUyMGJpbnxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60")` }}>
                <div className="hero-overlay  sm:py-72 bg-opacity-80"></div>
                <div className="hero-content text-start text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 sm:text-2xl font-bold">The Place You Can Find Your Necessary Items with The Reasonable Price</h1>
                        <p className="mb-5">With the improvement of people's living standards, replacing the older generations of products by new ones has become more and more common. So a lot of used goods become available for others to purchase.Those that are being purchased by or otherwise transferred to a second or later end user are called second-hand goods or used goods and the numerous used goods form a big market, the second-hand market.</p>
                        <button className="btn border-0 bg-cyan-700 btn-wide">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;