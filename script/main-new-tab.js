import contentTab from "../content/tab.js"; 
import { renderTab } from "./main-new-render-tab.js";

renderTab(contentTab);

const tabs = document.querySelectorAll('.tab__product');
const items = document.querySelectorAll('.catalog__items');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    items.forEach(item => item.classList.remove('active'));
    tab.classList.add('active');
    items[index].classList.add('active');
  });
});
