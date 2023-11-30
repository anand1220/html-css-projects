const btn = document.querySelectorAll(".button");
const body = document.querySelector('body')
const txt = document.querySelector('h1')
btn.forEach((button) => {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target)
        if (e.target.id === 'grey') {
            body.style.backgroundColor = 'grey';
            txt.style.color = 'yellow';
        }
        else if (e.target.id === 'white') {
            body.style.backgroundColor = '#fff';
            txt.style.color = 'red';
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
            txt.style.color = 'green';
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow'
            txt.style.color = 'purple';
        }

    }
    )
})