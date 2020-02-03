import React from 'react';
import Product from './Product';
import { seed } from './seed';

class ProductList extends React.Component {
  render() {
    const product = seed.products[0];
    const {
      id,
      title,
      description,
      votes,
      submitterAvatarUrl,
      productImageUrl
    } = product;
    return (
      <div className='item-list'>
        <Product
          id={id}
          title={title}
          description={description}
          votes={votes}
          avatar={submitterAvatarUrl}
          productImage={productImageUrl}
        />
      </div>
    );
  }
}

export default ProductList;
