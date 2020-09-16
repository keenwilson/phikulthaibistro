import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import hero_desktop from '../assets/images/hero_phikulthai_1.jpg'
import sub_desktop from '../assets/images/hero_phikulthai_2.jpg'
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
    <div className="landing-page-wrapper">
      <div className="landing-page-header">
        <HeaderCopy white="true" className="extra-tall">
          WELCOME
        </HeaderCopy>

        <HeaderCopy white="true" className="tall">
          TO PHIKUL THAI BISTRO
        </HeaderCopy>

        <SubheaderCopy white="true" className="medium">
          Thai Comfort Food at Kansas City's River Market
        </SubheaderCopy>
      </div>
      <img
        className="hero-image"
        src={hero}
        alt="Phikul Thai Bistro is located  next to the City Market streetcar stop"
      />

      <div className="row">
        <div className="col-2lg">
          <div className="square-image-wrapper">
            <img
              className="sub-image"
              src={sub_desktop}
              alt="Phikul Thai Bistro is located  next to the City Market streetcar stop"
            />
          </div>
        </div>
        <div className="col-2sm">
          <HeaderCopy white="true" className="tall">
            About Phikul Thai Bistro
          </HeaderCopy>

          <SubheaderCopy white="true" className="normal">
            Given that one of the first things Thais ask each other when they
            meet up is "Have you eaten yet?", it's clear Thailand is a nation
            that's extremely passionate about its eats. We are excited to show
            the flavors of both world-famous and worth trying Thai cuisine to
            the Kansas City's River Market, available for dine-in and pick-up.
          </SubheaderCopy>
          <div className="action-item">
            <Link to="/menu">
              <SubheaderCopy className="normal" link="true" white="true">
                <FontAwesomeIcon className="link-color" icon={faBookOpen} />{' '}
                View Our Menu
              </SubheaderCopy>
            </Link>
          </div>
          <div className="action-item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                process.env.PUBLIC_URL + '/Phikul-Thai-Bistro-Takeout-Menu.pdf'
              }
            >
              <SubheaderCopy className="normal" link="true" white="true">
                <FontAwesomeIcon className="link-color" icon={faFileDownload} />{' '}
                Download Our PDF Menu
              </SubheaderCopy>
            </a>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-2sm">
          <HeaderCopy white="true" className="tall">
            Hours
          </HeaderCopy>

          <SubheaderCopy white="true" className="normal">
            Tuesday 11 AM-9 PM
            <br /> Wednesday 11 AM-9 PM
            <br /> Thursday 11 AM-9 PM
            <br /> Friday 11 AM-10 PM
            <br /> Saturday 11 AM-10 PM
            <br /> Sunday 11 AM-8 PM
            <br /> Monday Closed
            <br />
            <br />
            Seating at Phikul Thai Bistro is available on a walk-in basis only.
          </SubheaderCopy>
        </div>
        <div className="col-2lg">
          <div className="square-image-wrapper">
            <img
              className="sub-image"
              src={hero_mobile}
              alt="Phikul Thai Bistro is located  next to the City Market streetcar stop"
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3095.919349585775!2d-94.58428034867876!3d39.108306279438224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0f140c24064bb%3A0x2ee8039378a7720f!2sPhikul%20Thai%20Bistro!5e0!3m2!1sen!2sus!4v1600271861803!5m2!1sen!2sus"
            width="400"
            height="300"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div className="col-3">
          <HeaderCopy white="true" className="tall">
            Location
          </HeaderCopy>

          <SubheaderCopy white="true" className="normal">
            17 East 5th Street
            <br /> Kansas City, MO 64106
          </SubheaderCopy>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://goo.gl/maps/7tyySYPeNj9Nbcoh9"
          >
            <SubheaderCopy className="normal" white="true" link="true">
              Get Directions
            </SubheaderCopy>
          </a>
        </div>
        <div className="col-3">
          <HeaderCopy white="true" className="tall">
            Contact Us
          </HeaderCopy>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="tel:+1-816-894-3993"
          >
            <SubheaderCopy className="normal" white="true" link="true">
              Tel. (816) 894-3993
            </SubheaderCopy>
          </a>
        </div>
      </div>
      {mobile && (
        <div className="content-item">
          <div className="action-item">
            <div className="mobile-tile">
              <Link to="/menu">
                <FontAwesomeIcon className="link-color" icon={faBookOpen} />
                <SubheaderCopy className="small" link="true">
                  View Menu
                </SubheaderCopy>
              </Link>
            </div>
          </div>
          <div className="action-item">
            <div className="mobile-tile">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  process.env.PUBLIC_URL +
                  '/Phikul-Thai-Bistro-Takeout-Menu.pdf'
                }
              >
                <FontAwesomeIcon className="link-color" icon={faFileDownload} />
                <SubheaderCopy className="small" link="true">
                  Download PDF
                </SubheaderCopy>
              </a>
            </div>
          </div>
        </div>
      )}

      <NavFooter />
    </div>
  )
}
