import React from 'react';
import { FaCaretUp } from 'react-icons/fa';

class Product extends React.Component {
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  };
  render() {
    const {
      id,
      title,
      description,
      votes,
      avatar,
      productImage,
      productUrl
    } = this.props;
    return (
      <div id={id} className='item'>
        <div className='item-img' style={{ width: '25%' }}>
          <img
            src={productImage}
            alt=''
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className='item-body' style={{ width: '65%' }}>
          <div className='item-header'>
            <button onClick={this.handleUpVote}>
              <FaCaretUp color='lightskyblue' size={32} />
            </button>
            <h2>{votes}</h2>
          </div>
          <a href={productUrl}>
            <h2 className='item-title'>{title}</h2>
          </a>
          <p>{description}</p>
          <div className='item-footer'>
            <span className='extra'>Submitted by:</span>
            <img src={avatar} alt='' />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
