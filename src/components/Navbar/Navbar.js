import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import logo from '../../images/hires/Optimally_LOGO_2_COLOR.png'
import { Drawer } from 'antd'
import { IconBar, IconBack } from '../../components'
import './Navbar.less'

// For reference:  https://github.com/Rupinderthind/Ant_design_navbar
export default function Navbar() {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }
  return (
    <nav className="menu-bar">
      <div className="logo">
        <Link to="/">
          <img
            className="navbar-logo"
            alt="Optimally Business Performance"
            src={logo}
          />
        </Link>
      </div>
      <div className="menu-content">
        <div className="left-menu">
          <LeftMenu />
        </div>
        <div className="right-menu">
          <RightMenu />
        </div>
        <div className="navbar-mobile">
          <div className="bars-menu">
            <IconBar primary="true" onClick={showDrawer} />
          </div>
        </div>
      </div>
      <Drawer
        title={
          <>
            <div className="left-float"></div>

            <div className="right-float">
              <IconBack primary="true" onClick={onClose} />
            </div>
          </>
        }
        className="drawer-menu"
        width={'80%'}
        placement="left"
        key="top"
        closable={false}
        onClose={onClose}
        onClick={onClose}
        visible={visible}
      >
        <LeftMenu />
        <RightMenu />
      </Drawer>
    </nav>
  )
}
