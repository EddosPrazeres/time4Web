import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Header.scss'
class Header extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div className="Header">
        <div className="Header-left"></div>
        <div className="Header-right">

          <div
            className={'Header-right-button'}
            // highlight={props.highlight}
            // onClick={() => console.log("click")}
          >
            <span>
              Button 1
            </span>
          </div>

          <div
            className={'Header-right-button'}
            // highlight={props.highlight}
            // onClick={() => console.log("click")}
          >
            <span>
              Button 2
            </span>
          </div>

          <div
            className={'Header-right-button'}
            // highlight={props.highlight}
            // onClick={() => console.log("click")}
          >
            <span>
              Button 3
            </span>
          </div>

          <div
            className={'Header-right-button'}
            // highlight={props.highlight}
            // onClick={() => console.log("click")}
          >
            <span>
              Button 3
            </span>
          </div>
        </div>
      </div>
    )
  }
}

Header.defaultProps = {

}

Header.propTypes = {

}

export default Header