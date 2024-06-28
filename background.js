const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

document.body.appendChild(canvas);

const letters = Array(256).join(1).split('');

function draw() {
    ctx.fillStyle = 'rgba(0, 15, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0a5c0a' //'#0F0'; 
    ctx.font = '18pt monospace';
    ctx.fontweight = 'bold';
    
    letters.map((y_pos, index) => {
        const text = String.fromCharCode(65 + Math.random() * 33);
        const x_pos = index * 16;
        ctx.fillText(text, x_pos, y_pos);
        
        letters[index] = (y_pos > canvas.height + Math.random() * 1e4) ? 0 : y_pos + 16;
    });
}

setInterval(draw, 50);
