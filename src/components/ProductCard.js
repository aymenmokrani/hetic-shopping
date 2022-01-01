/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { HeartFilled, HeartOutlined } from "@ant-design/icons/lib/icons";
import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeFromWishList,
} from "../redux/actions/shoppingActions";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const { id, brand, name, shipping, price, reduction, image, isWished } =
    product;
  return (
    <div css={styles}>
      <Card
        hoverable
        style={{ width: 240, border: 0, cursor: "pointer" }}
        cover={
          <img
            src={image}
            height={300}
            style={{
              borderRadius: 5,
              border: "1px solid dimgrey",
            }}
          />
        }
      >
        <div className="top-tags">
          {!isWished ? (
            <HeartOutlined
              className="product-heart"
              onClick={(e) => {
                e.preventDefault();
                dispatch(addToWishList(product));
              }}
            />
          ) : (
            <HeartFilled
              className="product-heart"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFromWishList(product));
              }}
            />
          )}

          <span className="reduction">-50%</span>
        </div>
        <Meta title={brand} />
        <span className="product-name">{name}</span> <br />
        <span className="shipping">{shipping}</span> <br />
        <div className="price-tag">
          <span className="price">
            {(Math.round(price * 100) / 100).toFixed(2)}€
          </span>
          <div className="promo-container">
            <span className="promo">
              {(Math.round(reduction * 100) / 100).toFixed(2)}€
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
}

const styles = css`
.ant-card {
    margin-block: 30px;
    width: 20%;
    .top-tags {
      .product-heart {
        position: absolute;
        top: 2%;
        right: 5%;
        font-size: 22px;
        color: red;
      }
      .reduction {
        background-color: black;
        color: white;
        font-weight: bold;
        padding: 0 5px;
        position: absolute;
        top: 2%;
        left: 5%;
      }
    }

    .ant-card-body {
      padding: 10px;
      text-align: left;

      .product-name {
        font-weight: bold;
        color: dimgrey;
      }
      .shipping {
        color: dimgrey;
      }
      .price-tag {
        display: flex;
        align-items: center;

        .price {
          text-decoration: line-through cyan;
          margin-right: 7px;
        }
        .promo-container {
          background: -webkit-linear-gradient(
            top,
            #ffffff 0%,
            #ffffff 50%,
            cyan 50%,
            cyan 100%
          );
          display: inline-block;
          .promo {
            -webkit-text-stroke: 1px black;
            font-size: 16px;
          }
        }
      }
    }
    .ant-card-meta {
      .ant-card-meta-title {
        font-weight: bold;
      }
    }
  }
}

`;

export default ProductCard;
