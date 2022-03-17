import tableData from "./data.js";
const body = document.getElementById("body");

const tableHeaderName = { id: "№", name: 'Название', price: 'Цена', count: 'Количество', instalment: 'В рассрочку' };



let table = document.createElement("table");
let check = document.querySelector("input[type=checkbox]");
let clickOnPrice = false;
let clickOnCount = false;

function renderHeader() {
    let thead = document.createElement('thead');
    table.appendChild(thead);
    Object.values(tableHeaderName).forEach(val => {
        let th = document.createElement('th');
        th.innerHTML = `<button ${(val === "Цена") ? `class="price_btn"` : ''}>${(val === 'Цена') ? `${val} <span class="icons descending_icon">&nbsp;↑</span>` : `${val}`}</button>`;
        thead.append(th);
    });
}


function renderTable(data) {
    
    for(let i = 0; i < data.length; i++) {
    
        let td = data[i];
        if(i === 0) {
            renderHeader();
        }
        let row = table.insertRow();
        Object.keys(td).forEach((item) => {
            let cell = row.insertCell();
            cell.appendChild(document.createTextNode(td[item]))
            
            if(item === 'instalment') {
                if(td[item] === true) cell.textContent = '✅';
                else cell.textContent = '';
            }
            if(item === 'count') {
                if(td[item] === 0) cell.textContent = 'Нет в наличии';
            }
        });
    }

    body.appendChild(table);
    const priceBtn = document.querySelector('.price_btn');
    const countBtn = [...table.getElementsByTagName('button')].find(item => item.innerText === 'Количество');
    priceBtn.addEventListener('click', sortByPrice);
    countBtn.addEventListener('click', sortByCount);
    
}
renderTable(tableData);

function sortByCount() {
    table.innerHTML = '';
    let sorted = tableData;
    
    if(!clickOnCount) {
        sorted.sort((a, b) => (a.count - b.count));
        clickOnCount = true;
    }else {
        sorted.sort((a, b) => (b.count - a.count));
        clickOnCount = false;
    }

    toQueue(sorted);
    renderTable(sorted);
    filterTable();
}


function sortByPrice() {
    table.innerHTML = '';
    let sorted = tableData;

    if(!clickOnPrice) {
        sortInAscending(sorted);
    }else {
        sortInDescending(sorted);
    }

    toQueue(sorted);
    renderTable(sorted);
    filterTable();
}

function toQueue(data) {
    data.forEach((item, i) => item.id = i + 1);
}

function sortInAscending(sorted) {
    sorted.sort((a, b) => parseInt(a.price.replace(/ /g, '')) - parseInt(b.price.replace(/ /g, '')));
    clickOnPrice = true;
}

function sortInDescending (sorted) {
    sorted.sort((a, b) => parseInt(b.price.replace(/ /g, '')) - parseInt(a.price.replace(/ /g, '')));
    clickOnPrice = false;
}


function filterTable() {
    
    let filtered = tableData.filter(item => item.instalment);
    
    if(check.checked) {
        table.innerHTML = '';
        toQueue(filtered);
        renderTable(filtered);
    }else {
        table.innerHTML = '';
        renderTable(tableData);
    }
    
}
filterTable();

check.addEventListener('change', filterTable);