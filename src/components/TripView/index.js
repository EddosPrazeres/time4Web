import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import './TripView.scss'
import imgMontreal from '../../assets/montreal.png'
import imgArrow from '../../assets/arrow-right-solid.svg'
import checkCircle from '../../assets/check-circle-regular.svg'

class TripView extends Component {
  constructor(props){
    super(props)
    this.state = {
      assegurado: false,
      buy: false
    }
  }

  renderLife = (trip) => {
    console.log("Cote", trip)
    if (trip) {
      let cover = trip.simulation.beneficios;
      return <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          cover.map((item) => {
            return <div className="CardTrip">
              <div className="CardTrip-title"> {item.apelido ? item.apelido : "Não definido"} </div>
              <div className="CardTrip-subtitle"> {item.descricao} </div>
              
                <div className="CardTrip-footer-submit" onClick={()=> this.renderFeedback()}>
                  Finalizar contratação
                  <img src={imgArrow} />
              
              </div>
            </div>
          })
        }
        
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
      <div className="TripView">
        {
          !this.state.assegurado ? 
            <Fragment> 
              <div className="TripView-insurer">
                <div style={{display: 'flex', alignItems: 'center'}}> 
                  <img src={imgMontreal} />
                  <div className="TripView-insurer-content">
                    <div className="TripView-insurer-content-title">Mongeral Aegon</div>
                    <div className="TripView-insurer-content-subtitle">Seguros e previdência</div>
                  </div>  
                </div>
                <div className="TripView-insurer-influencer">
                  {this.props.trip.quote.influencer_name}
                </div>

              </div>
              {
                this.renderLife(this.props.trip)
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

TripView.defaultProps = {

}

TripView.propTypes = {

}

export default TripView