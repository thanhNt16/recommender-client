import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import IntlMessages from "../../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
} from "../../../constants/ThemeSetting";
import AppLink from "../../components/AppLink";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const HorizontalNav = () => {
  const navStyle = useSelector(({ settings }) => settings.navStyle);
  const pathname = useSelector(({ settings }) => settings.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";
    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split("/")[1];
  return (
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal"
    >
      <SubMenu
        popupClassName={getNavStyleSubMenuClass(navStyle)}
        key="main"
        title={<IntlMessages id="sidebar.main" />}
      >
        <Menu.Item key="main">
          <AppLink href="/main">
            <i className="icon icon-home" />
            Algorithm Management
            {/* <IntlMessages id="sidebar.main" /> */}

          </AppLink>
        </Menu.Item>
        <Menu.Item key="rating-generator">
          <AppLink href="/rating-generator">
            <i className="icon icon-setting" />
            Rating generator
            {/* <IntlMessages id="sidebar.main" /> */}

          </AppLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        popupClassName={getNavStyleSubMenuClass(navStyle)}
        key="scenario"
        // title={<IntlMessages id="sidebar.main" />}
        title="Scenario"
      >
        <Menu.Item key="scenario">
          <AppLink href="/scenario">
            <i className="icon icon-crypto" />
            {/* <IntlMessages id="sidebar.scenario" /> */}
            Scenario
          </AppLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        popupClassName={getNavStyleSubMenuClass(navStyle)}
        key="Visualization"
        // title={<IntlMessages id="sidebar.main" />}
        title="Visualization"
      >
        <Menu.Item key="visualization">
          <AppLink href="/visualization">
            <i className="icon icon-chart" />
            {/* <IntlMessages id="sidebar.scenario" /> */}
            visualization
          </AppLink>
        </Menu.Item>
        <Menu.Item key="Data manipulation">
          <AppLink href="/data-manipulation">
            <i className="icon icon-chart" />
            {/* <IntlMessages id="sidebar.scenario" /> */}
            Data manipulation
          </AppLink>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;
