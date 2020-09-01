import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import hero_desktop from '../assets/images/hero_phikulthai_1.jpg'
import hero_mobile from '../assets/images/hero_phikulthai_mobile_1.jpg'
import './LandingPage.less'
import { NavFooter } from '../components'
import { HeaderCopy, SubheaderCopy, BodyCopy } from '../components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faFileDownload } from '@fortawesome/pro-light-svg-icons'
export default function LandingPage(params) {
  const [hero, setHero] = useState(null)
  const [mobile, setMobile] = useState(null)
  useEffect(() => {
    if (window.innerWidth > 620) {
      setHero(hero_desktop)
      setMobile(false)
    } else {
      setHero(hero_mobile)
      setMobile(true)
    }
  }, [window.innerWidth])
  return (
    <>
      <div className="main-container">
        <section className="hero">
          <div className="hero-overlay">
            <div className="content">
              <div className="content-header">
                <HeaderCopy className="extra-tall">WELCOME</HeaderCopy>

                <HeaderCopy className="tall">TO PHIKUL THAI BISTRO</HeaderCopy>

                <SubheaderCopy className="medium">
                  An Authentic Thai cuisine available for dine-in and pick-up.
                </SubheaderCopy>
              </div>
              <div className="content-item">
                <div className="action-item">
                  {!mobile && (
                    <SubheaderCopy className="normal" link="true">
                      <FontAwesomeIcon
                        className="link-color"
                        icon={faBookOpen}
                      />{' '}
                      View Our Menu
                    </SubheaderCopy>
                  )}
                  {mobile && (
                    <div className="mobile-tile">
                      <Link to="/menu">
                        <FontAwesomeIcon
                          className="link-color"
                          icon={faBookOpen}
                        />
                        <SubheaderCopy className="small" link="true">
                          View Menu
                        </SubheaderCopy>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="action-item">
                  {!mobile && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={
                        process.env.PUBLIC_URL +
                        '/Phikul-Thai-Bistro-Takeout-Menu.pdf'
                      }
                    >
                      <SubheaderCopy className="normal" link="true">
                        <FontAwesomeIcon
                          className="link-color"
                          icon={faFileDownload}
                        />{' '}
                        Download Our PDF Menu
                      </SubheaderCopy>
                    </a>
                  )}
                  {mobile && (
                    <div className="mobile-tile">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          process.env.PUBLIC_URL +
                          '/Phikul-Thai-Bistro-Takeout-Menu.pdf'
                        }
                      >
                        <FontAwesomeIcon
                          className="link-color"
                          icon={faFileDownload}
                        />
                        <SubheaderCopy className="small" link="true">
                          Download PDF
                        </SubheaderCopy>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <img
            className="hero-image"
            src={hero}
            alt="Phikul Thai Bistro is located  next to the City Market streetcar stop"
          />
        </section>
        <section className="content"></section>
      </div>
      <NavFooter />
    </>
  )
}
