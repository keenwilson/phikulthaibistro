import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BodyCopy,
  Mailto,
  CopyToClipboard,
  SocialMediaGroup,
} from '../../components'
import './NavFooter.less'

export default function NavFooter(params) {
  const [showCopyToClipboard, setShowCopyToClipboard] = useState(false)
  const handleMouseHover = () => {
    setShowCopyToClipboard(!showCopyToClipboard)
  }
  return (
    <nav className="nav-footer">
      <div className="footer-content">
        <div className="social-wrap">
          <SocialMediaGroup className="social-group-desktop" ghost="true" />
        </div>
        <div className="left-footer">
          <div className="navifation-wrap">
            <div className="footer-item">
              <div className="footer-divider"></div>
            </div>
            <div className="footer-item">
              <Link to="/products">
                <BodyCopy white="true">Products</BodyCopy>
              </Link>
            </div>

            <div className="footer-item">
              <Link to="/our-process">
                <BodyCopy white="true">Our Process</BodyCopy>
              </Link>
            </div>
            <div className="footer-item">
              <Link to={`/blogs/vendor-relationships`}>
                <BodyCopy white="true">Blogs</BodyCopy>
              </Link>
            </div>
            <div className="footer-item ">
              <div className="request-demo">
                <Link to="/request-demo">
                  <BodyCopy white="true">Request Demo</BodyCopy>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="footer-item">
            <div className="footer-divider"></div>
          </div>
          <div className="footer-item">
            <SocialMediaGroup className="social-group-mobile" />
          </div>
          <div className="footer-item">
            <BodyCopy white="true">© 2020 Optimally</BodyCopy>
          </div>
          <div className="footer-item">
            <BodyCopy white="true">
              11300 Tomahawk Creek Parkway
              <br />
              Leawood, KS 66211
            </BodyCopy>
          </div>
          <div
            className="footer-item mailto-line"
            onMouseEnter={handleMouseHover}
            onMouseLeave={handleMouseHover}
          >
            <Mailto
              className="mailto-text"
              email="info@optimally.com"
              headers={{ subject: 'Request for Information' }}
              obfuscate={true}
            >
              <BodyCopy className="info-email" white="true" link="true">
                info@optimally.com
              </BodyCopy>
            </Mailto>
            {showCopyToClipboard && (
              <CopyToClipboard value=" info@optimally.com" />
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
