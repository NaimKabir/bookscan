const inputElem = document.getElementById('animatedInput');
const startBtn = document.getElementById('startBtn');
const textToAnimate = "Hello. I am a very petty creature who is unthinkingly reactive and takes particular delight in destroying innocent projects.\n" + 
"I have a very poor grasp of the difference between generative and descriptive machine learning, and honestly, just seeing the letters 'A' and 'I' next to each other in any context makes me furious.\n" +
"Instead of engaging with folks who point out the flaws in my argument or point out convincing analogue technologies that clearly respect fair use, I instead elect to tear down a creator who took special care to mitigate any such copyright risks to the writing community.\n" +
"I should feel ashamed of myself, but instead will pat myself on the back because this feels enough like a victory. Yay!";

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
