import React from './node_modules/react';
 
// Forma n1 de crear un componente con react
// Mi Primer componente
// Export por default
export default class componenteFooter extends React.Component{
  render(){
    return(
      <footer>
        <p>Copyright © 20199999999999999999999999999999</p>
      </footer>
    );  
  }
}
export function hola(){
  return 'hola';
}