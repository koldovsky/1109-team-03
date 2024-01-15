const showmoreButtons = document.querySelectorAll('.question__preview-showmore');
const showmoreTexts = document.querySelectorAll('.question__answer');
let showingButton = document.querySelector('.question__preview-showmore.showing');
let showingText = document.querySelector('.question__answer.showing');

function show() {
    showmoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            showmoreButtons.forEach(butt => butt.classList.remove('showing'));
            showmoreTexts.forEach(text => text.classList.remove('showing'));
            button.classList.toggle('showing');
            showmoreTexts[index].classList.toggle('showing');
            showingButton = button;
            showingText = showmoreTexts[index];
            showingButton.addEventListener('click', () => {
                showmoreButtons.forEach(b => b.classList.remove('showing'));
                showmoreTexts.forEach(t => t.classList.remove('showing'));
                showingButton = null;
                showingText = null;
                show();
            })
        })
    });
}

show();