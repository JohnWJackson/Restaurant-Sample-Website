const setHeader = () => {
  const header = document.createElement('h1');
  header.id = "header";

  const heroName = document.createElement('div');
  heroName.id = "heroName";
  heroName.textContent = "Alice's Restaurant";
  header.appendChild(heroName);

  // Attach tabs
  const tabs = setTabs();
  header.appendChild(tabs);

  return header;
}

const setTabs = () => {
  const tabsContainer = document.createElement('div');
  tabsContainer.id = "tabs_container";

  const div1 = document.createElement('div');
  div1.className = 'tab';
  div1.textContent = 'Home'
  div1.id = 'home_tab'
  tabsContainer.appendChild(div1);

  const div2 = document.createElement('div');
  div2.className = 'tab';
  div2.textContent = 'Menu'
  div2.id = 'menu_tab'
  tabsContainer.appendChild(div2);

  const div3 = document.createElement('div');
  div3.className = 'tab';
  div3.textContent = 'Contact'
  div3.id = 'contact_tab'
  tabsContainer.appendChild(div3);

  return tabsContainer;
}

const setFooter = () => {
  const footer = document.createElement('div');
  footer.id = "footer"

  return footer;
}

const setBody = () => {
  const body= document.createElement('div');
  body.id = 'content_bg';

  for (var i = 0; i < 4; i++) { // Make 4 div's
    const div = document.createElement('div');
    div.className = 'content_box';
    body.appendChild(div);
  }
  return body;
}

const setHTML = () => {
  const header = setHeader();
  const footer = setFooter();
  const body = setBody();


  const content = document.getElementById('content');
  content.appendChild(header);
  content.appendChild(body);
  content.appendChild(footer);
};

export { setHTML };

