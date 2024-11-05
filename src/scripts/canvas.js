const canvas = document.getElementById('cartesianCanvas');
const ctx = canvas.getContext('2d');

// Розміри поля
const width = canvas.width;
const height = canvas.height;

// Налаштування сітки
const gridSpacing = 20;  // Distance between grid lines
const axisColor = 'black';
const gridColor = 'lightgrey';
const textColor = 'black';

// Функція для відображення сітки
function drawGrid() {
    ctx.clearRect(0, 0, width, height);

    // Вертикальні лінії сітки
    for (let x = gridSpacing; x < width; x += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    // Горизонтальні лінії сітки
    for (let y = gridSpacing; y < height; y += gridSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = gridColor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }
}

// Функція для відображення осі Х та осі У
function drawAxes() {
    ctx.beginPath();
    // Y-ось
    ctx.moveTo(width / 2, 0);
    ctx.lineTo(width / 2, height);
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 2;
    ctx.stroke();

    // X-ось
    ctx.beginPath();
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.strokeStyle = axisColor;
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Функція для друк позначень
function drawLabels() {
    ctx.font = '12px Arial';
    ctx.fillStyle = textColor;

    // Позначення осі X
    for (let x = gridSpacing; x < width; x += gridSpacing) {
        ctx.fillText((x - width / 2) / gridSpacing, x, height / 2 + 15);
    }

    // Позначення осі Y
    for (let y = gridSpacing; y < height; y += gridSpacing) {
        if (y !== height / 2) {  
            ctx.fillText((height / 2 - y) / gridSpacing, width / 2 + 5, y + 3);
        }
    }
}

// Збірна функція для друку сітки, осей для позначень
function drawCartesianPlane() {
    drawGrid();
    drawAxes();
    drawLabels();
}

// Первинний друк сітки
drawCartesianPlane();

// Функція для друку лінії
function drawLine(x1, y1, x2, y2) {
  // Переведення декартових координат в координати сітки
  const canvasX1 = width / 2 + x1 * gridSpacing;
  const canvasY1 = height / 2 - y1 * gridSpacing;
  const canvasX2 = width / 2 + x2 * gridSpacing;
  const canvasY2 = height / 2 - y2 * gridSpacing;

  // Друк лінії
  ctx.beginPath();
  ctx.moveTo(canvasX1, canvasY1);
  ctx.lineTo(canvasX2, canvasY2);
  ctx.strokeStyle = 'red'; // Як варіант можна додати фічу друку декількох ліній/кіл різними кольорами
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Функція друку кола
function drawCircle(x, y, r) {
  // Переведення декартових координат в координати сітки
  const canvasX = width / 2 + x * gridSpacing;
  const canvasY = height / 2 - y * gridSpacing;

  // Переведення радіусу в одиниці виміру сітки
  const canvasRadius = r * gridSpacing;

  // Друк кола
  ctx.beginPath();
  ctx.arc(canvasX, canvasY, canvasRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = 'blue'; // Як варіант можна додати фічу друку декількох ліній/кіл різними кольорами
  ctx.lineWidth = 2;
  ctx.stroke();
}

// Функція для очистки поля від ліній та кіл
function clearCanvas() {
  // очищення поля
  ctx.clearRect(0, 0, width, height);

  // новий друк поля
  drawCartesianPlane();
}
