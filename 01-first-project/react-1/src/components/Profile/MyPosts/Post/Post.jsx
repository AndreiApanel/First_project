import React from 'react';
import s from './Post.module.css';
const Post = (props) => {
  return <div className={s.item}>
    <img src='https://yt3.ggpht.com/ytc/AKedOLQf5MBcFSDzo2FeZIXSqafCvdRMGjW2C-0j8RpD=s900-c-k-c0x00ffffff-no-rj'></img>
    {props.message}
    
    <div>
      <span>like </span>{props.likesCount}
    </div>

  </div>
}

export default Post