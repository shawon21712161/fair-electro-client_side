import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Brands = () => {
  const [brands, setbrands] = useState([]);
  useEffect(() => {
    fetch("./Brands.json")
      .then((res) => res.json())
      .then((data) => setbrands(data));
  }, []);

  return (
    <div className="my-5 ">
      <h2 className=" py-5 my-5 text-4xl text-center font-bold bg-blue-gray-50">
        Our Brand
      </h2>

      <div className="grid my-10 lg:grid-cols-3 md:grid-cols-2">
        {brands.map((brand) => (
          <div key={brand._id}>
            <Link to={`products/${brand.brand}`}>
            <div className="bg-gray-300 rounded  p-2 m-2">
              <img className="h-[250px]" src={brand.photo} alt="" />
              <h4 className="text-2xl font-semibold text-center">
                {brand.brand}
              </h4>
            </div></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
