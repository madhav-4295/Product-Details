import React from 'react';
import classes from './ProductDetail.module.css';
const ProductDetail=(props)=>{
    console.log(props.data)
    //to render the component create a function for choosing color

    const colorOptions = props.data.colorOptions.map((item, pos)=>{
        const classArray=[classes.ProductImage]
        if(pos===props.currentPreviewImagePos){
            classArray.push (classes.SelectedProductImage);
        }
    
        return(
            
            <img key={pos} className={classArray.join(' ')} src= {item.imageUrl} alt={item.styleName}
            onClick={()=>props.onColorOptionClick(pos)}/>

        );
    })
    const featureList= props.data.featureList.map((item,pos)=>{
        const classArray=[classes.FeatureBtn];
        if(pos===1 && props.showHeartBeat){
            classArray.push(classes.SelectedFeature);
        }
        else if( pos===0 && !props.showHeartBeat){
            classArray.push(classes.SelectedFeature);
        }
       
        return(

            <button onClick={()=>props.onFeatureItemClick(pos)} className={classArray.join(' ')}>{item}</button>
        )

        })
    return(


        <div className={classes.ProductData}>
          <h1 className={classes.ProductTitle}>{props.data.title}</h1>
          <p className={classes.ProductDescription}>{props.data.description}</p>
        
          <h3 className={classes.SectionHeading}>Select Colors</h3>
          <div>
            
              {colorOptions}
            {/*<img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src='https://imgur.com/iOeUBV7.png' alt="black-color"/>
            <img className={classes.ProductImage} src='https://imgur.com/PTgQlim.png' alt="red-color"/>
            <img className={classes.ProductImage} src='https://imgur.com/Mplj1YR.png' alt="blue-color"/>
            <img className={classes.ProductImage} src='https://imgur.com/xSIK4M8.png' alt="purple-color"/>
            */}
            
          </div>
          <h4 className={classes.SectionHeading}>Features</h4>
          <div>
              {featureList}
            {/*<button className={[classes.FeatureBtn, classes.SelectedFeature].join(' ')}>Time</button>
            
            <button className={classes.FeatureBtn}>Heartbeat</button>
        */}
          </div>
          <button className={classes.PrimaryBtn}>Buy Now</button>

        </div>

    );

}

export default ProductDetail;
