import { setHeader, setFooter } from './initPage';
import { setBody } from './home'


const setHTML = () => {
  const header = setHeader();
  const footer = setFooter();
  
  // switch (tab.classList) {

  // }

  const body = setBody();


  const content = document.getElementById('content');
  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);
};

setHTML();