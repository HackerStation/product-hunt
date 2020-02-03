import React from 'react';
import Product from './Product';
import { seed } from './seed';

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({
      products: seed.products
    });
  }

  handleProductUpVote = productId => {
    const updatedProducts = this.state.products.map(product => {
      if (product.id === productId) {
        const newProduct = { ...product };
        newProduct.votes++;
        return newProduct;
      }
      return product;
    });
    this.setState({
      products: updatedProducts
    });
  };

  render() {
    const products = this.state.products.sort((a, b) => b.votes - a.votes);
    return (
      <React.Fragment>
        <h1 className='main-title'>Popular Products</h1>
        <div className='item-list'>
          {products.map(product => (
            <Product
              key={`product-${product.id}`}
              id={product.id}
              title={product.title}
              description={product.description}
              votes={product.votes}
              avatar={product.submitterAvatarUrl}
              productImage={product.productImageUrl}
              productUrl={product.url}
              onVote={id => this.handleProductUpVote(id)}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
