import tableData from './data';
import React, { useState } from 'react';
import './App.css';

function App() {
  let copyData = [...tableData];
  const [data, setData] = useState(copyData);
  const [sortType, setSortType] = useState('asc');
  const [sortCount, setSortCount] = useState('asc');
  let [checked, setChecked] = useState(false);
  let [checkedCount, setCheckedCount] = useState(false);
  


  const sortByPrice = () => {
    let sorted = data;
    if(sortType === 'asc') {
      setSortType('desc');
      setData(sorted.sort((a, b) => parseInt(b.price.replace(/ /g, '')) - parseInt(a.price.replace(/ /g, ''))));
    }else {
      setSortType('asc');
      setData(sorted.sort((a, b) => parseInt(a.price.replace(/ /g, '')) - parseInt(b.price.replace(/ /g, ''))));
    }
  }

  const sortByCount = () => {
    let sorted = data;
    if(sortCount === 'asc') {
      setSortCount('desc');
      setData(sorted.sort((a, b) => a.count - b.count));
    }else {
      setSortCount('asc');
      setData(sorted.sort((a, b) => b.count - a.count));
    }
  }

  const filterTable = () => {
    let filtered = data.filter(item => item.instalment);
    
    if(!checked && !setChecked(false)) {
      setData(filtered);
      setChecked(true);
    }else if(!checkedCount && checked){
      setData(copyData);
      setChecked(false);
    }else {
      setData(filtered);
      setChecked(false);
    }
  }
  

  const filterTableByCount = () => {
    let filteredByCount = data.filter(item => item.count > 0);
    
    if(!checkedCount && !setCheckedCount(false)) {
      setData(filteredByCount);
      setCheckedCount(true);
    }else if(!checked && checkedCount) {
      setData(copyData);
      setCheckedCount(false);
    }else {
      setData(filteredByCount);
      setCheckedCount(false);
    }

  }
  
  return (
    <div className='App'>
      <div className='input_group'>
        <div className="installment_check_block">
          <input type="checkbox" id="installment" name="installment" onClick={filterTable} />
          <label forhtml="installment">Только в рассрочку</label>
        </div>
        <div className="inStock_check_block">
          <input type="checkbox" id="inStock" name="inStock" onClick={filterTableByCount} />
          <label forhtml="inStock">Есть в наличии</label>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th><button className='price_btn'  onClick={sortByPrice}>Цена<span className="icons descending_icon">&nbsp;{( sortType === 'desc') ? '↓' : '↑'}</span></button></th>
            <th><button className='price_btn' onClick={sortByCount}>Количество</button></th>
            <th>В рассрочку</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className={(item.count < 5) ? 'minimum' : ''} key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{(item.count === 0) ? 'Нет в наличии' : item.count}</td>
              <td>{(item.instalment) ? '✅' : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
