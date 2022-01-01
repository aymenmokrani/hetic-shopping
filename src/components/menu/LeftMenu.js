import { Grid, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import React from "react";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

function LeftMenu({ mode }) {
  const { sm, md, lg, xl } = useBreakpoint();
  return (
    <Menu mode={mode} className="menu">
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
  );
}

export default LeftMenu;
