import React, { Component } from 'react';
import * as actions from '../actions/corrceting';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CommonIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: '',
      visible: false,
      headerName: '练习1111111111'
    };
  }
  componentDidMount(){
    this.props.actions.getQuesList().then(res=>{
      console.log(res)
    })
    console.log(this.props.questionInfoList)
  }
  render() {
    return (
    	<span>zuoyea</span>
      );
  }
}
export default connect(
  state => {
      return { questionInfoList: state };
  },
  dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
  }
)(CommonIndex);