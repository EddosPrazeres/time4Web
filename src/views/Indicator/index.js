import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Header } from '../../components'
import './Indicator.scss'

class Indicator extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="Indicator">
        <Header Indicator={"on"}/>
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