import tableData from './data';
import React, { useState } from 'react';
import './App.css';

function App() {
  const copyData = [...tableData];
  const [data, setData] = useState(copyData);
  const [sortType, setSortType] = useState('default');

  const sortByPrice = () => {
    if(sortType === 'default') {
      setSortType('desc');
      setData(copyData.sort((a, b) => parseInt(b.price.replace(/ /g, '')) - parseInt(a.price.replace(/ /g, ''))));
    }else if(sortType === 'desc') {
      setSortType('asc');
      setData(copyData.sort((a, b) => parseInt(a.price.replace(/ /g, '')) - parseInt(b.price.replace(/ /g, ''))));
    }else if(sortType === 'asc') {
      setSortType('default');
      setData(tableData);
    }
}

  
  return (
    <div className='App'>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th><button className='price_btn'  onClick={sortByPrice}>Цена<span className="icons descending_icon">&nbsp;{(sortType === 'default' || sortType === 'desc') ? '↓' : '🔄'}</span></button></th>
            <th><button className='price_btn'>Количество</button></th>
            <th>В рассрочку</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.count}</td>
              <td>{(item.instalment) ? '✅' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
