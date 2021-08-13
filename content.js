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
window.addEventListener("load", () => {
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
        border-color: var(--border-color);
        background-color: var(--transparent-color);
    }
    div[role="button"][data-testid$="-follow"] > div {
        color: var(--fill-color);
    }
    div[role="button"][data-testid$="-unfollow"] {
        border-color: var(--border-color);
        background-color: var(--fill-color);
    }
    div[role="button"][data-testid$="-unfollow"] > div {
        color: var(--text-color);
    }`;
    if (style.parentNode === null) {
        document.head.appendChild(style);
    }
});