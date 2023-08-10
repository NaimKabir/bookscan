const inputElem = document.getElementById('animatedInput');
const startBtn = document.getElementById('startBtn');
const textToAnimate = "Hello. I am frightened by recent advances in technology, and this fear extends even to innocent cases.\n" + 
"I don't have the background to judge the difference between neutral and harmful machine learning, and sometimes just seeing the letters 'A' and 'I' next to each other in any context makes me furious and defensive.\n" +
"Instead of engaging with people who point out the flaws in my argument or point out convincing analogue technologies that clearly respect fair use, I instead elect to tear down a creator who took special care to mitigate any such copyright risks to the writing community.\n" +
"I should feel ashamed of myself, but instead I will pat myself on the back because this feels enough like a victory. Another tragedy like this will happen again in the near future, because I rarely retrospect enough to correct my behavior.\n" + 
"The End.";

let index = 0;

function typeText() {
    if (index < textToAnimate.length) {
        inputElem.textContent += textToAnimate[index];
        index++;
        setTimeout(typeText, 42);  // Adjust the speed of typing by modifying the delay time.
    }
}

startBtn.addEventListener('click', () => {
    inputElem.textContent = ''; // Clear the input before starting the animation.
    index = 0; // Reset the index.
    typeText();
});
