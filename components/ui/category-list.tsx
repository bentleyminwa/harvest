import { productCategoryList } from "@/lib/data";
import CategoryCard from "./category-card";

export default function CategoryList() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-3 gap-5">
      {productCategoryList.map((category, index) => (
        <CategoryCard
          key={index}
          label={category.label}
          path={category.path}
          image={category.image}
          description={category.description}
        />
      ))}
    </div>
  );
}
