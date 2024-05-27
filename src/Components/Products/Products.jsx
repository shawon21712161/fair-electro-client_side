import { useLoaderData } from "react-router-dom";
import ProductsCard from "../ProductsCard/ProductsCard";

const Products = () => {
    const products = useLoaderData()

    // console.log(products);
    return (
        <div>
           {
            products?.length >0?  <div className="grid m-10 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                products.map(product => <ProductsCard key={product._id} product={product}></ProductsCard>)
            }
        </div> : <h2 className="text-4xl text-center my-20">There have no product</h2>
           }
        </div>
    );
};

export default Products;