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
        <div className="footer-item">
          <BodyCopy white="true">
            © 2020 Phikul Thai Bistro. All rights reserved.
          </BodyCopy>
        </div>
      </div>
    </nav>
  )
}
