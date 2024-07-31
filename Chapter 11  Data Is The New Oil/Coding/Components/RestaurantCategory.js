import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 bg-slate-100 shadow-lg rounded-sm p-4 mx-auto my-4  font-serif">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span> 🔽 </span>
        </div>

        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategory;
