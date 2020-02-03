import React from 'react';
import { FaCaretUp } from 'react-icons/fa';

class Product extends React.Component {
  render() {
    return (
      <div className='item'>
        <div className='item-img' style={{ width: '30%' }}>
          <img
            src='images/products/image-aqua.png'
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='item-body' style={{ width: '65%' }}>
          <div className='item-header'>
            <button>
              <FaCaretUp color='lightskyblue' size={32} />
            </button>
            <h2>62</h2>
          </div>
          <h2 className='item-title'>Yellow Pail</h2>
          <p>On-demand sand castle construction expertise.</p>
          <div className='item-footer'>
            <span className='extra'>Submitted by:</span>
            <img src='images/avatars/daniel.jpg' alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
