import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './LifeView.scss'
import imgMontreal from '../../assets/montreal.png'
import imgArrow from '../../assets/arrow-right-solid.svg'
import checkCircle from '../../assets/check-circle-regular.svg'

class LifeView extends Component {
  constructor(props){
    super(props)
    this.state = {
      assegurado: false,
      buy: false
    }
  }

  renderLife = (life) => {
    console.log("Cote", life)
    if (life) {
      let cover = life.simulation.Valor.simulacoes[0].produtos[0].coberturas;
      return <div className="Cardlife">
        <div className="Cardlife-header"> 
          <img src={""} />
          <div className="Cardlife-header-right">
            <div className="Cardlife-header-right-title"> {life.simulation.Valor.simulacoes[0].produtos[0].descricao} </div>
            <div className="Cardlife-header-right-description"> {cover[0].descricao} </div>      
          </div>
        </div>

        <div className="Cardlife-content"> 
          <div className="Cardlife-content-element">
            <img src={""} />
            <div className="Cardlife-content-element-text"> Capital Base: {cover[0].capitalBase}</div>          
          </div>

          <div className="Cardlife-content-element">
            <img src={""} />
            <div className="Cardlife-content-element-text"> Prêmio Base: {cover[0].premioBase}</div>          
          </div>

          <div className="Cardlife-content-element">
            <img src={""} />
            <div className="Cardlife-content-element-text"> Limite Prêmio: {cover[0].limite}</div>          
          </div>

          <div className="Cardlife-content-element">
            <img src={""} />
            <div className="Cardlife-content-element-text"> Periodicidade Pagamento: Mensal: {cover[0].limite}</div>          
          </div>
        </div> 
        <div className="Cardlife-footer">
          <div style={{display: 'flex'}}>            
            <div className="Cardlife-footer-price"> 
              R$ 35,00 
            </div>
            
            <div className="Cardlife-footer-period"> 
              Mês
            </div>
          </div> 

          <div className="Cardlife-footer-submit" onClick={()=> this.renderFeedback()}>
            Finalizar contratação
            <img src={imgArrow} />
          </div>
        </div>
      </div>
    }

    return <div class="spinner">
    <span class="spinner-inner-1"></span>
    <span class="spinner-inner-2"></span>
    <span class="spinner-inner-3"></span>
  </div>

  }

  renderFeedback = () => {
    this.setState({assegurado: true})
    let thes = this;
    setTimeout(function(){ thes.setState({buy: true}) }, 3000);
  }

  render(){
    return(
      <div className="LifeView">
        {
          !this.state.assegurado ? 
            <Fragment> 
              <div className="LifeView-insurer">
                <div style={{display: 'flex', alignItems: 'center'}}> 
                  <img src={imgMontreal} />
                  <div className="LifeView-insurer-content">
                    <div className="LifeView-insurer-content-title">Mongeral Aegon</div>
                    <div className="LifeView-insurer-content-subtitle">Seguros e previdência</div>
                  </div>  
                </div>
                <div className="LifeView-insurer-influencer">
                  {this.props.life.quote.influencer_name}
                </div>

              </div>
              {
                this.renderLife(this.props.life)
              }      
            </Fragment>
          : this.state.buy ? 
                <div className="buy"> 
                  <img src={checkCircle}  />
                  <div className="buy-title">Compra realizada com sucesso!</div>
                  <div className="buy-subtitle">A partir de agora você está assegurado!</div>
                </div> 
              : <div class="spinner">
                <span class="spinner-inner-1"></span>
                <span class="spinner-inner-2"></span>
                <span class="spinner-inner-3"></span>
              </div>
        }
          
      </div>
    )
  }
}

LifeView.defaultProps = {

}

LifeView.propTypes = {

}

export default LifeView