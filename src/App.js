
import './App.css';
import Layout from './conponents/Layout/Layout';
import PizzaBuilder from './conponents/PizzaBuilder/PizzaBuilder';
// import PizzaBuilder from './conponents/PizzaBuilder/PizzaBuilder';


function App() {
  return (
    <div className="App">
     <Layout>
       Builder
      <PizzaBuilder/>
     </Layout>
    </div>
  );
}

export default App;
