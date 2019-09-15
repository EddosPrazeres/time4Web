import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Footer } from '../../components'
import imgStep1 from '../../assets/step1.svg'
import imgStep2 from '../../assets/step2.svg'
import imgStep3 from '../../assets/step3.svg'
import imgStep4 from '../../assets/step4.svg'
import imgSystem from '../../assets/group-5.svg'
import './Home.scss'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div style={{backgroundColor: '#fbfbfb'}}>
        <div className="Home">
          <Header Start={"on"}/>
  
          <div className="Home-content"> 
            <img className="Home-content-image" src={""}/> 
            <div className="Home-content-system">
              <div className="Home-content-system-left">
                <div className="Home-content-system-left-title">ECOSSISTEMA 4TEAM</div>
                <div className="Home-content-system-left-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt, orci quis facilisis sollicitudin, augue lorem cursus sem, nec egestas ante lectus non neque. Donec consectetur odio non mi dignissim venenatis. Ut nec nisl eu urna dictum pharetra at vitae metus. Maecenas dictum tortor sed volutpat aliquam. </div>
              </div>
  
              <img className="Home-content-system-right" src={imgSystem}/>
            </div>
            <div className="Home-content-steps"> 
              <div className="Home-content-steps-step"> 
                <img className="Home-content-steps-step-image" src={imgStep1} />
                <div className="Home-content-steps-step-title">1. Indicadores </div>
                <div className="Home-content-steps-step-subtitle"> Autônomos se cadastram na 4Team para se tornar um indicador e compartilhar os seguros.</div>
              </div>
  
              <div className="Home-content-steps-step"> 
                <img className="Home-content-steps-step-image" src={imgStep2} />
                <div className="Home-content-steps-step-title">2. Plataforma 4Team</div>
                <div className="Home-content-steps-step-subtitle"> O usuário que recebeu a indicação é direcionado até nossa plataforma, onde relizará uma cotação personalizada de seu seguro.</div>
              </div>
  
              <div className="Home-content-steps-step"> 
                <img className="Home-content-steps-step-image" src={imgStep3} />
                <div className="Home-content-steps-step-title">3. Contratação </div>
                <div className="Home-content-steps-step-subtitle">Entregamos a melhor cotação já alinhada a todas a expectativas e necessidades do usuário para que ele realize a contratação de modo rápido e fácil.</div>
              </div>
  
              <div className="Home-content-steps-step"> 
                <img className="Home-content-steps-step-image" src={imgStep4} />
                <div className="Home-content-steps-step-title">4. Cashback</div>
                <div className="Home-content-steps-step-subtitle">O indicador recebe uma comissão sobre o contrato efetivado através do seu link compartilhado.</div>
              </div>
            </div>
          </div>        
        </div>
        <Footer />
      </div>
    )
  }
}

Home.defaultProps = {

}

Home.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Home)