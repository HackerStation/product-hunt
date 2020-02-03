import React from 'react';
import Product from './Product';
import { seed } from './seed';

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: seed.products.sort((a, b) => b.votes - a.votes)
    });
  }

  render() {
    return (
      <div className='item-list'>
        {this.state.products.map(product => (
          <Product
            key={`product-${product.id}`}
            id={product.id}
            title={product.title}
            description={product.description}
            votes={product.votes}
            avatar={product.submitterAvatarUrl}
            productImage={product.productImageUrl}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
