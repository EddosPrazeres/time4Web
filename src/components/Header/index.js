import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import {withRouter} from 'react-router-dom'
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="Header">
        <div className="Header-left"></div>
        <div className="Header-right">

          <div
            className={'Header-right-button'}
            highlight={this.props.Start}
            onClick={() => this.props.history.push('/')}
          >
            <span>
              Sobre nós
            </span>
          </div>
          <div
            className={'Header-right-button'}
            highlight={this.props.Indicator}
            onClick={() => this.props.history.push('/Indicator')}
          >
            <span>
              Seja um indicador
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {

}

Header.propTypes = {

}

export default withRouter(Header)