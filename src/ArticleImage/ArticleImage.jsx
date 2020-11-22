import React from 'react';

import styles from './ArticleImage.module.css'

const ArticleImage = ({url, title}) => {
    return (
      <img className = {styles.imageStyle} src={url} alt={title} />
    );
  };
  
  export default ArticleImage;