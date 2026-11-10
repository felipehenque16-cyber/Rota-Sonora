const authNotice = document.getElementById("auth-notice");
const authError = new URLSearchParams(window.location.search).get("error");

if (authError) {
    authNotice.textContent = authError === "access_denied"
        ? "A conexão com o YouTube foi cancelada. Você pode tentar novamente quando quiser."
        : "Não foi possível conectar sua conta Google. Tente novamente.";
    authNotice.hidden = false;
}
