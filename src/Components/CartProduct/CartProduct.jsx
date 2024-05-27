import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const CartProduct = ({ cartItem,cartItems,setCartItems }) => {
//   console.log(cartItem);
  const {_id,name,photo,price} = cartItem || {};

//   const handleDelete=(_id)=>{
//     console.log(_id);
//   }

const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://fair-electronics-server-8zcvlzy6a.vercel.app//cartItems/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = cartItems.filter(cart => cart._id !== _id)
              setCartItems(remaining)
            }
          });
      }
    });
  };
  return (
    <div >
      <div className="card my-10 bg-base-100 drop-shadow-2xl">
        <figure>
          <img
            src={photo}
            alt={name}
            className="h-[250px] w-[250px]"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Price : {price}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-outline hover:btn-error"><MdOutlineDeleteForever></MdOutlineDeleteForever>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
