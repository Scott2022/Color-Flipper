const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    // setting up for the button
const btn = document.getElementById('btn')
    // setting up for the color
const color = document.querySelector('.color')
    //adding event listener
btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}