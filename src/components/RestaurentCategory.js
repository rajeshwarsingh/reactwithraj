import { useState } from "react";
import ItemListMenu from "./ItemListMenu";
const RestaurentCategory = ({ data }) => {
  const [showItem, setShowItem] = useState(false);

  const handleClick = ()=>{
    setShowItem(showItem?false:true)
  } 
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-lg">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItem?"⬆️":"⬇️"}</span>
      </div>
      <div>
      { showItem && <ItemListMenu items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentCategory;
