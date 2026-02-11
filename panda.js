const openHeartBtn = document.getElementById("openHeart");
const loveLetter = document.getElementById("loveLetter");
const typewriter = document.getElementById("typewriter");
const proposeBtn = document.getElementById("proposeBtn");
const proposalBox = document.getElementById("proposalBox");
const yesBtn = document.getElementById("yesBtn");
const finalMessage = document.getElementById("finalMessage");

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
