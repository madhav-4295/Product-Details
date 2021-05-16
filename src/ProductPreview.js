import React from 'react';
import classes from './productpreview.module.css'

const ProductPreview=(props)=>{
    const CurrentHour=new Date().getHours()>9 ? new Date().getHours(): '0'+new Date().getHours();
    const CurrentMin=new Date().getMinutes()>9 ? new Date().getMinutes(): '0'+new Date().getMinutes();

    return(
        <div className={classes.ProductPreview}>
          <img src={props.currentPreviewImage}></img>

          {
            props.showHeartBeat ?
            <div className={classes.FeatureHeart}>
                <p>78</p>
            </div>
            :
            <div className={classes.FeatureTime}>
                <p >{`${CurrentHour}:${CurrentMin}`}</p>
            </div>
          }  
          
        </div>
        
    );
}

export default ProductPreview; 