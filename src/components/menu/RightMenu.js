import {
  CloseCircleTwoTone,
  HeartTwoTone,
  ShoppingTwoTone,
} from "@ant-design/icons/lib/icons";
import { Badge, Button, Dropdown, Menu, Grid } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import Search from "antd/lib/transfer/search";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromWishList } from "../../redux/actions/shoppingActions";

const { useBreakpoint } = Grid;

function RightMenu({ wishList, cartList }) {
  const dispatch = useDispatch();
  const { sm, md, lg, xl } = useBreakpoint();

  const wishMenu = (
    <Menu style={{ paddingBlock: 10 }}>
      {wishList.slice(0, 3).map((product) => (
        <Menu.Item key={product.id}>
          <div
            className="wishlist-product"
            style={{
              marginBlock: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
            }}
          >
            <Link to={`/product/${product.id}`}>
              <div>
                <Avatar
                  shape="square"
                  src={product.image}
                  style={{ marginRight: 15 }}
                />
                <span>
                  {product.name.length > 15
                    ? product.name.substring(0, 15) + "..."
                    : product.name}
                </span>
              </div>
            </Link>

            <CloseCircleTwoTone
              twoToneColor="#eb2f96"
              size="large"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeFromWishList(product));
              }}
            />
          </div>
        </Menu.Item>
      ))}
      {wishList.length > 3 && (
        <Menu.Item key={Math.random()}>
          <Button type="primary" style={{ width: "100%" }}>
            See All
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div>
      <div style={{ display: !md && "none" }}>
        <Search placeholder="Search ..." className="searchBtn" />
      </div>
      <Badge count={wishList.length}>
        <Dropdown
          className="dropdownmen"
          overlay={wishMenu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <HeartTwoTone
            style={{ fontSize: "160%", cursor: "pointer" }}
            twoToneColor="#eb2f96"
          />
        </Dropdown>
      </Badge>

      <Link to="/cart">
        <Badge count={cartList.length}>
          <ShoppingTwoTone style={{ fontSize: "160%", cursor: "pointer" }} />
        </Badge>
      </Link>
    </div>
  );
}

export default RightMenu;
