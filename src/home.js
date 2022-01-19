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

export { setBody };