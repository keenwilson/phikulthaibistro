import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { BodyCopy } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faPhoneAlt } from '@fortawesome/pro-light-svg-icons'
export default function RightMenu(props) {
  return (
    <>
      <Menu
        className="right-menu-wrapper"
        mode={window.innerWidth > 1280 ? 'horizontal' : 'vertical'}
      >
        <Menu.Item key="phone">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+1-816-894-3993"
          >
            <BodyCopy white="true" link="true">
              <FontAwesomeIcon
                className="link-color"
                icon={faPhoneAlt}
                {...props}
              />{' '}
              (816) 894 - 3993
            </BodyCopy>
          </a>
        </Menu.Item>
        <Menu.Item key="facebook">
          <a
            target="_blank"
            href="https://www.facebook.com/PhikulThaiBistro"
            rel="noopener noreferrer"
          >
            <BodyCopy white="true" link="true">
              <FontAwesomeIcon
                className="link-color"
                icon={faFacebookF}
                {...props}
              />
            </BodyCopy>
          </a>
        </Menu.Item>
      </Menu>
    </>
  )
}
