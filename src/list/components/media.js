import React,{ Component } from 'react';
//import './media.css';


class Media extends React.Component{
  render(){
    const styles = {
      container:{
          fontSize:18,
          backgroundColor: 'white',
          color:'#44546b',
          cursor:'pointer',
          width:260,
          border:'1px solid red',

      }
    }
    return(
      <div style={styles.contain}>
        <div>
          <img
              src="./img/mueble.jpg"
              alt=""
              width={260}
              height={160}
            />
            <h3> MetalPower</h3>
            <p>Eber peña</p>
            </div>
          </div>
    )
  }
}

export default Media;
