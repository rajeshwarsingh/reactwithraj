import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddMenu = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => {
        return (
          <div data-testid="foodItems" className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
            <div className="w-9/12">
              <div className="py-2">
                <span>{item.card.info.name}</span>
                <span>-₹{item.card.info.price / 100}</span>
              </div>

              <p className="text-sm">{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 ">
              <div className="absolute">
                <button
                  onClick={() => handleAddMenu(item)}
                  className="p-2 mx-16 rounded-lg bg-black text-white  shadow-lg"
                >
                  ADD+
                </button>
              </div>
              <img
                className="w-full rounded-lg"
                src={`${CDN_URL}${item?.card?.info?.imageId}`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
