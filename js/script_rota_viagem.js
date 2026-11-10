const form = document.getElementById("form-travel");
const submitButton = document.getElementById("submit-travel");
const message = document.getElementById("form-message");
const provider = new URLSearchParams(window.location.search).get("provider") === "youtube"
    ? "youtube"
    : "spotify";
const serviceName = provider === "youtube" ? "YouTube Music" : "Spotify";
const playlistHeading = document.getElementById("playlist-heading");
const travelDescription = document.getElementById("travel-description");
const providerNote = document.querySelector("#provider-note span");

playlistHeading.textContent = `Playlist no ${serviceName}`;
travelDescription.textContent = provider === "youtube"
    ? "A gente calcula o tempo da viagem e cria uma playlist com os vídeos que você curtiu e que estão classificados como música."
    : "A gente calcula o tempo da viagem e cria uma playlist com as músicas que você salvou no Spotify.";
providerNote.textContent = provider === "youtube"
    ? "Usaremos vídeos curtidos classificados na categoria Música; clipes também podem aparecer."
    : "Usaremos as músicas salvas na sua conta Spotify.";

function showMessage(text, success = false) {
    message.textContent = text;
    message.classList.toggle("is-success", success);
    message.hidden = false;
}

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    submitButton.disabled = true;
    submitButton.classList.add("is-loading");
    submitButton.setAttribute("aria-label", "Calculando trajeto e criando playlist");
    message.hidden = true;

    try {
        const routeResponse = await fetch("/api/travel", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
                provider,
                partida: form.elements.partida.value.trim(),
                chegada: form.elements.chegada.value.trim()
            })
        });
        const routeResult = await routeResponse.json();
        if (!routeResponse.ok) throw new Error(routeResult.error || "Não foi possível calcular esse trajeto.");

        showMessage("Rota calculada. Preparando sua playlist…", true);
        const playlistResponse = await fetch("/api/create-playlist", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json" },
            body: JSON.stringify({ provider })
        });
        const playlistResult = await playlistResponse.json();
        if (!playlistResponse.ok) throw new Error(playlistResult.error || "Não foi possível criar a playlist.");

        showMessage(`Playlist pronta! Abrindo ${serviceName}…`, true);
        window.location.assign(playlistResult.playlist_url);
    } catch (error) {
        showMessage(error.message || "Algo deu errado. Tente novamente.");
        submitButton.disabled = false;
        submitButton.classList.remove("is-loading");
        submitButton.removeAttribute("aria-label");
    }
});
