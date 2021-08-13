const colors = [
    [
        "rgb(207, 217, 222)",
        "rgb(15, 20, 25)",
        "rgba(0, 0, 0, 0)",
        "rgb(255, 255, 255)"
    ],
    [
        "rgb(83, 100, 113)",
        "rgb(255, 255, 255)",
        "rgba(0, 0, 0, 0)",
        "rgb(15, 20, 25)"
    ],
    [
        "rgb(83, 100, 113)",
        "rgb(255, 255, 255)",
        "rgba(0, 0, 0, 0)",
        "rgb(15, 20, 25)"
    ]
]

function main() {
    let nightMode = document.cookie.match(/night_mode=(\d)/);
    let nightModeNum = parseInt(nightMode[1]);
    let style = document.getElementById("invertColor-style") ?? document.createElement("style");
    style.innerHTML = `:root {
        --border-color: ${colors[nightModeNum][0]};
        --fill-color: ${colors[nightModeNum][1]};
        --transparent-color: ${colors[nightModeNum][2]};
        --text-color: ${colors[nightModeNum][3]};
    }
    
    div[role="button"][data-testid$="-follow"] {
        border-color: var(--border-color) !important;
        background-color: var(--transparent-color) !important;
    }
    div[role="button"][data-testid$="-follow"] > div,
    div[role="button"][data-testid$="-follow"] > span {
        color: var(--fill-color) !important;
    }
    div[role="button"][data-testid$="-unfollow"] {
        border-color: var(--border-color) !important;
        background-color: var(--fill-color) !important;
    }
    div[role="button"][data-testid$="-unfollow"] > div,
    div[role="button"][data-testid$="-unfollow"] > span {
        color: var(--text-color) !important;
    }`;
    if (style.parentNode === null) {
        document.head.appendChild(style);
    }
}

window.addEventListener("load", () => {
    setInterval(() => {
        document.querySelectorAll(`input[name^=background_picker_]`).forEach(element =>  {
            if (element.getAttribute("colorChangeCheck-InvertColor") != "true") {
                element.addEventListener("click", () => {
                    setTimeout(main, 0);
                });
                element.setAttribute("colorChangeCheck-InvertColor", "true");
            }
        });
    }, 500);
    main()
});