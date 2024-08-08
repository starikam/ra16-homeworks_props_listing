import { etsy } from "./interface";
import { FC } from 'react'

interface ListingProps {
    items: etsy[]
}

const Listing:FC<ListingProps> = ({ items }) => {
    return (
        <div className="item-list">
            {items.map((item) => {
                if (!item.MainImage) return null;
                const { listing_id, url, MainImage, title, currency_code, price, quantity} = item;
                const imgSrc = MainImage.url_570xN;
                const currentTitle = title.length < 50 ? title + '...' : title.slice(0, 50) + '...';
                let currentCurrency = currency_code + ' ';
                if (currency_code === 'USD') {
                    currentCurrency = '$'
                } else if (currency_code === 'EUR') {
                    currentCurrency = '€'
                };
                let quantityClass = 'item-quantity level-medium';
                if (quantity <= 10) {
                    quantityClass = 'item-quantity level-low'
                } else if (quantity > 20) {
                    quantityClass = 'item-quantity level-high'
                };

                return (
                    <div className="item" key={listing_id}>
                        <div className="item-image">
                            <a href={url}>
                                <img src={imgSrc} alt={title} />
                            </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">{currentTitle}</p>
                            <p className="item-price">{currentCurrency}{price}</p>
                            <p className={quantityClass}>{quantity} left</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
}

export default Listing;