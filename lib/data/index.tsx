import {
  aboutUsPath,
  blogPath,
  ourFarmPath,
  productsPath,
} from "@/utils/paths";
import {
  LucideCarrot,
  LucideFlower2,
  LucideRabbit,
  LucideUsers,
} from "lucide-react";

export const NAVLINKS = [
  {
    label: "About Us",
    path: aboutUsPath,
  },
  {
    label: "Our Farm",
    path: ourFarmPath,
  },
  {
    label: "Blog",
    path: blogPath,
  },
  {
    label: "Products",
    path: productsPath,
  },
];

export const cardData = [
  {
    icon: <LucideCarrot />,
    stat: "450+",
    description: "Different fruits & vegetables  for every season",
  },
  {
    icon: <LucideRabbit />,
    stat: "23+",
    description: "Variations of animals that roam free on the farm",
  },
  {
    icon: <LucideFlower2 />,
    stat: "10",
    description: "Hectare of land where we grow our organic products on",
  },
  {
    icon: <LucideUsers />,
    stat: "6000+",
    description: "Customers that visit our farm and buy our products",
  },
];

export const productCategoryList = [
  {
    label: "Fruits",
    path: "category/fruits",
    image: {
      src: "/images/ui/apples.jpg",
      alt: "Fruits",
    },
    description: "Organic juicy fruits you've never tasted before",
  },
  {
    label: "Vegetables",
    path: "category/vegetables",
    image: {
      src: "/images/ui/onions.jpg",
      alt: "Vegetables",
    },
    description: "Organic vegetables full of vitamins & healthy fibres",
  },
  {
    label: "Gathering",
    path: "category/gathering",
    image: {
      src: "/images/ui/chickens.jpg",
      alt: "Gathering",
    },
    description: "Variation of animals that roam free on the farm",
  },
];
