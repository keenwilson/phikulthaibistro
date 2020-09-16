import React from 'react'
import { Divider } from 'antd'
import Thumbnail from './thumbnail'

import BodyCopy from '../Typography/BodyCopy'
import './MenuListItem.less'

const MenuListItem = ({
  name,
  description,
  image,
  price,
  divider,
  desktop,
}) => {
  let lunch, dinner, onePrice, onePriceValue
  if (price.lunch.length === 1 || price.lunch.dinner === 1) {
    onePrice = true
    onePriceValue = price.lunch[0] ? price.lunch[0] : price.dinner[0]
  }
  if (price.lunch.length > 0) {
    lunch = true
  }
  if (price.dinner.length > 0) {
    dinner = true
  }

  return (
    <div>
      <h2 className="menu-display-name">{name}</h2>
      <p className="menu-display-description">{description}</p>
      {desktop && image && (
        <Thumbnail
          imagePath={image.path}
          imageAlt={name}
          isPortrait={image.isPortrait}
        />
      )}
      {!onePrice && (
        <>
          {lunch && (
            <div className="price-row">
              <div className="price-heading">
                <BodyCopy>Lunch</BodyCopy>
              </div>
              <div>
                {price.lunch.map((item) => (
                  <span key={`${name}-price-${item}`}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          )}
          {dinner && (
            <div className="price-row">
              <div className="price-heading">
                <BodyCopy>Dinner</BodyCopy>
              </div>
              <div>
                {price.dinner.map((item) => (
                  <span key={`${name}-price-${item}`}>
                    {item}
                    <br />
                  </span>
                ))}
              </div>
            </div>
          )}
        </>
      )}
      {onePrice && (
        <p className="menu-price text-align-center">
          <span>
            {onePriceValue}
            <br />
          </span>
        </p>
      )}

      {divider ? <Divider /> : null}
    </div>
  )
}

export default MenuListItem
