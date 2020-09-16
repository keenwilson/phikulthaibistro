import React from 'react'
import { Link } from 'react-router-dom'
import { BodyCopy, SubheaderCopy } from '../../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import './NavFooter.less'

export default function NavFooter(params) {
  return (
    <nav className="nav-footer">
      <div className="footer-content">
        <div className="left-footer">
          <div className="navifation-wrap">
            <div className="footer-item">
              <BodyCopy white="true">© 2020 Phikul Thai Bistro</BodyCopy>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="footer-item">
            <BodyCopy white="true">All rights reserved.</BodyCopy>
          </div>
        </div>
      </div>
    </nav>
  )
}
