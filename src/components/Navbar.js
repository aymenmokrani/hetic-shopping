/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import {
  CloseCircleTwoTone,
  HeartTwoTone,
  ShoppingTwoTone,
} from "@ant-design/icons/lib/icons";
import { Avatar, Badge, Button, Dropdown, Menu } from "antd";

import Search from "antd/lib/input/Search";
import SubMenu from "antd/lib/menu/SubMenu";
import hetic_logo from "../assets/images/logo_hetic.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromWishList } from "../redux/actions/shoppingActions";

function Navbar({ wishList, cartList }) {
  const dispatch = useDispatch();

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
    <div className="navBar" css={styles}>
      <div className="logo">
        <Link to="/">
          <img src={hetic_logo} alt="hetic_logo" />
        </Link>
      </div>
      <div className="leftMenu">
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="Home">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="Collections">
            <Link to="/new">New</Link>
          </Menu.Item>
          <SubMenu key="collections" title={<span>Collections</span>}>
            <Menu.Item key="shoes">
              <Link to="/shoes">Shoes</Link>
            </Menu.Item>
            <Menu.Item key="pants">
              <Link to="/pants">Pants</Link>
            </Menu.Item>
            <Menu.Item key="Coats">
              <Link to="/coats">Coats</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
      <div className="rightMenu">
        <Search placeholder="Search ..." className="searchBtn" enterButton />
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
    </div>
  );
}

const styles = css`
  box-shadow: 0 0 15px #ddd;
  padding: 10px 50px;
  display: flex;
  align-items: center;
  gap: 2%;

  .logo {
    width: 100px;
  }
  .leftMenu {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .menu {
      min-width: 260px;
    }
    .searchBtn {
    }
  }
  .rightMenu {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }
`;
export default Navbar;
