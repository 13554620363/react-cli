import React, { Component } from 'react';
import * as actions from '../actions/corrceting';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Spin } from 'antd';


class CommonIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: '',
      visible: false,
      headerName: '练习1111111111'
    };
  }
  handleClick() {
    this.props.actions.getQuesList()
  }
  componentDidMount() {
    this.props.actions.getQuesList().then(res => {
      console.log(res)
    })
  }
  render() {
    return (
      <div onClick={()=>this.handleClick()}>
        {this.state.headerName}
        <Spin spinning={this.props.questionInfoList.loading} />
      </div>
    );
  }
}
export default connect(
  state => {
    return { questionInfoList: state.Test };
  },
  dispatch => {
    return { actions: bindActionCreators(actions, dispatch) };
  }
)(CommonIndex);