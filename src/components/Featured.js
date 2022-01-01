/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import Title from "antd/lib/typography/Title";

import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

function Featured({ products }) {
  return (
    <div className="featured" css={styles} id="featured">
      <Title level={1}>Featured Products</Title>
      <div className="product-list">
        {products.slice(0, 10).map((product) => {
          return (
            <Link to={`/product/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const styles = css`
  padding: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  .product-list {
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2%;
  }
  @media (max-width: 768px) {
  }
`;

export default Featured;
