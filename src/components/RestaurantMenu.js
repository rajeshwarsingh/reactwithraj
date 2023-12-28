import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useReastaurantMenu from "../utils/useReastaurant";
import RestaurentCategory from "./RestaurentCategory";

export default () => {
  const { resId } = useParams();
  const restInfo = useReastaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } = restInfo[2]?.card?.card?.info;

  const categories =
    restInfo[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cardItem) =>
        cardItem?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log("category:", categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join()} , {costForTwoMessage}
      </p>
      {/* categories accordian */}
      {categories.map((category, i) => (
        <RestaurentCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={i === showIndex}
          setShowIndex={() => setShowIndex(i)}
        />
      ))}
    </div>
  );
};
