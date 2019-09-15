import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as InsurerActions} from '../../redux/reducers/Insurer'
import PropTypes from 'prop-types'
import './ConectionInsurer.scss'
import { TripView, LifeView, Header, Footer } from '../../components'
import imgArrow from '../../assets/arrow-right-solid.svg'
class ConectionInsurer extends Component {

  constructor(props){
    super(props)
    this.state = {
      influencerName: "Edimilson dos Prazeres",
      solicitar: false,
      clicked: false,
      name: '',
      cpf: '',
      dataNascimento: '',
      profissao: 'Advogado',
      renda: '',
      sexo: '', 
      uf: ''
    }
  }

  returnRender = (params) => {
    if (this.state.solicitar) {
      if (params.insurer == "life") {
        return <LifeView life={this.props.postLifeData}/>
      } else if (params.insurer == "trip"){
        return <TripView trip={this.props.postTripData}/>
      } 
    }

    if (this.state.clicked) {
      return <div class="spinner">
        <span class="spinner-inner-1"></span>
        <span class="spinner-inner-2"></span>
        <span class="spinner-inner-3"></span>
      </div>
    }

    return <div className="CadastroAPI">
      <div className="CadastroAPI-title">
        Informações necessárias para a cotação
      </div>
      <div style={{display: `flex`}}>
        <div style={{display: 'flex', flexDirection: 'column', margin: '0px 16px'}}>        
          <input placeholder={"Vanesso Four"} value={this.state.name} onChange={(data)=> {this.setState({name :data.target.value})}}/>
          <input placeholder={"000.000.000-00"} value={this.state.cpf} onChange={(data)=> {this.setState({cpf :data.target.value})}}/>
          <input placeholder={"Masculino"} value={this.state.sexo} onChange={(data)=> {this.setState({sexo :data.target.value})}}/>
          <input placeholder={"13/06/1990"} value={this.state.dataNascimento} onChange={(data)=> {this.setState({dataNascimento :data.target.value})}}/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', margin: '0px 16px'}}>
          <input placeholder={"Advogado"} value={this.state.profissao}/>
          <input placeholder={"R$ 5000,00"} value={this.state.renda} onChange={(data)=> {this.setState({renda :data.target.value})}}/>        
          <input placeholder={"RJ"} value={this.state.uf} onChange={(data)=> {this.setState({uf :data.target.value})}}/>
          <div className="CadastroAPI-submit" onClick={()=> {
            this.setState({clicked: true})
            this.props.postLife(this.state.name, this.state.cpf, this.state.sexo, this.state.dataNascimento, this.state.profissao, this.state.renda, this.state.uf, this.state.influencerName).then(()=> {
              this.setState({solicitar: true})
            });
          }}>
            Solicitar cotação
            <img src={imgArrow} />
          </div>
        </div>
      </div>
    </div>
  }

  render(){
    console.log("Conection", this.props.postLifeData)
    return(
      <div>
        <Header />
        <div style={{minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {this.returnRender(this.props.match.params)}
        </div>
        <Footer />
      </div>
    )
  }
}

ConectionInsurer.defaultProps = {

}

ConectionInsurer.propTypes = {

}

const mapStateToProps = state => {
  return {
    initial:[],
    postTripData: state.Insurer.postTripData,
    postLifeData: state.Insurer.postLifeData
  }
}

export default connect(mapStateToProps, {...InsurerActions})(ConectionInsurer)