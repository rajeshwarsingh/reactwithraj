import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { REST_URL } from "../utils/constant.js";

export default () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(REST_URL);
    const json = await data.json();
    const restData =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      );
    // OPTIONAL CHAINING
    setListOfRestaurant(restData);
    setFilterRestaurant(restData);
  };

  // CONDITIONAL RENDERING
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            value={searchRes}
            onChange={(e) => setSearchRes(e.target.value)}
            type="text"
            className="search-box"
          />
          <button
            onClick={() => {
              searchRes
                ? setFilterRestaurant(
                    listOfRestaurants.filter((res) =>
                      res.name.toLowerCase().includes(searchRes.toLowerCase())
                    )
                  )
                : fetchData();
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurant(
              listOfRestaurants.filter(
                (restaurant) => restaurant.avgRating > 4.5
              )
            );
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((resItem, i) => (
          <Link to={`/restaurants/${resItem.id}`}>
            <RestaurantCard key={resItem.id} resData={resItem} />
          </Link>
        ))}
      </div>
    </div>
  );
};
