const RestaurantCard = (props) => {
    const { resData } = props;
    console.log("working");
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
             +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}Stars</h4>
        <h4>₹{costForTwo / 100} For two</h4>
        <h4>{deliveryTime}minutes</h4>
      </div>
    );
  };
  export default RestaurantCard;