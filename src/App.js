import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const name = "Eusha"
  const person = {
    name : "Eusha L",
    job : "Programmer",
    salary : "5 Million Per Year "
  }

  var style = {
    color : "gray",
    backgroundColor : "white"
    
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit React <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Heading</h1>
        <p>Doing Math : {2+4}</p>
        <p>Finding Name : {name}</p>
        <p style={style}>Personal Information : {person.name} and he is a {person.job}.His salary is {person.salary}</p>
        <p style ={{backgroundColor : 'gray'}}>My first React Paragraph </p>
        <NewPerson></NewPerson>
        <NewPerson></NewPerson>
        <NewPerson></NewPerson>

        {/* Dynamic way  */}
        <HerosAndHeroin nayok  = 'Sakib' nayika = 'Mousumi'></HerosAndHeroin>
        <HerosAndHeroin nayok  = 'Manna' nayika = 'Purnima'></HerosAndHeroin>
        <HerosAndHeroin nayok  = 'Riaz' nayika = 'Sabnur'></HerosAndHeroin>

        {/* Dynamic way using Array  */}
  
        <Array personName ={arrayNames[0]} ></Array>
        <Array personName ={arrayNames[1]} ></Array>
        <Array personName ={arrayNames[2]} ></Array>

        {/* //Object into Array */}
        <Products productName= {productNames[0]}></Products>
        <Products productName= {productNames[1]}></Products>
        <Products productName= {productNames[2]}></Products>

        {/* Making list of names and Product */}

        <ul>
          {
            arrayNames.map(name => <li>{name}</li>)
          }
          {
            productNames.map(product => <li>{product.name}and its price is {product.price}</li>)
          }
        </ul>
          {/* Short System for product*/}
        {
          productNames.map(product => <Products productName={product}></Products>)
        }

        {/* Short system for Name */}

        {
          arrayNames.map(murubbi => <Array personName={murubbi}></Array>)
        }
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}
// Api Calling
function Users() {
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <h3>Dynamic Users : {users.length}</h3>
      <div>
        <ul>
      {
        users.map(user=> <li>{user.name}</li>)
      }
      </ul>
      </div>
    </div>
  )
}
const arrayNames = ['Abul','gofur','Jobbar']
// Object into Array
const productNames = [
  {name : 'PhotoShop' , price : '$1200'},
  {name : 'PhotoShop1' , price: '$12001'},
  {name : 'PhotoShop2' , price : '$12002'}
]
// Making Counter:
function Counter() {
  const [count, setCount] = useState(0);
  // const increase = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  const decrease = () => {
    const newCount= count - 1;
     
    if (newCount >= 0 ) {
      setCount(newCount)
    } 
  }
  return (
    <div>
      <h1>Count : {count} </h1>
      <button onMouseMove={() => setCount(count + 1)} style={{fontSize :'30px',borderRadius:'10px',margin:'10px'}}>Increase</button>
      <br/>
      <button onMouseMove = {decrease} style={{fontSize :'30px',borderRadius:'10px',margin:'10px'}}>Decrease</button>
    </div>
  )
}
//making components :
function NewPerson() {
  const NewSinglePersonStyle = {
    color: 'gray'
  }
  return (
    <div style={{border:'5px solid gray', margin: '5px', padding: '5px', float:'left', borderRadius:'10px'}}>
      <h1>Eusha</h1>
      <p style = {NewSinglePersonStyle}>Top Class Programmer</p>
      <p>Earns 5 Million Per Year </p>
    </div>
  )
}

// Dynamic Way 

function HerosAndHeroin(modelName) {
  const HerosAndHeroinStyle = {
    color : 'gray',
    border : '3px solid gray ',
    borderRadius : '10px',
    margin : '10px',
    padding : '10px'
  }
  return(
    <div style = {HerosAndHeroinStyle}>
      <h1>Name: {modelName.nayok} </h1>
      <h3>Name: {modelName.nayika} </h3>
    </div>
  )
}

function Array(arr) {
  const HerosAndHeroinStyle = {
    color : 'gray',
    border : '3px solid gray ',
    borderRadius : '10px',
    margin : '10px',
    padding : '10px'
  }
  console.log(arr);
  return(
    <div style= {HerosAndHeroinStyle}>
      <h1>Name :{arr.personName} </h1>
      <h3> Name :{arr.personName} </h3>
    </div>
  )
}

function Products(pros) {
  const productStyle = {
    color : 'gray',
    border : '3px solid gray ',
    borderRadius : '10px',
    margin : '10px',
    padding : '10px'
  }
  return(
    <div style={productStyle}>
      <h1>{pros.productName.name}</h1>
      <h3>{pros.productName.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
