const setHeader = () => {
  const header = document.createElement('h1');
  header.id = "header";

  const heroName = document.createElement('div');
  heroName.id = "heroName";
  heroName.textContent = "Alice's Restaurant";
  header.appendChild(heroName);

  return header;
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

