import React, { Component } from 'react';
import logo from './logo.svg';
import classes from'./App.module.css';
// it got automatically imported from file product detail   import ProductData from './product';
import ProductPreview from './ProductPreview';
import ProductDetail from './ProductDetail';
import TopBar from './TopBar'
import ProductData from './Product';

//to add state change it too class type
class App extends Component{
  state={
    productdata: ProductData,
    //currentPreviewImage:'https://imgur.com/xSIK4M8.png',
    currentPreviewImagePos:0,
    showHeartBeat: false,
   
  }
  //to chnage the color of the item on click

  onColorOptionClick=(pos)=>{
    this.setState({currentPreviewImagePos:pos})
  }

  onFeatureItemClick=(pos)=>{
    let updatedstate= false;
    if(pos===1){
      updatedstate= true;
    }
    this.setState({showHeartBeat:updatedstate})

  }

  render(){
    return(
        <div className="App">
          < TopBar />
          <div className={classes.MainContainer}>
            <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage={this.state.productdata.colorOptions
              [this.state.currentPreviewImagePos].imageUrl} showHeartBeat={this.state.showHeartBeat} 
              />
            </div>
            <div className={classes.ProductData}>
              <ProductDetail data={this.state.productdata} currentPreviewImagePos={this.state.currentPreviewImagePos} onColorOptionClick={this.onColorOptionClick}
              onFeatureItemClick={this.onFeatureItemClick} showHeartBeat={this.state.showHeartBeat}/>
    
            </div>
            
          </div>
            
        </div>
    
    );
  }
}
  
  
  

export default App;


//function type

/*function App() {
  
  
  return (
    <div className="App">
      < TopBar />
      <div className={classes.MainContainer}>
        <div className={classes.ProductPreview}>
          <ProductPreview />
        </div>
        <div className={classes.ProductData}>
          <ProductDetail />

        </div>
        
      </div>
        
    </div>
  );
} */
