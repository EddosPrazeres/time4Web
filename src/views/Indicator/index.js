import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Footer } from '../../components'
import './Indicator.scss'

class Indicator extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div style={{backgroundColor: '#fbfbfb'}}>
        <div className="Indicator">
          <Header Indicator={"on"}/>
          <div className="Indicator-content">
            <div className="Indicator-content-value">
              <div className="Indicator-content-value-title">GERAÇÃO DE VALOR</div>
              <div className="Indicator-content-value-subtitle">Gerar oportunidades para todos e fomentar o ecossistema de seguros é nossa missão.</div>
              <div className="Indicator-content-value-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, orci quis facilisis sollicitudin, augue lorem cursus sem, nec egestas ante lectus non neque. Donec consectetur odio non mi dignissim venenatis. Ut nec nisl eu urna dictum pharetra at vitae metus. Maecenas dictum tortor sed volutpat aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, orci quis facilisis sollicitudin, augue lorem cursus sem, nec egestas ante lectus non neque. Donec consectetur odio non mi dignissim venenatis. Ut nec nisl eu urna dictum pharetra at vitae metus. Maecenas dictum tortor sed volutpat aliquam. </div>
            </div>

            <div className="Indicator-content-tutorial"> 
              <div className="Indicator-content-tutorial-title">Como funciona?</div>
              <div className="Indicator-content-tutorial-item"> 
                <img className="Indicator-content-tutorial-item-image" src={""} />                
                <div className="Indicator-content-tutorial-item-text"> Autônomos se cadastram na 4Team para se tornar um indicador e compartilhar os seguros.</div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

Indicator.defaultProps = {

}

Indicator.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Indicator)