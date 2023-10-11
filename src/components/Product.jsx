/* eslint-disable jsx-a11y/anchor-has-content */
import { Button } from "react-bootstrap";
import products from "../product";
import Rating from "./Rating";

const Product = ({ product }) => {
  return (
    <div>
      <div className="card mb-10">
        <div className="card-body">
          <div className="card-image-actions">
            <img
              src={product.image}
              alt=""
              className="card-img img-fluid"
              width={90}
              height={350}
            />
          </div>
        </div>
        <div className="card-body bg-light text-center">
          <div className="mb-2">
            <h6>
              <a href={`/product/${product._id}`} className="product-title">
                {product.name}
              </a>
            </h6>
            <span className="product-category">{product.category} </span>
          </div>
          <div>
            <Rating value={product.rating} color={`#ffdf00`}></Rating>
          </div>
          <div className="text-muted mb-3">{product.numReviews}</div>
          <h3 className="mb-10">$ {product.price} </h3>
          <Button variant="warning">
            <i className="fa-sharp fa-solid fa-cart-shopping mx-1"></i>Add to
            card{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
