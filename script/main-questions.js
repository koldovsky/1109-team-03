const showmoreButtons = document.querySelectorAll('.question__preview-showmore');
const showmoreTexts = document.querySelectorAll('.question__answer');
let showingButton = document.querySelector('.question__preview-showmore.showing');
let showingText = document.querySelector('.question__answer.showing');

function show() {
    showmoreButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            if (showingButton) {
                showingButton.classList.remove('showing');
                showingText.classList.remove('showing');
            }
            button.classList.toggle('showing');
            showmoreTexts[index].classList.toggle('showing');
            showingButton = document.querySelector('.question__preview-showmore.showing');
            showingText = document.querySelector('.question__answer.showing');
            show();
        })
        if (showingButton) {
            showingButton.addEventListener('click', () => {
                showingButton.classList.remove('showing');
                showingText.classList.remove('showing');
                showingButton = null;
                showingText = null;
                show();
            })
        }
    });
}

show();
