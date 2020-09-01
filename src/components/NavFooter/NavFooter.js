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
              <SubheaderCopy white="true">Hours</SubheaderCopy>

              <BodyCopy white="true">
                Tuesday 11 AM-9 PM
                <br />
                Wednesday 11 AM-9 PM
                <br />
                Thursday 11 AM-9 PM
                <br />
                Friday 11 AM-10 PM
                <br />
                Saturday 11 AM-10 PM
                <br />
                Sunday 11 AM-9 PM
                <br />
                Monday Closed
              </BodyCopy>
            </div>
            <div className="footer-item">
              <BodyCopy white="true">
                {' '}
                Seating at Phikul Thai Bistro is available on a walk-in basis
                only.
              </BodyCopy>
            </div>
          </div>
        </div>
        <div className="right-footer">
          <div className="footer-item">
            <div className="footer-divider"></div>
          </div>

          <div className="footer-item">
            <BodyCopy white="true">© 2020 Phikul Thai Bistro</BodyCopy>
          </div>
          <div className="footer-item">
            <BodyCopy white="true">
              17 East 5th Street
              <br />
              Kansas City, MO 64106
            </BodyCopy>
            <br />
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://goo.gl/maps/7tyySYPeNj9Nbcoh9"
            >
              <BodyCopy white="true" link="true">
                Get Directions
              </BodyCopy>
            </a>
          </div>
          <div className="footer-item">
            {' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+1-816-894-3993"
            >
              <BodyCopy white="true" link="true">
                Tel. (816) 894-3993
              </BodyCopy>
            </a>
          </div>
          <div className="footer-item">
            <a
              target="_blank"
              href="https://www.facebook.com/PhikulThaiBistro"
              rel="noopener noreferrer"
            >
              <BodyCopy white="true" link="true">
                Follow us on{' '}
                <FontAwesomeIcon className="link-color" icon={faFacebookF} />
                acebook
              </BodyCopy>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
