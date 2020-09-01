import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHomeAlt } from '@fortawesome/pro-light-svg-icons'
import SubheaderCopy from '../Typography/SubheaderCopy'
import HeaderCopy from '../Typography/HeaderCopy'

export default function LeftMenu() {
  return (
    <>
      <Menu
        className="left-menu-wrapper"
        mode={window.innerWidth > 1280 ? 'horizontal' : 'inline'}
      >
        <Menu.Item key="home" className="nav-heder">
          <Link to="/">
            <HeaderCopy>
              <FontAwesomeIcon icon={faHomeAlt} />
            </HeaderCopy>
          </Link>
        </Menu.Item>
        <Menu.Item key="products" className="nav-heder">
          <div>
            <Link to="/menu">
              <HeaderCopy>Menu</HeaderCopy>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="process" className="nav-heder">
          <div>
            <Link to="/ourstory">
              <HeaderCopy>Our Story</HeaderCopy>
            </Link>
          </div>
        </Menu.Item>
      </Menu>
    </>
  )
}
