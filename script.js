let theContent = document.querySelector('#content');
let myArray = [];
let block = document.createElement('p');
let random = 0;


fetch('qutes.txt')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n');
        lines.forEach(line => {
            const cleanedLine = line.trim();
            if (cleanedLine !== '') {
                myArray.push(cleanedLine);
            }
        });
        randomLy();
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });


function randomLy() {
    random = Math.floor(Math.random() * myArray.length);
    block.textContent = myArray[random];
}

block.className = 'blockQuote';
block.textContent = myArray[random];
let copyright = document.createElement('p');
copyright.textContent = "(c) Великий Мевлут";
copyright.className = "copyright"
theContent.appendChild(block);
block.after(copyright);

let button = document.createElement('button');
button.textContent = 'Бахша соз';
button.className = 'button';
theContent.appendChild(button);

button.addEventListener('click', () => {
    randomLy();
});


function createList() {
    let ul = document.createElement('ul');
    ul.className = 'list';
    myArray.forEach((item) => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    /*  theContent.appendChild(ul);
     console.log("created list"); */
}


createList();
console.log(myArray); // []

