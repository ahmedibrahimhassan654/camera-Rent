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
        {/* <>
          <Button
            className={styles.menubtn}
            type="primary"
            shape="circle"
            icon={<MenuOutlined />}
            onClick={showDrawer}
          ></Button>
          <Drawer
            // title={<Image src={logoPic} alt="logo" />}
            placement="right"
            onClose={onClose}
            visible={state.visible}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Button type="text" href="/finances" icon={<EuroOutlined />}>
                Finances
              </Button>

              <Button type="text" href="/sante" icon={<HeartOutlined />}>
                Santé
              </Button>
              <Button
                type="text"
                href="/mathematiques"
                icon={<CalculatorOutlined />}
              >
                Mathématiques
              </Button>
              <Button type="text" href="/autres" icon={<BarsOutlined />}>
                Autres
              </Button>
            </div>
          </Drawer>
        </> */}
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
