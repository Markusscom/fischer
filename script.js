const CastButton = document.getElementById("cast")

CastButton.addEventListener("click", () => {
    CastButton.classList.add('SigmaAnimation')
    CastButton.addEventListener('animationend', () => {
        CastButton.classList.remove('SigmaAnimation');
    });
});
