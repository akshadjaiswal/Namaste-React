import React from "react";
import ReactDOM from "react-dom/client";
//Planning
/**
 * 1) Header
 *  - Log
 *  - Nav Items
 * 2)Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *        - Img
 *        - Name of Res, Star Ratings, Cuisine, etc
 * 3)Footer
 *  - Copyrights
 *  - Link
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/34/0c/6a/340c6add7519212185a08d4205eb1965.png"
        />
        <h3>FoodieMint</h3>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "antiquewhite",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://content.jdmagicbox.com/comp/def_content/kathiyawadi-restaurants/1-kathiyawadi-restaurants-1-ki1aq.jpg"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines.join(", ")}</h4>
      <h4>{resData.data.avgRating}Stars</h4>
      <h4>₹{resData.data.costForTwo / 100} For two</h4>
      <h4>{resData.data.deliveryTime}minutes</h4>
    </div>
  );
};

const resObj = {
  name: "Aaradhana Foods",
  cuisines: ["Kathiawadi Thali", "Traditional", "Sweet", "Spicy"],
  avgRating: "4.6",
  costForTwo: 40000,
  deliveryTime: 125,
};

const resObj1=  {
  type: "restaurant",
  data: {
    type: "F",
    id: "74453",
    name: "Domino's Pizza",
    uuid: "87727dbd-7f2b-4857-9763-359624165845",
    city: "21",
    area: "Athwa",
    totalRatingsString: "1000+ ratings",
    cloudinaryImageId: "bz9zkh2aqywjhpankb07",
    cuisines: ["Pizzas"],
    tags: [],
    costForTwo: 40000,
    costForTwoString: "₹400 FOR TWO",
    deliveryTime: 45,
    minDeliveryTime: 45,
    maxDeliveryTime: 45,
    slaString: "45 MINS",
    lastMileTravel: 0,
    slugs: {
      restaurant: "dominos-pizza-majura-nondh-test_surat",
      city: "surat",
    },
    cityState: "21",
    address:
      "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
    locality: "Bhatar Road",
    parentId: 2456,
    unserviceable: false,
    veg: true,
    select: false,
    favorite: false,
    tradeCampaignHeaders: [],
    aggregatedDiscountInfo: {
      header: "FREE DELIVERY",
      shortDescriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    aggregatedDiscountInfoV2: {
      header: "",
      shortDescriptionList: [
        {
          meta: "Free Delivery",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      descriptionList: [
        {
          meta: "FREE DELIVERY",
          discountType: "FREE_DELIVERY",
          operationType: "RESTAURANT",
        },
      ],
      subHeader: "",
      headerType: 0,
      superFreedel: "",
    },
    chain: [],
    feeDetails: {
      fees: [],
      totalFees: 0,
      message: "",
      title: "",
      amount: "",
      icon: "",
    },
    availability: {
      opened: true,
      nextOpenMessage: "",
      nextCloseMessage: "",
    },
    longDistanceEnabled: 0,
    rainMode: "NONE",
    thirdPartyAddress: false,
    thirdPartyVendor: "",
    adTrackingID: "",
    badges: {
      imageBased: [],
      textBased: [],
      textExtendedBadges: [],
    },
    lastMileTravelString: "2.1 kms",
    hasSurge: false,
    sla: {
      restaurantId: "74453",
      deliveryTime: 45,
      minDeliveryTime: 45,
      maxDeliveryTime: 45,
      lastMileTravel: 0,
      lastMileDistance: 0,
      serviceability: "SERVICEABLE",
      rainMode: "NONE",
      longDistance: "NOT_LONG_DISTANCE",
      preferentialService: false,
      iconType: "EMPTY",
    },
    promoted: false,
    avgRating: "4.0",
    totalRatings: 1000,
    new: false,
  },
  subtype: "basic",
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resObj1} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
