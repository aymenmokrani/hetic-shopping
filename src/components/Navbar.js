/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import {
  CloseCircleTwoTone,
  HeartTwoTone,
  MenuOutlined,
  ShoppingTwoTone,
} from "@ant-design/icons/lib/icons";
import { Avatar, Badge, Button, Dropdown, Menu, Grid, Drawer } from "antd";
import { useState } from "react";
import Search from "antd/lib/input/Search";
import SubMenu from "antd/lib/menu/SubMenu";
import hetic_logo from "../assets/images/logo_hetic.svg";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import LeftMenu from "./menu/LeftMenu";
import RightMenu from "./menu/RightMenu";

const { useBreakpoint } = Grid;

function Navbar({ wishList, cartList }) {
  const dispatch = useDispatch();
  const { sm, md, lg, xl } = useBreakpoint();
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };

  return (
    <nav className="navBar" css={styles}>
      <div className="logo">
        <Link to="/">
          <img src={hetic_logo} alt="hetic_logo" />
        </Link>
      </div>
      <div className="leftMenu">
        <div style={{ display: !lg && "none" }}>
          <LeftMenu mode="horizontal" />
        </div>
      </div>
      <div className="rightMenu">
        <RightMenu {...{ wishList, cartList }} />
      </div>
      <Button
        className="burgerBtn"
        style={{ display: lg && "none" }}
        onClick={showDrawer}
      >
        <MenuOutlined />
      </Button>
      <Drawer
        title="Menu"
        visible={visible}
        closable={true}
        onClose={closeDrawer}
      >
        <div style={{ display: md && "none", marginBottom: 20 }}>
          <Search placeholder="Search ..." className="searchBtn" enterButton />
        </div>
        <LeftMenu mode="inline" />
      </Drawer>
    </nav>
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
  .rightMenu > div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
  }
  .burgerBtn {
    margin-left: 20px;
  }
  @media (max-width: 768px) {
    padding: 10px 15px;
  }
`;
export default Navbar;
