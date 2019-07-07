import React, { useState } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../actions';

const List = () => {
  const [products] = useState(0);
  debugger

  return (
    <> {products.map(product => product.title)} </>
  );
};

const mapStateToProps = (state) => {
  const { products } = state.productsReducer;

  return {
    products
  };
}

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
