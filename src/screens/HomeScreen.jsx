import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../components/Product.jsx";
import products from "../product.js";

const HomeScreen = () => {
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col xl={3} lg={4} md={6} sm={12} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
