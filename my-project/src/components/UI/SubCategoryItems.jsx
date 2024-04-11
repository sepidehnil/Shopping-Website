import { useState, useRef, useEffect } from "react";
import { categoryNames } from "../data/CategoryName";
import "../../assets/styles/subcategories.css";

export default function SubCategoryItems() {
  const containerRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMouseWheel = (e) => {
    const container = containerRef.current;
    container.scrollLeft += e.deltaY;
  };

  const handleClick = (index) => {
    setSelectedCategory(index);
  };

  useEffect(() => {
    const container = containerRef.current;
    container.scrollLeft = 0;
  }, []);

  return (
    <div
      className="subcategory-container"
      style={{ overflowX: "auto", scrollbarWidth: "none" }}
      onWheel={handleMouseWheel}
      ref={containerRef}
    >
      {categoryNames.map((item, index) => (
        <div
          key={item.id}
          className={`subcategory ${
            selectedCategory === index
              ? "bg-[#2080eb] transition-all ease-in-out duration-500"
              : ""
          }`}
          onClick={() => handleClick(index)}
        >
          <span dangerouslySetInnerHTML={{ __html: item.svg }} />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}
