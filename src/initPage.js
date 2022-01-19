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
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div1.className = 'tab';
  div1.textContent = 'Home'
  div1.id = 'home_tab'
  div1.classList.add('current_tab');
  div1.addEventListener('click', function() {
    div1.classList.remove('current_tab');
    div1.classList.add('current_tab');
    div2.classList.remove('current_tab');
    div3.classList.remove('current_tab');
  })
  tabsContainer.appendChild(div1);


  div2.className = 'tab';
  div2.textContent = 'Menu'
  div2.id = 'menu_tab'
  div2.addEventListener('click', function() {
    div2.classList.add('current_tab');
    div1.classList.remove('current_tab');
    div3.classList.remove('current_tab');
  })
  tabsContainer.appendChild(div2);


  div3.className = 'tab';
  div3.textContent = 'Contact'
  div3.id = 'contact_tab'
  div3.addEventListener('click', function() {
    div3.classList.add('current_tab');
    div2.classList.remove('current_tab');
    div1.classList.remove('current_tab');
  })
  tabsContainer.appendChild(div3);


  return tabsContainer;
}

const setFooter = () => {
  const footer = document.createElement('div');
  footer.id = "footer"

  return footer;
}

export { setHeader,
         setFooter };

