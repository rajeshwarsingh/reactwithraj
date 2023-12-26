import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

export default () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=19.1939811&lng=72.9571294"
    );
    const json = await data.json();
    const restData =
      json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants?.map(
        (res) => res.info
      );
    // OPTIONAL CHAINING
    setListOfRestaurant(restData);
    setFilterRestaurant(restData);
  };

  // console.log(searchRes, listOfRestaurants);
  console.log("rendered called");
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
          <RestaurantCard key={resItem.id} resData={resItem} />
        ))}
      </div>
    </div>
  );
};
