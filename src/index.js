import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import loginReducer from './components/reducer/loginPageReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  toolbarItems:[
    {
      id: 0,
      toolName: "Рабочий стол",
      src: './images/bi.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 1,
      toolName: "Справочники",
      src: './images/chat.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 2,
      toolName: "Закупки",
      src: './images/customs.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 3,
      toolName: "Склад",
      src: './images/dashboard.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 4,
      toolName: "Продажи",
      src: './images/finance.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 5,
      toolName: "Розничная торговля",
      src: './images/form.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 6,
      toolName: "Финансы",
      src: './images/lock.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 7,
      toolName: "Цена",
      src: './images/machinery.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 8,
      toolName: "Оборудование",
      src: './images/manufacturing.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 9,
      toolName: "Транспорт",
      src: './images/open.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 10,
      toolName: "ВЭД",
      src: './images/priceList.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 11,
      toolName: "Производство",
      src: './images/purchase.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 12,
      toolName: "WMS",
      src: './images/retail.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 13,
      toolName: "Чат",
      src: './images/sale.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 14,
      toolName: "Учетная запись",
      src: './images/search.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 15,
      toolName: "Поиск",
      src: './images/stock.png',
      alt: "dashboard",
      isActive: false
    },
    {
      id: 16,
      toolName: "WMS",
      src: './images/wms.png',
      alt: "dashboard",
      isActive: false
    }
  ],
  profile: {
    account: {
      login: "",
      password: ""
    },
    isAuthorizated: false
  }
};

const store = createStore(loginReducer, initialState, composeWithDevTools());

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

serviceWorker.unregister();