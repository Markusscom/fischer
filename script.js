const CastButton = document.getElementById("cast")

CastButton.addEventListener("click", () => {
    CastButton.classlist.add('SigmaAnimation')
    CastButton.addEventListener('animationend', () => {
        CastButton.classlist.remove('SigmaAnimation');
    });
});
