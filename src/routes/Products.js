import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, my_products }) => {
  function handleDelete(id) {
    dispatch({
      // type: 'my_products/delete',
      type: 'my_products/deleteAfter1s',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={my_products} />
    </div>
  );
};

// export default connect(
//   ({ my_products }) => ({
//     my_products,
//   })
// )(Products);


let mapStateToProps = ({ my_products }) => ({
  my_products: my_products,
});

let b = connect(mapStateToProps);

let c = b(Products);

export default c;



