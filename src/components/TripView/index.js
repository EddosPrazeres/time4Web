import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TripView.scss'

class TripView extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        123
        {console.log("123", this.props)}
      </div>
    )
  }
}

TripView.defaultProps = {

}

TripView.propTypes = {

}

export default TripView