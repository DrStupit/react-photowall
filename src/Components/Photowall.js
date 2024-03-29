import React from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Statless function - Only when method contains only a render method...
function Photowall(props) {
  return (
    <div>
    <Link to="/AddPhoto" className='addIcon'></Link>
      <div className='photoGrid'>
        {props.posts.sort(function(x, y){
          return y.id - x.id
        }).map((post, index) => (
          <Photo key={index} post={post} onRemovePhoto={props.onRemovePhoto} />
        ))}
      </div>
    </div>
  )
}

Photowall.propTypes = {
  posts: PropTypes.array.isRequired,
  onRemovePhoto: PropTypes.func.isRequired
}

export default Photowall
