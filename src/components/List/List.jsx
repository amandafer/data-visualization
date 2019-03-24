import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../actions';

class List extends Component {
  componentDidMount() {

  }

  render() {
    return (<>Hello</>);
  }
}

const mapStateToProps = (state, props) => {
  debugger;
  return {};
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
