const lyricsDisplay = document.querySelector(".lyrics-display");
const trackButtons = document.querySelectorAll(".songs-list button[data-lyrics]");

trackButtons.forEach((button) => {
    button.addEventListener("click", async () => {

        trackButtons.forEach((button) => {
            button.classList.remove("selected")
        })

        button.classList.add("selected")

        const name = button.dataset.lyrics;

        const file = await fetch("/data/lyrics/" + name + ".txt");

        const lyrics = await file.text();

        lyricsDisplay.textContent = lyrics;
    });
});
