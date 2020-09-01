import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { IconChevronDown, IconHome } from '../../components'

const SubMenu = Menu.SubMenu
export default function LeftMenu() {
  const onTitleClick = () => {}
  return (
    <>
      <Menu
        className="left-menu-wrapper"
        mode={window.innerWidth > 1280 ? 'horizontal' : 'inline'}
      >
        <Menu.Item key="home" className="nav-heder">
          <Link to="/">
            <IconHome />
          </Link>
        </Menu.Item>
        <Menu.Item key="products" className="nav-heder">
          <div>
            <Link to="/products">
              <h3 className="menu-title">Products</h3>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="process" className="nav-heder">
          <div>
            <Link to="/our-process">
              <h3 className="menu-title">Our Process</h3>
            </Link>
          </div>
        </Menu.Item>
        <SubMenu
          title={
            <>
              <div className="submenu-title">
                <h3 className="menu-title">Blogs</h3>
                <IconChevronDown />
              </div>
            </>
          }
          popupClassName="left-submenu nav-header"
          onTitleClick={onTitleClick}
          key="blogs"
        >
          <Menu.Item key="blogs:1" className="left-submenu-item">
            <Link to={`/blogs/vendor-relationships`}>
              Vendor {'&'} Client Relationships
            </Link>
          </Menu.Item>
          <Menu.Item key="blogs:2">
            <Link to={`/blogs/vendor-transparency`}>Vendor Transparency</Link>
          </Menu.Item>

          <Menu.Item key="blogs:3">
            <Link to={`/blogs/benchmarking`}>Benchmarking</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </>
  )
}
