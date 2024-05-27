import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const productDetails = useLoaderData();
  console.log(productDetails);
  const { name, photo, price, brand, rating, details } = productDetails;
  return (
    <div className="m-10 p-5 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Album"
          className="text-center justify-center items-center w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-2xl text-center font-bold">{name}</h2>
        <h5 className=" text-lg font-bold">Price : {price} $ </h5>
        <p> Brand : {brand}</p>
        <p>rating : {rating}</p>
        <p>Details : {details}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
