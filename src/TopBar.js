import React from 'react';
import classes from './TopBar.module.css'

const TopBar =()=>{
    return(
    <header className="App-header">
      <nav  className={classes.topbar}>
      <img src="http://pluspng.com/img-png/amazon-logo-vector-png-eps-amazon-logo-png-662.png" alt="Amazon Logo Vector PNG"/>
      </nav>
      </header>
    );
}
 
export default TopBar;