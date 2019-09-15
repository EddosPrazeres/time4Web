import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Footer } from '../../components'
import './Indicator.scss'
import imgHouse from '../../assets/housestep.svg'
import imgConnection from '../../assets/stepconnection.svg'
import imgMobile from '../../assets/stepmobile.svg'
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
              <div className="Indicator-content-tutorial-items">
                <div className="Indicator-content-tutorial-items-item"> 
                  <img className="Indicator-content-tutorial-items-item-image" src={imgMobile} />                
                  <div className="Indicator-content-tutorial-items-item-text"> Você baixa nosso aplicativo e se cadastra como propagador  de seguros.</div>
                </div>

                <div className="Indicator-content-tutorial-items-item"> 
                  <img className="Indicator-content-tutorial-items-item-image" src={imgConnection} />                
                  <div className="Indicator-content-tutorial-items-item-text">Assim que seu cadastro é aprovado, você já pode começar a compartilhar seu link com amigos, ou qualquer outra pessoa. </div>
                </div>

                <div className="Indicator-content-tutorial-items-item"> 
                  <img className="Indicator-content-tutorial-items-item-image" src={imgHouse} />                
                  <div className="Indicator-content-tutorial-items-item-text">Cada vez que uma indicação sua converter em contratação, te garantimos uma comissão.</div>
                </div>
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