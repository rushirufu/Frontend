import React from 'react';
import './Thumbnail.css';
import Rating from '@material-ui/lab/Rating';
function Thumbnail(){
  return (
      <div className='Thumbnail-Box'>
        <div className='Thumbnail-Img'>
          <img src ="https://images-na.ssl-images-amazon.com/images/I/51EpjAt9YIL.jpg" />
        </div>

        <div className='Thumbnail-Title'>
          <h3>Title Video Here</h3>
          <Rating />

        </div>
      </div>
    );
}
export default Thumbnail;
