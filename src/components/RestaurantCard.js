import { useContext } from "react";
import { CDN_URL } from "../utils/constant.js";
import UserContext from "../utils/UserContext.js";

export default ({ resData = {} }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData;
  const {user} = useContext(UserContext)
  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] bg-gray-100 rounded-lg">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
      ></img>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
      <h4>user : {user}</h4>
    </div>
  );
};

// HIGHER ORDER FUNCTION
export const withPromotedLabel = (RestaurantCard)=>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white rounded-lg m-1 p-1">promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
} 
