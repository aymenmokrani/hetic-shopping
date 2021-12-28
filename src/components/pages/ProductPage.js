/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button, InputNumber } from "antd";
import Text from "antd/lib/typography/Text";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { addToCart } from "../../redux/actions/shoppingActions";
import images from "../../utils/images";

function ProductPage({ products }) {
  const { id } = useParams();
  const product = products[id];
  const [total, setTotal] = useState(product.reduction);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  return (
    <div className="product-page" css={styles}>
      <div className="image">
        <img src={product.image} alt="" />
      </div>
      <div className="description">
        <h1>{product.name}</h1>
        <div className="prices">
          <h2>
            <Text delete>{product.price}€</Text>
          </h2>
          <h2>{product.reduction}€</h2>
        </div>

        <div className="quantity">
          <strong>Quantity:</strong>
          <InputNumber
            min={1}
            defaultValue={1}
            size="small"
            onChange={(value) => {
              setTotal(value * product.reduction);
              setQuantity(value);
            }}
          />
        </div>
        <strong>Total: {total}€</strong>
        <Button
          type="primary"
          onClick={() => dispatch(addToCart(product, quantity))}
        >
          Add to Cart
        </Button>
        <p style={{ marginTop: 10 }}>frais de port: gratuit</p>
      </div>
    </div>
  );
}

const styles = css`
  padding: 50px;
  display: flex;
  .image img {
    max-height: 500px;
  }

  .description {
    padding: 20px 50px;
    // background-color: rgba(0, 0, 0, 0.2);
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .prices {
      display: flex;
      gap: 20px;
    }

    .quantity {
      margin-bottom: 20px;
      strong {
        margin-right: 10px;
      }
    }
    button {
      max-width: 300px;
      margin-top: 20px;
    }
  }
`;

export default ProductPage;
