/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import { Button } from "antd";
import { DeleteTwoTone } from "@ant-design/icons/lib/icons";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/shoppingActions";
import { Link } from "react-router-dom";
import Avatar from "antd/lib/avatar/avatar";

function CartPage({ cartList }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-page" css={styles}>
      <h1>Your cart</h1>
      <div className="cart-content">
        <div className="content-header">
          <div className="cart-product">Product</div>
          <div className="cart-quantity">Quantity</div>
          <div className="cart-total">Price</div>
          <div className="cart-subtotal">Sub total</div>
          <div className="cart-remove">Remove</div>
        </div>
        <div className="rows">
          {cartList.map((item) => (
            <div key={item.product.id}>
              <div className="content-row">
                <div className="cart-product">
                  <Link to={`/product/${item.product.id}`}>
                    <Avatar
                      shape="square"
                      src={item.product.image}
                      style={{ marginRight: 15 }}
                    />
                    {item.product.name}
                  </Link>
                </div>
                <div className="cart-quantity">x{item.quantity}</div>
                <div className="cart-total">{item.product.reduction}€</div>
                <div className="cart-subtotal">
                  {item.product.reduction * item.quantity}€
                </div>
                <DeleteTwoTone
                  twoToneColor="#eb2f96"
                  className="cart-remove"
                  style={{ cursor: "pointer", fontSize: 18 }}
                  onClick={() => dispatch(removeFromCart(item))}
                />
              </div>
              <hr style={{ marginTop: 15, opacity: 0.1 }} />
            </div>
          ))}
        </div>
        <div className="content-footer">
          <div className="cart-total">
            Total:{" "}
            {cartList
              .reduce(
                (accum, item) => accum + item.product.reduction * item.quantity,
                0
              )
              .toFixed(2)}
            €
          </div>
        </div>
        <div className="cart-action">
          <Button type="primary">Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
}

const styles = css`
  padding: 50px;
  max-width: 960px;
  //   background-color: red;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .cart-content {
    width: 100%;
    .content-header,
    .content-row {
      display: flex;
      margin-top: 20px;
      > div {
        width: 15%;
        text-align: right;
      }
      .cart-product {
        width: 45%;
        text-align: left;
      }
      .cart-remove {
        width: 10%;
        text-align: right;
      }
    }
    .content-header {
      font-weight: bolder;
      margin-block: 50px;
    }

    ,
    .content-footer {
      font-weight: bolder;
      text-align: right;
      margin-top: 50px;
    }
    .cart-action {
      text-align: right;
      margin-top: 50px;
    }
  }
`;

export default CartPage;
