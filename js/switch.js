const toggles = document.querySelectorAll(".modeToggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            setTimeout(() => {
                const isPTVisible = window.getComputedStyle(document.querySelector(".pt")).display !== "none";
                const isENGVisible = window.getComputedStyle(document.querySelector(".eng")).display !== "none";

                if (isPTVisible) {
                    alert("Porquê que haverias de querer o modo claro? O escuro é claramente superior! B)");
                } else if (isENGVisible) {
                    alert("Why would you want light mode? Dark is clearly superior! B)");
                } else {
                    alert("Language not detected. But still... dark is better.");
                }
                toggle.checked = false;
            }, 300);
        }
    });
});