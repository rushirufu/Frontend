// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './App.js';

// ReactDOM.render(<Car />, document.getElementById('consola'));


// const withJSX = <h2>I Love JSX!</h2>;
// // Se crea un elemento utilizando crear elemento del objeto React
// const withOutJSX = React.createElement('h2', {}, 'I do not use JSX!');
// ReactDOM.render(withJSX, document.getElementById('nodoA'));
// ReactDOM.render(withOutJSX, document.getElementById('NodoB'));
// // Operaciones matematicas
// const operaciones = <h2>Operaciones 5+5 = {5 + 5} .Operacion realizada con JSX</h2>;
// ReactDOM.render(operaciones, document.getElementById('NodoC'));

// const menu = (
//     <ul>
//       <li>Home</li>
//       <li>Products</li>
//       <li>LogIn</li>
//       <li>SingIn</li>
//     </ul>
//   );
// ReactDOM.render(menu, document.getElementById('NodoC'));

//
// class Car extends React.Component {
//     render() {
//       return <h2>Hi, I am a Car!</h2>;
//     }
//   }
//   ReactDOM.render(<Car />, document.getElementById('NodoA'));

//   function Car2() {
//     return <h2>Hi, I am also a Car!</h2>;
//   }
//   ReactDOM.render(<Car2 />, document.getElementById('NodoB'));
//

// class Car extends React.Component {
//     constructor() {
//       super();
//       this.state = {color: "red"};
//     }
//     render() {
//       return <h2>I am a {this.state.color} Car!</h2>;
//     }
//   }
  
//   ReactDOM.render(<Car />, document.getElementById('consola'));
  
// class Car extends React.Component {
//     render() {
//       return <h2>I am a {this.props.color} Car!</h2>;
//     }
//   }
  
//   ReactDOM.render(<Car color="reeeeeeed"/>, document.getElementById('consola'));

//   //

// class Car extends React.Component {
//     render() {
//       return <h2>I am a Car!</h2>;
//     }
//   }
  
//   class Garage extends React.Component {
//     render() {
//       return (
//         <div>
//         <h1>Who lives in my Garage?</h1>
//         <Car />
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Garage />, document.getElementById('consola'));


// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>
//   }
// }

// const myelement = <Car brand="Ford" />;

// ReactDOM.render(myelement, document.getElementById('consola'));



// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garageee?</h1>
//       <Car brand="Ford" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('consola'));



// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carname = "Ford";
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car brand={carname} />
//       </div>
//     );
//   }
// // }
// import React from 'react';
// import ReactDOM from 'react-dom';
// // class Car extends React.Component {
// //     render() {
// //       return <h2>I am a {this.props.brand.model}!</h2>;
// //     }
// //   }
  
// //   class Garage extends React.Component {
// //     render() {
// //       const carinfo = {name: "Ford", model: "Mustang"};
// //       return (
// //         <div>
// //         <h1>Who lives in my garage?</h1>
// //         <Car brand={carinfo} />
// //         </div>
// //       );
// //     }
// //   }
// // ReactDOM.render(<Garage />, document.getElementById('consola'));

// // class Car extends React.Component {
// //     constructor(props) {
// //       super(props);
// //     }
// //     render() {
// //       return <h2>I am a Car!</h2>;
// //     }
// //   }
  
// //   ReactDOM.render(<Car model="Mustang"/>, document.getElementById('consola'));

// class Car extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         brand: "Ford",
//         model: "Mustang",
//         color: "red",
//         year: 1964
//       };
//     }
//     render() {
//       return (
//         <div>
//           <h1>My {this.state.brand}</h1>
//           <p>
//             It is a {this.state.color}
//             {this.state.model}
//             from {this.state.year}.
//           </p>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<Car />, document.getElementById('consola'));

  
import React from 'react';
import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color}
//           {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('consola'));

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {favoritecolor: "red"};
//     }
//     render() {
//       return (
//         <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       );
//     }
//   }
  
//   ReactDOM.render(<Header />, document.getElementById('consola'));

// function shoot() {
//     alert("Great Shot!");
//   }
  
//   const myelement = (
//     <button onClick={shoot}>Take the shot!</button>
//   );
  
  
//   ReactDOM.render(myelement, document.getElementById('consola'));
// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     myChangeHandler = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       return (
//         <form>
//         <h1>Hello {this.state.username}</h1>
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }
  

// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     myChangeHandler = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       let header = '';
//       if (this.state.username) {
//         header = <h1>Hello {this.state.username}</h1>;
//       } else {
//         header = '';
//       }
//       return (
//         <form>
//         {header}
//         <p>Enter your name:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         </form>
//       );
//     }
//   }

// class MyForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { username: '' };
//     }
//     mySubmitHandler = (event) => {
//       event.preventDefault();
//       alert("You are submitting " + this.state.username);
//     }
//     myChangeHandler = (event) => {
//       this.setState({username: event.target.value});
//     }
//     render() {
//       return (
//         <form onSubmit={this.mySubmitHandler}>
//         <h1>Hello {this.state.username}</h1>
//         <p>Enter your name, and submit:</p>
//         <input
//           type='text'
//           onChange={this.myChangeHandler}
//         />
//         <input
//           type='submit'
//         />
//         </form>
//       );
//     }
//   }

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your name:</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
   ReactDOM.render(<MyForm />, document.getElementById('consola'));