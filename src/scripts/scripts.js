function parseNumber(str) {
  return Number(str);
};

function handleDrawLine() {
  const inputX1 = document.querySelector('#line-x1');
  const inputY1 = document.querySelector('#line-y1');
  const inputX2 = document.querySelector('#line-x2');
  const inputY2 = document.querySelector('#line-y2');
  const inputs = [inputX1, inputY1, inputX2, inputY2];

  inputs.forEach(item => {
    console.log({ item });
    
    if (isNaN(parseNumber(item.value))) {
      const message = `Data for ${item.getAttribute('name')} is incorrect. Please enter a valid number.`

      alert(message);
    }
  });

  drawLine(
    parseNumber(inputX1.value),
    parseNumber(inputY1.value),
    parseNumber(inputX2.value),
    parseNumber(inputY2.value),
  )
};

function handleDrawCircle() {
  const inputX1 = document.querySelector('#circle-x1');
  const inputY1 = document.querySelector('#circle-y1');
  const inputR = document.querySelector('#circle-radius');
  const inputs = [inputX1, inputY1, inputR];

  inputs.forEach(item => {
    if (isNaN(parseNumber(item.value))) {
      const message = `Data for ${item.getAttribute('name')} is incorrect. Please enter a valid number.`

      alert(message);
    }
  });

  drawCircle(
    parseNumber(inputX1.value),
    parseNumber(inputY1.value),
    parseNumber(inputR.value),
  )
};
