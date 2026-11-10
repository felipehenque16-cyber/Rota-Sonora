const form = document.getElementById("form-travel");
const submitButton = document.getElementById("submit-travel");
const message = document.getElementById("form-message");
const params = new URLSearchParams(window.location.search);
const provider = params.get("provider") === "youtube" ? "youtube" : "spotify";
const serviceName = provider === "youtube" ? "YouTube Music" : "Spotify";
const playlistHeading = document.getElementById("playlist-heading");
const travelDescription = document.getElementById("travel-description");
const providerNote = document.querySelector("#provider-note span");

playlistHeading.textContent = `Playlist no ${serviceName}`;
travelDescription.textContent = provider === "youtube"
    ? "A gente calcula o tempo da viagem e prepara uma seleção com músicas da sua conta."
    : "A gente calcula o tempo da viagem e prepara uma playlist com as músicas salvas na sua conta Spotify.";
providerNote.textContent = provider === "youtube"
    ? "A seleção usa conteúdos musicais disponíveis na sua conta Google."
    : "A seleção usa as músicas salvas na sua conta Spotify.";

function showMessage(text, success = false) {
    message.textContent = text;
    message.classList.toggle("is-success", success);
    message.hidden = false;
}
async function readJson(response) {
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) throw new Error("O servidor não retornou uma resposta válida. Confira se o backend está instalado e publicado.");
    return response.json();
}
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const partida = form.elements.partida.value.trim();
    const chegada = form.elements.chegada.value.trim();
    if (partida.localeCompare(chegada, "pt-BR", { sensitivity: "base" }) === 0) {
        showMessage("O ponto de partida e o destino precisam ser diferentes.");
        form.elements.chegada.focus();
        return;
    }
    submitButton.disabled = true;
    submitButton.classList.add("is-loading");
    submitButton.setAttribute("aria-label", "Calculando trajeto e criando playlist");
    message.hidden = true;
    try {
        const routeResponse = await fetch("/api/travel", { method: "POST", headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify({ provider, partida, chegada }) });
        const routeResult = await readJson(routeResponse);
        if (!routeResponse.ok) throw new Error(routeResult.error || "Não foi possível calcular esse trajeto.");
        showMessage("Rota calculada. Preparando sua playlist…", true);
        const playlistResponse = await fetch("/api/create-playlist", { method: "POST", headers: { "Accept": "application/json", "Content-Type": "application/json" }, body: JSON.stringify({ provider }) });
        const playlistResult = await readJson(playlistResponse);
        if (!playlistResponse.ok) throw new Error(playlistResult.error || "Não foi possível criar a playlist.");
        let playlistUrl;
        try { playlistUrl = new URL(playlistResult.playlist_url); } catch { throw new Error("O servidor criou a playlist, mas retornou um endereço inválido."); }
        const allowedHosts = provider === "youtube" ? ["music.youtube.com", "youtube.com", "www.youtube.com"] : ["open.spotify.com"];
        if (playlistUrl.protocol !== "https:" || !allowedHosts.includes(playlistUrl.hostname)) throw new Error("O endereço da playlist não é reconhecido como um link seguro do serviço escolhido.");
        showMessage(`Playlist pronta! Abrindo ${serviceName}…`, true);
        window.location.assign(playlistUrl.href);
    } catch (error) {
        const messageText = error instanceof TypeError ? "Não foi possível conversar com o servidor. A parte visual do site está carregada, mas o backend ainda precisa estar publicado." : (error.message || "Algo deu errado. Tente novamente.");
        showMessage(messageText);
        submitButton.disabled = false;
        submitButton.classList.remove("is-loading");
        submitButton.removeAttribute("aria-label");
    }
});