const siteVersion = '230223_a1.0';
const email = 'mailto:robbiedyson@icloud.com';
const resume = '/assets/pdf/Resume-Robbie-Dyson-2.pdf';
const logoRef = '/assets/logo.svg';

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randInt = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randInt)
    return randInt;
}

export { siteVersion, email, resume, logoRef, randInt };