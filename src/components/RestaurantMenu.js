import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useReastaurantMenu from "../utils/useReastaurant";

export default () => {
  const { resId } = useParams();
  const restInfo = useReastaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo[2]?.card?.card?.info;

  const itemCards =
    restInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card
      .itemCards;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join()} , {costForTwoMessage}
      </h3>
      <h2>Menu</h2>
      <ul>
        {(itemCards || []).map((menuItem, i) => (
          <li key={i}>
            {menuItem?.card?.info?.name} - Rs {menuItem?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
