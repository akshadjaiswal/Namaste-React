const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ul>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className="p-2 m-2 border-gray-200 border-b-2"
          >
            <div>
              <span className="font-semibold">{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default ItemList;
