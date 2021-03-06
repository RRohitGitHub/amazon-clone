import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://m.media-amazon.com/images/I/61+iLGdlMuL._SX1500_.jpg" alt="" />

                <div className="home__row">
                    {/* Product */}
                    <Product  id={1} title="Samsung 6.0 Kg Inverter 5 Star Fully-Automatic Front Loading Washing Machine (WW60R20GLMA/TL, White, Hygiene Steam)"
                        image="https://m.media-amazon.com/images/I/413g0vWU0QL.jpg"
                        price={300}
                        rating={4}
                    />
                    {/* Product */}
                    <Product id={2} title="New Apple iPhone 12 (64GB) - Blue"
                        image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SX569_.jpg"
                        price={800}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product id={3}  title="Boy's Sf Drift Cat 5 Ultra Jr Sneakers "
                        image="https://images-na.ssl-images-amazon.com/images/I/71s0%2BHg5aXL._UL1500_.jpg"    
                        price={20}
                        rating={3}
                    />
                    {/* Product */}
                    <Product id={4}  title="Green Soul Newyork High-Back Mesh Office Executive Ergonomic Chair with Adjustable Arms and Tilt Lock (Black)"
                        image="https://m.media-amazon.com/images/I/51qjaiKKdFS.jpg"
                        price={200}
                        rating={3}
                    />
                    {/* Product */}
                    <Product id={5} title="Davidoff Café Instant Coffee Jar g, Rich Aroma, 100 gram" 
                        image="https://m.media-amazon.com/images/I/418N4gj7-+S.jpg"
                        price={20}
                        rating={4}
                    />
                </div>

                <div className="home__row">
                    {/* Product */}
                    <Product id={6} title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
                        image="https://images-na.ssl-images-amazon.com/images/I/71MlcO29QOL._SL1500_.jpg"
                        price={1500}
                        rating={4}
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home
