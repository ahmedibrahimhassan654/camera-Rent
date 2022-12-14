import React, { useState } from "react";

//import logoPic from "../../../public/logo192.png";
import {
  AppstoreOutlined,
  LogoutOutlined,
  ProfileOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SubMenu from "antd/lib/menu/SubMenu";

const { Item } = Menu;

const HeaderNav = () => {
  const [current, setCurrent] = useState("home");

  const handleclick = (e) => {
    setCurrent(e.key);
  };

  return (
    <>
      <Menu
        onClick={handleclick}
        selectedKeys={[current]}
        mode="horizontal"
        type="flex"
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          maxWidth: "100%",
          borderButtom: "20px solid red",
        }}
      >
        <Item
          //   key="home"
          className="logo"
          style={{
            position: "absolute",
            top: 0,
            left: 50,
          }}
        >
          <Link to="/">Logo</Link>
        </Item>
        <Item
          // className="p-3  ml-5  mr-5 text-black "
          key="home"
          icon={
            <AppstoreOutlined style={{ fontSize: "16px", color: "#08c" }} />
          }
        >
          <Link to="/">Home</Link>
        </Item>
        <Item
          // className="p-3 mb-2 ml-5  mr-5 text-black "
          key="Products"
          icon={<ShopOutlined style={{ fontSize: "16px", color: "#08c" }} />}
        >
          <Link to="/products">Products </Link>
        </Item>
        <Item
          //  className="p-3 mb-2 ml-5  mr-5 text-black "
          key="Services"
          icon={<ShopOutlined style={{ fontSize: "16px", color: "#08c" }} />}
        >
          <Link to="/services">Services </Link>
        </Item>
        <Item
          //  className="p-3 mb-2 ml-5  mr-5 text-black "
          key="Blogs"
          icon={<ShopOutlined style={{ fontSize: "16px", color: "#08c" }} />}
        >
          <Link to="/blogs">Blogs </Link>
        </Item>{" "}
        <SubMenu
          key="User Name"
          // className="p-3 mb-2 "
          // title={user.email && user.email.split('@')[0]}
          title="start now"
          style={{ position: "absolute", top: 0, right: 50 }}
          icon={<ShopOutlined style={{ fontSize: "16px", color: "#08c" }} />}
        >
          <Item
            key="username 1"
            icon={
              <ProfileOutlined style={{ fontSize: "30px", color: "#08c" }} />
            }
            //   onClick={redirectToRoleDashbord}
          >
            <Link to="/register">Register </Link>
          </Item>

          <Item
            icon={
              <LogoutOutlined style={{ fontSize: "30px", color: "#08c" }} />
            }
            // onClick={logout}
          >
            <Link to="/login">Login </Link>
          </Item>
        </SubMenu>
      </Menu>
    </>
  );
};

export default HeaderNav;
