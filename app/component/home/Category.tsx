import React from "react";

const Category = () => {
  const categoryList = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
    {
      id: 4,
      title: "Category 4",
    },
    {
      id: 5,
      title: "Category 5",
    },
    {
      id: 6,
      title: "Category 6",
    },
    {
      id: 7,
      title: "Category 7",
    },
    {
      id: 8,
      title: "Category 8",
    },
  ];
  return (
    <div className="flex items-center px-3 md:px-10 justify-center  gap-3 md:gap-10 my-5 md:my-10 overflow-x-auto  ">
      {categoryList.map((item) => {
        return (
          <div
            className="flex flex-1 items-center justify-center cursor-pointer border text-slate-600 px-4 py-2 text-center rounded-full min-w-[120px] "
            key={item.id}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
