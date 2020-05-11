import React from 'react';
import {connect} from 'react-redux';
import {homePageAction1,DATA_REQUESTED} from '../redux/action';

const mapStateToProps = state =>{ 
    return {homePageState: state.homePageState} 
  } 
  
function mapDispatchToProps(dispatch){ 
  return { 
    homePageAction1: payload => dispatch(homePageAction1(payload)) ,
    DATA_REQUESTED: payload => dispatch(DATA_REQUESTED(payload)) ,
    }
  } 

class Home extends React.Component{
  
  constructor(props){
    super(props);
  }

  handleClick(){
    let payload = {payload : 'click'}
    this.props.homePageAction1(payload);
  }

  handleRestCall(){
    let payload = {};
    this.props.DATA_REQUESTED(payload);
  }

  render(){
    debugger
    return(
      <div>
        <h1>Home page.</h1>
        <button onClick={this.handleClick.bind(this)} >click me.</button>
        <button onClick={this.handleRestCall.bind(this)}>Rest call</button>
      </div>
    ) 
  }
}
  
export default connect( 
  mapStateToProps, 
  mapDispatchToProps 
  )(Home);
