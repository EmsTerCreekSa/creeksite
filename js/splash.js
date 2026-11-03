async function lyricSplash() {
    const splashDir = await fetch("/data/splashes.json");
    const splashJson = await splashDir.json();

    const randomSplash = Math.floor(Math.random() * splashJson.splashes.length);

    document.getElementById("splash").textContent =
        splashJson.splashes[randomSplash];
}

lyricSplash();
