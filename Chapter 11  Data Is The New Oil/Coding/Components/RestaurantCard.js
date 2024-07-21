import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#D3D3D3",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log("working");
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] h-[400px] rounded-lg font-serif bg-gray-200 hover:bg-slate-300">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};
export default RestaurantCard;
