import { FaShoppingCart } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsCard = ({ product }) => {
  const { _id, name, photo, details, price } = product || {};
  // console.log(product);
  const handleAddToCart = (_id) => {
    const cartProduct = {
      name,
      photo,
      price,
    };
    console.log(cartProduct);
    fetch("https://fair-electronics-server-8zcvlzy6a.vercel.app//cartItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added To The Cart",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-full h-[350px]" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{details.slice(0, 150)}</p>
          <h4 className="font-semibold">Price: $ {price}</h4>
          <div className="card-actions ">
            <button
              onClick={() => handleAddToCart(_id)}
              className="btn btn-sm hover:font-extrabold bg-blue-50 "
            >
              <FaShoppingCart /> Add To Cart
            </button>
            <Link to={`/productDetails/${_id}`}>
              <button className="btn btn-sm bg-blue-50 ">
                <CgDetailsMore /> Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
