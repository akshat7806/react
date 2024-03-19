import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import FoodItems from './components/FoodItems'
import ErrorMsg from './components/errorMsg'
import "bootstrap/dist/css/bootstrap.min.css"
import Container from './components/container'
import FoodInput from './components/foodinput'
function App() {
  let foodItems = ['sbzi','Green Vegetable','Roti','salad','milk','ghee'];
  return (
  <>
  <Container>
  <h2 className="list-group-item active" aria-current="true">Healthy Food</h2>
  <ErrorMsg items={foodItems}></ErrorMsg>
  <FoodInput></FoodInput>
  <FoodItems items={foodItems}></FoodItems>
  </Container>
</>
);
}
export default App;
