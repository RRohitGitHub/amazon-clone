import React from 'react'
import './BasketItem.css'

function BasketItem({title}) {
    return (
        <div className="basketItem">
            <div>
            <img className="basketItem__image" src="https://m.media-amazon.com/images/I/51qjaiKKdFS.jpg" alt=""/>
            </div>
            <div className="basketItem__info">
                <p>{title}</p>
                <p className="basketItem__price">
                    <small>$</small>
                    <strong>price</strong>
                </p>
                <div className="basketItem__rating">
                    <p>⭐⭐⭐</p>
                </div>
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default BasketItem
