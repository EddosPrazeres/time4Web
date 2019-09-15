import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Footer.scss'
import {withRouter} from 'react-router-dom'
import imgApple from '../../assets/app-store.svg'
import imgGoogle from '../../assets/google-play.svg'
class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="Footer"> 
        <div className="Footer-top">
          <div className="Footer-top-button" onClick={() => this.props.history.push('/')}>Sobre nós</div>
          <div className="Footer-top-button" onClick={() => this.props.history.push('/Regulation')}>Regulamento</div>
          <div className="Footer-top-button" onClick={() => this.props.history.push('/Indicator')}>Seja um indicador</div>
        </div>

        <div className="Footer-center">
          <div className="Footer-center-title" >Baixe nosso Aplicativo</div>
          <div className="Footer-center-download">
            <img src={imgApple} />
            <img src={imgGoogle} />
          </div>
        </div>

        <div className="Footer-bottom">
          ©Copyright 4Team. All Rights Reserved.
        </div>

      </div>
    )
  }
}

Footer.defaultProps = {

}

Footer.propTypes = {

}

export default withRouter(Footer)