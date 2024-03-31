import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body = () => {
  const listOfRestaurants = [
    {
      type: "restaurant",
      data: {
        id: "74453",
        name: "Domino's Pizza",
        cloudinaryImageId: "bz9zkh2aqywjhpankb07",
        cuisines: ["Pizzas"],
        costForTwo: 40000,
        deliveryTime: 45,
        avgRating: "3.8",
      },
    },
  ];
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
