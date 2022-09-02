import logo from './logo.svg';
import './App.css';
import {Store} from './components/Store';
import {Product} from './components/Product';



function App() {
  const base = [
    {
      "id": 1,
      "name": "Антистеплер",
      "price": 15,
      "count": 5,
      "img": './img/1.jpg'
    },
  
    {
      "id": 2,
      "name": "Клейкая бумага",
      "price": 20,
      "count": 7,
      "img": './img/2.jpg'
    },
  
    {
      "id": 3,
      "name": "Дырокол",
      "price": 45,
      "count": 3,
      "img": './img/3.jpg'
    },
  
    {
      "id": 4,
      "name": "Зажимы",
      "price": 80,
      "count": 120,
      "img": './img/4.jpg'
    },
  
    {
      "id": 5,
      "name": "Клей карандаш",
      "price": 30,
      "count": 2,
      "img": './img/5.jpg'
    }
  ]

  

  return (
    <div className="App">
      <Store/>
    <table className="Table_wrapper">
      <tr>
      <th>Наименование</th>
      <th>Цена</th>
      <th>Количество</th>
      <th>Вид</th>
      </tr>
      {
        base.map(item => {
        return <Product index = {item.id}
        name = {item.name}
        price = {item.price}
        count = {item.count}
        img =  {item.img}/>
        })
      }
    </table>
    </div>
  );
}

export default App;
