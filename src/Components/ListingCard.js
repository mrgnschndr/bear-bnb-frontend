import React from "react";
import StarIcon from "@mui/icons-material/Star";
import "./ListingCard.css";

export default function ListingCard({
  title,
  city,
  state,
  price,
  mainImageURL,
  rating,
}) {
  const roundPrice = price.split(".")[0];

  return (
    <div className="listing-card">
      <div className="listing-card__image-container">
        <img 
          className="listing-card__image" 
          src={mainImageURL} 
          alt={title} 
        />
      </div>
      
      <div className="listing-card__content">
        <div className="listing-card__header">
          <div className="listing-card__location">
            {city}, {state}
          </div>
          <div className="listing-card__rating">
            <StarIcon className="listing-card__rating-icon" />
            <span>{rating}</span>
          </div>
        </div>

        <div className="listing-card__info">
          {Math.floor(Math.random() * 101)} miles away
        </div>
        <div className="listing-card__info">
          Jan 26 – 31
        </div>

        <div className="listing-card__price">
          <span className="listing-card__price-amount">{roundPrice}</span>
          <span className="listing-card__price-text"> night</span>
        </div>
      </div>
    </div>
  );
}