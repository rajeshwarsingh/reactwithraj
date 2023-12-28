import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import { REST_URL } from "../utils/constant.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import UserContext from "../utils/UserContext.js";
export default () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurant] = useState([]);
  const [searchRes, setSearchRes] = useState("");

  const {setUserName, user} = useContext(UserContext)

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

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  if (!useOnlineStatus()) {
    return <h1>Opss! You are offline. Please fix your internet.</h1>;
  }

  // CONDITIONAL RENDERING
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            value={searchRes}
            onChange={(e) => setSearchRes(e.target.value)}
            type="text"
            className="border border-solid border-black"
          />
          <button
            className="px-4 py-1 bg-green-200 m-4 rounded-lg"
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
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-gray-400 m-4 rounded-lg"
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

        <div className="m-4 p-4 flex items-center">
          <label>User Name :</label>
          <input className="border border-black p-2" value={user} onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRestaurants?.map((resItem, i) => (
          <Link key={resItem?.id} to={`/restaurants/${resItem?.id}`}>
            {resItem?.promoted ? (
              <PromotedRestaurantCard resData={resItem} />
            ) : (
              <RestaurantCard resData={resItem} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
