const openHeartBtn = document.getElementById("openHeart");
const loveLetter = document.getElementById("loveLetter");
const typewriter = document.getElementById("typewriter");
const proposeBtn = document.getElementById("proposeBtn");
const proposalBox = document.getElementById("proposalBox");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");
const noBtn = document.getElementById("noBtn");
const convinceText = document.getElementById("convinceText");
let yesScale = 1;



const loveText = `
My sweetest Panda 🐼❤️,

From the moment you came into my life, everything became more beautiful.
Your smile melts my worries.
Your laugh is my favorite music.
Your love is my greatest blessing.

I don’t just love you…
I choose you.
Every single day.
In every lifetime.
In every universe.

You are my safe place, my happy place, my forever place.
I am so lucky to call you mine.
I love you more than words can ever explain. 💖
`;

let i = 0;

openHeartBtn.addEventListener("click", () => {
    loveLetter.classList.remove("hidden");
    typeWriterEffect();
    loveLetter.scrollIntoView({ behavior: "smooth" });
});

function typeWriterEffect() {
    if (i < loveText.length) {
        typewriter.innerHTML += loveText.charAt(i);
        i++;
        setTimeout(typeWriterEffect, 40);
    }
}

proposeBtn.addEventListener("click", () => {
    proposalBox.classList.remove("hidden");
    proposalBox.scrollIntoView({ behavior: "smooth" });
});

yesBtn.addEventListener("click", () => {
    finalMessage.classList.remove("hidden");
    finalMessage.scrollIntoView({ behavior: "smooth" });
});


let noCount = 0;

const convinceMessages = [
    "Aww baby please say YES 🥺💖",
    "Come on my Panda, don’t break my heart 😘🐼",
    "I’ll give you unlimited hugs if you say YES 🤗❤️",
    "Your YES will make me the happiest person alive 🥹💕",
    "Don’t be so cute and say NO 😭💘",
    "My heart only understands YES from you 🫶💖",
    "Say YES and I’ll love you forever and ever 🥰♾️",
    "Okay last chance… my heart is waiting 😢❤️",
    "You know you want to say YES 😏💍",
    "I’m already smiling thinking about your YES 😍💖"
];
noBtn.addEventListener("click", () => {

    if (noCount < convinceMessages.length) {
        convinceText.textContent = convinceMessages[noCount];
    }

    noCount++;

    // Move NO button on each click
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    // After 10 NO clicks → NO runs away on hover
    if (noCount >= 10) {
        convinceText.textContent = "NO is no longer an option 😈💖 Just try to click it!";

        noBtn.classList.add("runaway");
    }
});

