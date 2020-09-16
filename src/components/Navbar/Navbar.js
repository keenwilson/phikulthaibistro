import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import logo from '../../assets/logo/phikulthaibistro_logo.png'
import { Drawer } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowAltToLeft } from '@fortawesome/pro-light-svg-icons'
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
          <img className="navbar-logo" alt="Phikul Thai Bistro" src={logo} />
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
            <FontAwesomeIcon icon={faBars} onClick={showDrawer} />
          </div>
        </div>
      </div>
      <Drawer
        title={
          <>
            <div className="left-float"></div>

            <div className="right-float">
              <FontAwesomeIcon icon={faArrowAltToLeft} onClick={onClose} />
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
        bodyStyle={{ color: '#272725', backgroundColor: '#272725' }}
      >
        <LeftMenu />
        <RightMenu />
      </Drawer>
    </nav>
  )
}
