// console.log is a function that outputs to a console in the
// web developer tools of your browser, which are helpful for debugging
// to see them, press F12 in your web browser, load the page and click the button
console.log('JavaScript loaded');

// find elements from the webpage by matching the id attributes that were in the HTML
const randomAdviceButton = document.getElementById('advice-button');
const randomAdviceContent = document.getElementById('advice-content');

function randomAdvice() {
    console.log('Generating Random Advice...');

    // create a list (an Array) of tips
    const tips = [
        "Brush your teeth daily!",
        "An apple a day keeps the doctor away!",
        "Water the plants!",
        "Stay hydrated!",
        "Don't forget to eat your vegatables!",
        "Wash your sheets regularly!"
    ];

    // save the number of tips so we can get one randomly
    const tipsCount = tips.length;
    console.log('tipsCount: ', tipsCount);

    // we need the index of the randomly selected to set the advice content element
    // Math.random() generated a number between 0 and 1. By multiplying that
    // by our tipsCount, we can get
    // 
    // example: tipsCount is 6, math.random() is .4, resulting in 2.4.
    //          to access our tips, we need a round number (an integer), so
    //          Math.floor will round 2.4 down to just 2.
    //
    //          Our tipIndex is now 2
    const tipIndex = Math.floor(Math.random() * tipsCount);
    console.log('tipIndex: ', tipIndex);

    randomAdviceContent.innerHTML = tips[tipIndex];
}

// When the randomAdviceButton is clicked, call the getRandomAdvice function
randomAdviceButton.addEventListener('click', randomAdvice);

// Run the getRandomAdvice function on page load
window.onload = randomAdvice;


// TODO: The random advice generated doesn't change if the tipsIndex is
//       randomly the same as the last tip generated. It makes it feel so
//       the button doesn't work. Figure out how to guarantee the tip will be
//       different from the previous run.
