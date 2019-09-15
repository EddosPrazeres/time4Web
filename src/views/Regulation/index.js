import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header, Footer } from '../../components'
import './Regulation.scss'

class Regulation extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div style={{backgroundColor: '#fbfbfb'}}>
        <div className="Regulation">
          <Header Regulation={"on"}/>     

          <div className="Regulation-rules">
            <div className="Regulation-rules-title">Regulamento</div>

            <div className="Regulation-rules-rule">
              <div className="Regulation-rules-rule-title">1. Definição</div>
              <div className="Regulation-rules-rule-text">A 4Team é uma maneira simples de conseguir uma grana extra para quem indica seguros para sua rede de amigos e familiares. Juridicamente constituída como uma plataforma, a 4Team é responsável por:</div>
              <div className="Regulation-rules-rule-text">1.1	Avaliar a entrada de cada membro criando uma comunidade confiável;</div>
              <div className="Regulation-rules-rule-text">1.2	Encontrar a melhor cotação já alinhada a todas as expectativas e necessidade do usuário;</div>
              <div className="Regulation-rules-rule-text">1.3	Gerenciar a comissão para os indicadores de seguros.</div>                                                

              <div className="Regulation-rules-rule-title">2. Comissão por indicação</div>
              <div className="Regulation-rules-rule-text">A comissão por indicação só será concedida caso a pessoa que recebeu o link, contratar o seguro.</div>

              <div className="Regulation-rules-rule-title">3. Gestão de usabilidade</div>
              <div className="Regulation-rules-rule-text">A plataforma é estruturada para que, o usuário só se preocupe em contratar o seguro que ele está realmente precisando.</div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

Regulation.defaultProps = {

}

Regulation.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[]
  }
}

export default connect(mapStateToProps)(Regulation)