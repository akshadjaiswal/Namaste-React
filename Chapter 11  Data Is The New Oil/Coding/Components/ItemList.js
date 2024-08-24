import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
          >
            <div className="w-9/12">
              <div className="py-3">
                <span className="text-lg font-bold">{item.card.info.name}</span>
                <span>
                  {" "}
                  - ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </span>
              </div>
              <p className="text-[15px]">{item.card.info.description}</p>
            </div>
            <div className="w-4/12 p-2 ">
              <div className=" absolute">
                <button className="p-2 shadow-lg bg-white mx-16 rounded-lg">
                  Add +
                </button>
              </div>
              <img
                className="rounded-md"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
