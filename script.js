window.addEventListener("load", () => {
    console.log("run script");
    const text = document.getElementById("text");
    text.addEventListener("gps-entity-place-update-position", (event) => {
        document.getElementById(
            "debug"
        ).textContent = `${event.detail.distance}m`;
        text.setAttribute(
            "value",
            text.getAttribute("distanceMsg") + " left"
        );
    });
});

