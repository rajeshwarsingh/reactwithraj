import React from "react";
import ReactDOM from "react-dom/client";

/**
 * app
 * header
 * - logo
 * - nav
 * body
 * - Search
 * - RestorantContainer
 * - RestorantCard
 *  -Img
 *  - Name of res, star rating, cusine, delivery time
 * footer
 * - link
 * - copyright
 * - address
 * **/

const resData = [
  {
    info: {
      id: "63801",
      name: "St. Anthony Bakery",
      cloudinaryImageId: "behixk8e8wpspzq0y9em",
      locality: "Kolbad",
      areaName: "Thane",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts"],
      avgRating: 3.9,
      parentId: "399428",
      avgRatingString: "3.9",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10133378~p=1~eid=0000018c-a219-c28d-0cd9-cce400ac0137~srvts=1703526646413~45995",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "15% OFF",
        subHeader: "UPTO ₹45",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=63801",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "768467",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "f44bc9708c514cd2dd6ae0d8b4677214",
      locality: "GAUTAM PARK",
      areaName: "PANCHPAKHADI",
      costForTwo: "₹800 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 3.8,
      veg: true,
      parentId: "4961",
      avgRatingString: "3.8",
      totalRatingsString: "20+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=768467",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "23746",
      name: "McDonald's",
      cloudinaryImageId: "bb7ae131544c7d37e10fc5faf76f09d6",
      locality: "R Mall",
      areaName: "Mulund West",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=23746",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "391326",
      name: "Bhoir Hotel",
      cloudinaryImageId: "ud0lkoslklju9gx5jvfe",
      locality: "Naupada",
      areaName: "Thane West",
      costForTwo: "₹400 for two",
      cuisines: [
        "North Indian",
        "Indian",
        "Tandoor",
        "Chinese",
        "Maharashtrian",
      ],
      avgRating: 4.3,
      parentId: "44877",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 13,
        lastMileTravel: 1.5,
        serviceability: "SERVICEABLE",
        slaString: "13 mins",
        lastMileTravelString: "1.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=391326",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "628869",
      name: "Starbucks Coffee",
      cloudinaryImageId: "258fe8a3577877fbfe064095ed1d9dc3",
      locality: "Willows Twin Tower CHS",
      areaName: "Cypress",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4.7,
      parentId: "195515",
      avgRatingString: "4.7",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=9953356~p=2~eid=0000018c-a219-c28d-0cd9-cce500ac0226~srvts=1703526646413~45995",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:30:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹900",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=628869",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "578579",
      name: "Bakingo-Cakes & Desserts",
      cloudinaryImageId: "0c53fd8f62e3d25ba56d1b4cfe572cef",
      locality: "Vandana Cinema",
      areaName: "Thane",
      costForTwo: "₹299 for two",
      cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
      avgRating: 4.5,
      parentId: "3818",
      avgRatingString: "4.5",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2.2,
        serviceability: "SERVICEABLE",
        slaString: "16 mins",
        lastMileTravelString: "2.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-26 00:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=578579",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "19872",
      name: "Kirti Mahal",
      cloudinaryImageId: "crjtegnov5ahlz20kdj0",
      locality: "Mulund",
      areaName: "Mumbai",
      costForTwo: "₹550 for two",
      cuisines: [
        "Street Food",
        "North Indian",
        "Chinese",
        "Beverages",
        "South Indian",
      ],
      avgRating: 4.4,
      veg: true,
      parentId: "118812",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:50:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=19872",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "26842",
      name: "Vaibhav Chinese Centre",
      cloudinaryImageId: "ocowgzrolqwgcukqcnfk",
      locality: "Panch Pakhadi",
      areaName: "Thane Panchpakhadi",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Oriental", "Beverages", "Pan-Asian"],
      avgRating: 4.1,
      parentId: "260010",
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.2,
        serviceability: "SERVICEABLE",
        slaString: "20 mins",
        lastMileTravelString: "1.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=26842",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "43308",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "LB Marg",
      areaName: "Thane Panchpakhadi",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.2,
      parentId: "61955",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      promoted: true,
      adTrackingId:
        "cid=9848032~p=3~eid=0000018c-a219-c28d-0cd9-cce600ac0325~srvts=1703526646413~45995",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "18 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-26 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=43308",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "390175",
      name: "NH1 Bowls - Highway To North",
      cloudinaryImageId: "94654fdf308764cd0faf83dba35bcdc3",
      locality: "Vartak Nagar",
      areaName: "Thane West",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Punjabi", "Home Food"],
      avgRating: 4.6,
      parentId: "22452",
      avgRatingString: "4.6",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 14,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "9-19 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-26 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  iconId: "guiltfree/GF_Logo_android_3x",
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: { header: "ITEMS", subHeader: "AT ₹169" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=390175",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "622138",
      name: "MOJO Pizza - 2X Toppings",
      cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
      locality: "Vartak Nagar",
      areaName: "Thane Panchpakhadi",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
      avgRating: 4.5,
      parentId: "11329",
      avgRatingString: "4.5",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "14-24 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-26 02:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  shortDescription: "options available",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                },
              },
            ],
          },
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=622138",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "552799",
      name: "Baba Falooda",
      cloudinaryImageId: "n6zuw0yomrlwyt9k4bkm",
      locality: "Dr Moose Road",
      areaName: "Thane Panchpakhadi",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.6,
      veg: true,
      parentId: "21668",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "17 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  description: "pureveg",
                },
              },
            ],
          },
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "FREE ITEM" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=552799",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "236606",
      name: "Mad Over Donuts",
      cloudinaryImageId: "524b746adaa25814f5d4f16745cbbc6b",
      locality: "M.G.Road",
      areaName: "Mulund West",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "611",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=9849683~p=4~eid=0000018c-a219-c28d-0cd9-cce700ac0469~srvts=1703526646413~45995",
      sla: {
        deliveryTime: 15,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "15 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=236606",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
  {
    info: {
      id: "56051",
      name: "Nav Gomantak",
      cloudinaryImageId: "216c8f9b7023dfe5e788222b4c566c26",
      locality: "Panch Pakhadi",
      areaName: "Panch Pakhadi",
      costForTwo: "₹550 for two",
      cuisines: ["Indian", "Goan", "Biryani", "Desserts"],
      avgRating: 4.3,
      parentId: "144743",
      avgRatingString: "4.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.7,
        serviceability: "SERVICEABLE",
        slaString: "19 mins",
        lastMileTravelString: "1.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-12-25 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "swiggy://menu?restaurant_id=56051",
      text: "RESTAURANT_MENU",
      type: "DEEPLINK",
    },
  },
];

const RestorantCard = ({ resData = {} }) => {
  
  const { name, cuisines, avgRating, costForTwo, sla } = resData;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${resData.cloudinaryImageId}`}
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join()}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"> search</div>
      <div className="res-container">
        {resData.map((resItem, i) => (
          <RestorantCard key={resItem.info.id} resData={resItem.info} />
        ))}
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/good-food-logo-template_79169-17.jpg?w=360"
        ></img>
      </div>
      <div className="nav-item">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
const AppLayout = () => (
  <div className="app">
    <Header />
    <Body />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
