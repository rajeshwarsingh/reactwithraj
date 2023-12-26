import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData";
import { useEffect, useState } from "react";

export default () => {
  const [listOfRestaurants, setListOfRestaurant] = useState(resData);
  console.log(listOfRestaurants);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurants.filter((restaurant) => restaurant.avgRating > 4)
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((resItem, i) => (
          <RestaurantCard key={resItem.id} resData={resItem} />
        ))}
      </div>
    </div>
  );
};
