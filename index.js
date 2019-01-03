import React from 'react';
import { render } from 'react-dom';
import Media from './src/list/components/media.js'




const app = document.getElementById('app')
//console.log('Hola mundo')
const holaMundo = <h1>Hola mundo!!</h1>;
render(<Media/>, app);
