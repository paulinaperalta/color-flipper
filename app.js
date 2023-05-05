
let button = document.querySelector('button');
let h1 = document.querySelector('h1');

button.addEventListener('click', function(){
    const newColor = makeRandomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = `Background Color : ${newColor}`
})

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    if (r < 100 && g < 100 && b < 100) {
        h1.style.color = 'white';
        button.style.color = 'white';
    }

    return `rgb(${r}, ${g}, ${b})`;
}


