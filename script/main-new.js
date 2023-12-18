let tabs = document.getElementsByClassName('tab__product');
let sections = document.getElementsByClassName('catalog__items');
window.confirm(tabs.length);

for(let i =0; i<tabs.length; i++){
   tabs[i].onclick = tabclick;
}

function tabclick(event){
  let tab = event.target;
  let tabId = tab.dataset.id;
  window.confirm("sometext");
  for(let k =0; k<tabs.length; k++){
    tabs[k].classList.remove('active');
    tabs[tabId-1].classList.add('active');

    sections[k].classList.remove('active');
    sections[tabId-1].classList.add('active'); 

  }
}
