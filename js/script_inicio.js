const authNotice = document.getElementById("auth-notice");

const authError = new URLSearchParams(window.location.search).get("error");
const authProvider = new URLSearchParams(window.location.search).get("provider");

if (authError) {
    const service = authProvider === "youtube" ? "YouTube Music" : "Spotify";
    authNotice.textContent = authError === "access_denied"
        ? `A conexão com ${service} foi cancelada. Você pode tentar novamente quando quiser.`
        : `Não foi possível conectar ao ${service}. Tente novamente.`;
    authNotice.hidden = false;
}
