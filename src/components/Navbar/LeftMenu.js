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
        mode={window.innerWidth > 1024 ? 'horizontal' : 'inline'}
      >
        <Menu.Item key="home" className="nav-heder">
          <Link to="/">
            <HeaderCopy white={window.innerWidth > 1024 ? 'true' : null}>
              <FontAwesomeIcon icon={faHomeAlt} />
            </HeaderCopy>
          </Link>
        </Menu.Item>
        <Menu.Item key="menu" className="nav-heder">
          <div>
            <Link to="/menu">
              <HeaderCopy white={window.innerWidth > 1024 ? 'true' : null}>
                Menu
              </HeaderCopy>
            </Link>
          </div>
        </Menu.Item>
        <Menu.Item key="menu" className="nav-heder">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.orderphikulthaibistro.com/"
            >
              <HeaderCopy white={window.innerWidth > 1024 ? 'true' : null}>
                Order Online
              </HeaderCopy>
            </a>
          </div>
        </Menu.Item>
        {/* <Menu.Item key="process" className="nav-heder">
          <div>
            <Link to="/ourstory">
              <HeaderCopy white={window.innerWidth > 1024 ? 'true' : null}>
                Our Story
              </HeaderCopy>
            </Link>
          </div>
        </Menu.Item> */}
      </Menu>
    </>
  )
}
