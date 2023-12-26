import { CDN_URL } from "../utils/constant.js";

export default ({ resData = {} }) => {
  const { name, cuisines, avgRating, costForTwo, sla } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};
