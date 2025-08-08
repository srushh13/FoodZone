import MenuItem from "./MenuItem";

const Category = ({ title, collection }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 my-8 ">
      <h2 className="text-xl sm:text-xl font-bold text-gray-800 mb-4 sm:mb-6">
        {title}
      </h2>

      <div className="space-y-6">
        {collection.map((dish, index) => (
          <MenuItem key={index} 
          {...dish?.card?.info}
           />
        ))}
      </div>
    </div>
  );
};

export default Category;
