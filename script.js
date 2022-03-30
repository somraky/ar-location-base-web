window.onload = () => {
    // window.addEventListener("load", () => {
    const text = document.getElementById("text");
    const entity = document.getElementById("entity");
    entity.addEventListener("gps-entity-place-update-positon", (event) => {
        console.log("gps-entity-place-update-positon");
        console.log("distanceMsg", entity.getAttribute("distanceMsg"));
        document.getElementById(
            "debug"
        ).textContent = `${event.detail.distance}m`;
        text.setAttribute(
            "value",
            entity.getAttribute("distanceMsg") + " left"
        );
    });
    // });
};
