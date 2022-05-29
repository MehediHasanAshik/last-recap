import './App.css';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Welcome to MealDB</h1>
      <Meals/>
    </div>
  );
}

export default App;
