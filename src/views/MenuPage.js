import React from 'react'
import { HeaderCopy, SubheaderCopy, MenuListItem } from '../components'
import phikul_icon from '../assets/images/phikul_icon.png'
import './MenuPage.less'
// restaurant menu data
import { AppetizersData } from '../assets/RestaurantMenu/appetizersData'
import { CurriesData } from '../assets/RestaurantMenu/curriesData'
import { FromTheWorkData } from '../assets/RestaurantMenu/fromTheWokData'
import { SoupsData } from '../assets/RestaurantMenu/soupsData'
import { SaladsData } from '../assets/RestaurantMenu/saladsData'
import { NoodlesData } from '../assets/RestaurantMenu/noodlesData'
import { FriedRiceData } from '../assets/RestaurantMenu/friedRiceData'
import { SidesData } from '../assets/RestaurantMenu/sidesData'
import { DessertsData } from '../assets/RestaurantMenu/dessertsData'
import { DrinksData } from '../assets/RestaurantMenu/drinksData'
import { HouseFavoriteData } from '../assets/RestaurantMenu/houseFavoritesData'
import NavFooter from '../components/NavFooter/NavFooter'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPepperHot,
  faFileDownload,
  faSoup,
} from '@fortawesome/pro-light-svg-icons'
export default function MenuPage(params) {
  let mobile
  if (window.innerWidth > 620) {
    mobile = false
  } else {
    mobile = true
  }
  return (
    <div className="menu-page-wrapper">
      <div className="menu-page-header">
        <HeaderCopy white="true" className="extra-tall">
          Menu
        </HeaderCopy>
        <SubheaderCopy white="true" className="normal">
          Our flavorful fried rice dishes, stir-frys, noodles and curries are
          available in mild <FontAwesomeIcon icon={faPepperHot} /> , medium{' '}
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} /> , hot{' '}
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} /> , and Thai hot{' '}
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} />
          <FontAwesomeIcon icon={faPepperHot} />.
        </SubheaderCopy>

        <div className="download">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={process.env.PUBLIC_URL + '/Phikul-Thai-Bistro-2022-Menu.pdf'}
          >
            <SubheaderCopy className="normal" link="true" white="true">
              <FontAwesomeIcon className="link-color" icon={faFileDownload} />{' '}
              <span className="order-online-text">Download Our PDF Menu</span>
            </SubheaderCopy>
          </a>
        </div>
        <div className="download">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.orderphikulthaibistro.com/"
          >
            <SubheaderCopy className="normal" link="true" white="true">
              <FontAwesomeIcon className="link-color" icon={faSoup} />
              <span className="order-online-text">Order Online</span>
            </SubheaderCopy>
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <div className="menu-card">
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
            {/* Start Appetizer */}
            <div className="menu-category">
              <SubheaderCopy className="medium">Appetizers</SubheaderCopy>
              {AppetizersData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />

            {/* End Appetizer */}
            {/* Start House Favorites */}
            <div className="menu-category">
              <SubheaderCopy className="medium">House Favorites</SubheaderCopy>
              {HouseFavoriteData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />

            {/* End House Favorites */}
          </div>
        </div>
        <div className="col-3">
          <div className="menu-card">
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
            {/* Start From The Wok */}
            <div className="menu-category">
              <SubheaderCopy className="medium">From The Wok</SubheaderCopy>
              {FromTheWorkData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />

            {/* End From The Wok */}

            {/* Start Noodles */}
            <div className="menu-category">
              <SubheaderCopy className="medium">Noodles</SubheaderCopy>
              {NoodlesData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />

            {/* End Noodles */}
          </div>
        </div>
        <div className="col-3">
          <div className="menu-card">
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
            {/* Start Soups and Salads */}
            <div className="menu-category">
              <SubheaderCopy className="medium">Soups and Salads</SubheaderCopy>
              {SoupsData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
              {SaladsData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
            {/* End Soups and Salads */}
            {/* Start Curries */}
            <div className="menu-category">
              <SubheaderCopy className="medium">Curries</SubheaderCopy>
              {CurriesData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
            {/* End Curries */}
            {/* Start Desserts and Drinks */}
            <div className="menu-category">
              <SubheaderCopy className="medium">
                Desserts and Drinks
              </SubheaderCopy>
              {DessertsData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}
              {DrinksData.map((item) => {
                return (
                  <MenuListItem
                    key={item.name}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    desktop
                  />
                )
              })}

              {/* End Desserts and Drinks */}
            </div>
            <img
              className="phikul-icon"
              alt="Phikul Thai Flower"
              src={phikul_icon}
            />
          </div>
        </div>
      </div>
      <NavFooter />
    </div>
  )
}
