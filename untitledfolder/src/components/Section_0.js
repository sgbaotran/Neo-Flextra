import React from 'react';

function Section_0() {
    return (
        <>
            <section id="sec-0">
                <header className="top">
                    <div className="container">
                        <p>+613-883-9072</p>
                        <p>Flextra@rogers.com</p>
                        <p>Mon-Fri 9:00-17:00</p>
                    </div>
                </header>
                <header>
                    <div className="hide" id="searchBar">
                        <input
                            type="search"
                            name="searchBox"
                            id="searchBox"
                            placeholder="Type your search here..    Press [Esc] to exist"
                        />
                    </div>
                    <div className="container">
                        <h1>
                            <span>Flex</span>Tra
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </h1>
                        <label htmlFor="menu"><i className="fas fa-bars"></i></label>
                        <input type="checkbox" id="menu" />
                        <nav>
                            <a href="#">Home</a>
                            <a href="#">Page</a>
                            <a href="#">Blog</a>
                            <a href="#">Portofolio</a>
                            <a href="#">Components</a>
                            <a href="#">Contact</a>
                            <i className="fa-solid fa-magnifying-glass" id="search"></i>
                        </nav>
                    </div>
                </header>
                <article>
                    <div className="container">
                        <h2>
                            Electronics services<br />
                            <span>Wired For Your Success</span>
                        </h2>
                        <p>We provide top-quality cable harnesses for industrial and commercial systems, tailored to meet each client's unique needs for optimal performance and reliability.</p>
                        <a href="#">Show More</a>
                        <a href="#">view project</a>
                    </div>
                </article>
            </section>
        </>
    );
}

export default Section_0;
