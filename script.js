const quotes = [
    "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny. – Lao-Tzu",
    "If you want to live a long life, focus on making contributions. – Hans Selye",
    "May you live as long as you wish and love as long as you live. – Robert A. Heinlein",
    "It's not the length of life, but the depth of life. – Ralph Waldo Emerson",
    "Some day you will be old enough to start reading fairy tales again. – C.S. Lewis",
    "I am not young enough to know everything. – Oscar Wilde.",
    "No book is really worth reading at the age of ten which is not equally – and often far more – worth reading at the age of fifty and beyond. – C.S. Lewis",
    "Wrinkles should merely indicate where the smiles have been. – Mark Twain"

];
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate');
    const birthdate = new Date(birthdateInput.value);
    const now = new Date();
    const ageInMilliseconds = now - birthdate;
    const ageInSeconds = ageInMilliseconds / 1000;
    const ageInMinutes = ageInSeconds / 60;
    const ageInHours = ageInMinutes / 60;
    const ageInDays = ageInHours / 24;
    const ageInWeeks = ageInDays / 7;
    const ageInMonths = ageInDays / 30.44; // Average month length
    const ageInYears = ageInDays / 365.25; // Average year length
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const month = birthdate.getMonth() + 1; // Months are zero-based

    let zodiacSign = "";
        if ((month === 1 && birthdate.getDate() >= 20) || (month === 2 && birthdate.getDate() <= 18)) {
    zodiacSign ="Aquarius";
} else if ((month === 2 && birthdate.getDate() >= 19) || (month === 3 && birthdate.getDate() <= 20)) {
    zodiacSign = "Pisces";
} else if ((month === 3 && birthdate.getDate() >= 21) || (month === 4 && birthdate.getDate() <= 19)) {
    zodiacSign = "Aries";
} else if ((month === 4 && birthdate.getDate() >= 20) || (month === 5 && birthdate.getDate() <= 20)) {
    zodiacSign = "Taurus";
} else if ((month === 5 && birthdate.getDate() >= 21) || (month === 6 && birthdate.getDate() <= 20)) {
    zodiacSign = "Gemini";
} else if ((month === 6 && birthdate.getDate() >= 21) || (month === 7 && birthdate.getDate() <= 22)) {
    zodiacSign = "Cancer";
} else if ((month === 7 && birthdate.getDate() >= 23) || (month === 8 && birthdate.getDate() <= 22)) {
    zodiacSign = "Leo";
} else if ((month === 8 && birthdate.getDate() >= 23) || (month === 9 && birthdate.getDate() <= 22)) {
    zodiacSign = "Virgo";
} else if ((month === 9 && birthdate.getDate() >= 23) || (month === 10 && birthdate.getDate() <= 22)) {
    zodiacSign = "Libra";
} else if ((month === 10 && birthdate.getDate() >= 23) || (month === 11 && birthdate.getDate() <= 21)) {
    zodiacSign = "Scorpio";
} else if ((month === 11 && birthdate.getDate() >= 22) || (month === 12 && birthdate.getDate() <= 21)) {
    zodiacSign = "Sagittarius";
} else if ((month === 12 && birthdate.getDate() >= 22) || (month === 1 && birthdate.getDate() <= 19)) {
    zodiacSign = "Capricorn";
} else {
    zodiacSign = "Invalid";
}

const zodiac = document.getElementById("zodiac");
    zodiac.textContent = `${zodiacSign}`;
const side6 = document.getElementById('qoute');
   side6.textContent = `${randomQuote}`;
const side1 = document.getElementById('side1');
   side1.textContent = `${Math.floor(ageInYears)}`;
const side2 = document.getElementById('side2');
   side2.textContent = `${Math.floor(ageInMonths)}`;
const side3 = document.getElementById('side3');
   side3.textContent = `${Math.floor(ageInWeeks)}`;
const side4 = document.getElementById('side4');
   side4.textContent = `${Math.floor(ageInDays)}`;
const side5 = document.getElementById('side5');
   side5.textContent = `${Math.floor(ageInHours)} `;
const side7 = document.getElementById('side7');
   side7.textContent = `${Math.floor(ageInMinutes)} `;
const side8 = document.getElementById('side8');
   side8.textContent = `${Math.floor(ageInSeconds)} `;
}
