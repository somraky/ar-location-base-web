window.addEventListener("load", () => {
    console.log("load");
    const text = document.getElementById("text");
    const entity = document.getElementById("entity");
    entity.addEventListener("gps-entity-place-update-positon", (event) => {
        console.log("gps-entity-place-update-positon");
        console.log("distanceMsg", entity.getAttribute("distanceMsg"));
        // document.getElementById(
        //     "debug"
        // ).textContent = `${event.detail.distance}m`;
        // text.setAttribute(
        //     "value",
        //     entity.getAttribute("distanceMsg") + " left"
        // );
    });

    const gpscamera = document.getElementById("gpscamera");
    gpscamera.addEventListener("gps-camera-update-positon", (event) => {
        console.log("cam position", event.detail.position);
        text.setAttribute(
            "value",
            "cam position" + event.detail.position
        );
    });
})


