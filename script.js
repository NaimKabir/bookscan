const inputElem = document.getElementById('animatedInput');
const startBtn = document.getElementById('startBtn');
const textToAnimate = "Hello. I am a petty creature who is unthinkingly reactive and takes particular delight in destroying innocent projects.\n" + 
"I have a poor grasp of the difference between neutral and harmful machine learning, and honestly, just seeing the letters 'A' and 'I' next to each other in any context makes me furious.\n" +
"Instead of engaging with people who point out the flaws in my argument or point out convincing analogue technologies that are clearly fair use of works, I instead elect to tear down a creator even though they took special care to mitigate copyright risks to the writing community and people like me.\n" +
"I should feel ashamed of myself, but instead I will pat myself on the back because this feels enough like a victory to warrant celebration. Another tragedy like this will happen again in the near future, because I rarely retrospect enough to correct my behavior.\n" + 
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
