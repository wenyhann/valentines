// script.js

function redirect() {
    window.location.href = "https://forms.gle/24xevQdArZPbCzQk8";
}

const noButtonTextOptions = [
    "there's only one right answer",
    "u sure ?",
    "ehhHHhhH plsss",
    "bb please i wuv u : ((",
    "idc u better say yes",
    "OI",
    "this is betrayal",
    "fine just say no",
    "sike u thought",
    "don't u dare !!!"
];

let currentIndex = 0;

function teleportNo() {
    const noButton = document.getElementById('noBtn');
    const maxX = window.innerWidth - noButton.clientWidth;
    const maxY = window.innerHeight - noButton.clientHeight;

    const newX = Math.min(maxX, Math.floor(Math.random() * (maxX / 2)));
    const newY = Math.min(maxY, Math.floor(Math.random() * (maxY / 2)));

    // Get the current text option based on the index
    const currentText = noButtonTextOptions[currentIndex];

    // Update the text of the "No" button
    noButton.innerText = currentText;

    // Increment the index for the next teleportation
    currentIndex = (currentIndex + 1) % noButtonTextOptions.length;

    // Apply the new position and transition
    noButton.style.transform = `translate(${newX}px, ${newY}px)`;
}
