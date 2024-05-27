import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const brand = e.target.brand.value;
    const rating = e.target.rating.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const newProduct = {
      name,
      price,
      brand,
      rating,
      category,
      details,
      photo,
    };
    console.log(newProduct);

    // send data to the server

    fetch("https://fair-electronics-server-8zcvlzy6a.vercel.app//products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div>
      <div>
        <div className="bg-[#ffffff] p-16">
          <h2 className="text-center text-3xl mb-4 font-bold">Add Product</h2>
          <form onSubmit={handleAddProduct} className="card-body">
            {/* form name and quantity row */}
            <div className="md:flex gap-10 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold ">Product Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
            </div>
            {/* form Suplier and Taste row */}
            <div className="md:flex gap-10 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Brand</span>
                </label>
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Rating</span>
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="Rating"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
            </div>
            {/* form Category and Details row */}
            <div className="md:flex gap-10 mb-8">
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
              <div className="form-control md:w-1/2">
                <label className="label">
                  <span className="label-text font-bold">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
            </div>
            {/* formn photo url row */}
            <div className="md:flex gap-10 mb-8">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text font-bold">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url"
                  className="input input-bordered input-info  w-full my-2 p-2 rounded-lg"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn w-full bg-[#3f5c9b] font-bold my-2 p-3 rounded-md text-white hover:text-black">
                Add Your Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
