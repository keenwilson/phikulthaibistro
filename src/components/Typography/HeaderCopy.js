import React from 'react'
import classNames from 'classnames'
import './Typography.less'
export default function HeaderCopy({ className, children, ...props }) {
  const { primary, secondary, gray, white, link } = props
  let newClassName = classNames(className, {
    'header-copy': true,
    'primary-color': primary,
    'secondary-color': secondary,
    'gray-color': gray,
    'white-color': white,
    'link-color': link,
  })
  return (
    <p className={newClassName} {...props}>
      {children}
    </p>
  )
}
