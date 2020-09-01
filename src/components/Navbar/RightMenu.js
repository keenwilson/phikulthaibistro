import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import { Button, SocialMediaGroup } from '../../components'
import { useAuth, useReactRouter } from '../../hooks'
import logService from '../../services/logService'

const logger = logService.getModuleLogger('RightMenu')

export default function RightMenu(props) {
  // Get auth state and re-render anytime it changes
  const auth = useAuth()
  const { history } = useReactRouter()
  useEffect(() => {
    // This effect uses the `value` variable,
    // so it "depends on" `value`.
    logger.debug('RightMenu auth.user', auth.user)
  }, [auth.user]) // pass `value` as a dependency

  const signOut = async (props) => {
    logger.debug('props', props)
    await auth.signout()
    history.replace('/')
  }
  return (
    <>
      {auth.user ? (
        <Menu
          className="right-menu-wrapper"
          mode={window.innerWidth > 1280 ? 'horizontal' : 'vertical'}
        >
          <Menu.Item key="login">
            <Link to="/account">
              <h3 primary="true" className="menu-title">
                Account ({auth.user.attributes.email})
              </h3>
            </Link>
          </Menu.Item>
          <Menu.Item key="signup" className="request-demo">
            <Button ghost="true" onClick={signOut}>
              Sign Out
            </Button>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu
          className="right-menu-wrapper"
          mode={window.innerWidth > 1280 ? 'horizontal' : 'vertical'}
        >
          <Menu.Item key="login">
            <a
              target="_blank"
              href="https://app.optimally.com"
              rel="noopener noreferrer"
            >
              <h3 primary="true" className="menu-title">
                Sign In
              </h3>
            </a>
          </Menu.Item>
          <Menu.Item key="signup" className="request-demo">
            <Link to="/request-demo">
              <Button primary="true">Request Demo</Button>
            </Link>
          </Menu.Item>

          <Menu.Item key="social" className="social-header">
            <SocialMediaGroup className="header" gray="true" />
          </Menu.Item>
        </Menu>
      )}
    </>
  )
}
