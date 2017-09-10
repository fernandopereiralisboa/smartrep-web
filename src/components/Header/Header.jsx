import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable inverted fluid>
        <Menu.Item as="h3">
          <Icon name="home" color="yellow" />
          {' '}SMART Rep
        </Menu.Item>
      </Menu>
    )
  }
}
