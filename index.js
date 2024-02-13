const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

function hideFirst () {
    const first = document.querySelector('.first');
    first.style.display = 'none';
}

function showImgs (isSad) {
    const happy = document.querySelector('.happy');
    const sad = document.querySelector('.sad');


    if (isSad) {
        sad.style.display = 'block';
        happy.style.display = 'none';
    } else {
        happy.style.display = 'block';
        sad.style.display = 'none';
    }

    hideFirst();
}

yesBtn.addEventListener('click', () => {
    question.innerHTML = 'Я люблю тебе теж &#10084; &#10084; &#10084;';
    showImgs();

    setTimeout(() => {
        const final = document.querySelector('.final');
        const happy = document.querySelector('.happy');
        const sad = document.querySelector('.sad');

        final.style.display = 'block';
        sad.style.display = 'none';
        happy.style.display = 'none';
        yesBtn.style.display = 'none';
        noBtn.style.display = 'none';
        question.innerHTML = 'Пішли на побачення моя булочка &#10084;';
    }, 3000);
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * (wrapperRect.width
        - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (wrapperRect.height
        - noBtnRect.height)) + 1;

    showImgs(true);

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
