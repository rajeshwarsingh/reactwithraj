import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useReastaurantMenu from "../utils/useReastaurant";
import RestaurentCategory from './RestaurentCategory'

export default () => {
  const { resId } = useParams();
  const restInfo = useReastaurantMenu(resId);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo[2]?.card?.card?.info;

  const itemCards =
    restInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3].card.card
      .itemCards;
  
  const categories = restInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((cardItem=>cardItem?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"))
  console.log('category:',categories)

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join()} , {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category,i)=><RestaurentCategory key={i} data={category.card.card}/>)}


      {/* <h2>Menu</h2> */}
      {/* <ul>
        {(itemCards || []).map((menuItem, i) => (
          <li key={i}>
            {menuItem?.card?.info?.name} - Rs {menuItem?.card?.info?.price}
          </li>
        ))}
      </ul> */}
    </div>
  );
};
