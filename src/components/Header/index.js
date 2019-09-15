import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
import {withRouter} from 'react-router-dom'
import imgLogo from '../../assets/4-t.svg'
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="Header">
        <img className="Header-left" src={imgLogo} onClick={() => this.props.history.push('/')}/>
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
            highlight={this.props.Regulation}
            onClick={() => this.props.history.push('/Regulation')}
          >
            <span>
              Regulamento
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