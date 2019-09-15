import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Creators as InsurerActions} from '../../redux/reducers/Insurer'
import PropTypes from 'prop-types'
import './ConectionInsurer.scss'
class ConectionInsurer extends Component {

  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  componentDidMount = () => {
    this.props.postLife();
    this.props.postTrip();
    this.props.getInsurer(1);
  }

  returnRender = (params) => {
    if (params.insurer == "life") {
      return <div> Life </div>
    } else if (params.insurer == "trip"){
      return <div> Trip </div>
    } 

    return <div> Empty </div>
  }

  render(){
    console.log("Conection", this.props.match.params.insurer == "life")
    return(
      <div>
        {this.returnRender(this.props.match.params)}
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
    initial:[]
  }
}

export default connect(mapStateToProps, {...InsurerActions})(ConectionInsurer)