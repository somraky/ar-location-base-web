window.addEventListener("load", () => {
    // const text = document.getElementById("text");
    // text.addEventListener("gps-entity-place-update-position", (event) => {
    //     document.getElementById(
    //         "debug"
    //     ).textContent = `${event.detail.distance}m`;
    //     text.setAttribute(
    //         "value",
    //         text.getAttribute("distanceMsg") + " left"
    //     );
    // })

    renderPlaces();

});

var models = [
    {
        name: 'articuno',
        type: 'gltf',
        url: './ARModels/articuno/scene.gltf',
        scale: '0.2 0.2 0.2',
        rotation: '0 180 0',
        location: {
            lat: 15.9035343,
            lng: 100.2486177,
        }
    },
    {
        name: 'dragonite',
        type: 'gltf',
        url: './ARModels/dragonite/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 180 0',
        location: {
            lat: 15.9035630,
            lng: 100.2486811,
        }
    },
    {
        name: 'magnemite',
        type: 'gltf',
        url: './ARModels/magnemite/scene.gltf',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        location: {
            lat: 15.9034724,
            lng: 100.2486033,
        }
    },
    {
        name: 'pirateCaptain',
        type: 'obj',
        mtl: './ARModels/pirateCaptain/pirate_captain.mtl',
        obj: './ARModels/pirateCaptain/pirate_captain.obj',
        scale: '0.5 0.5 0.5',
        rotation: '0 180 0',
        location: {
            lat: 15.9033847,
            lng: 100.2486100,
        }
    },
]

var setAsset = function (model, asset) {
    let assets = document.querySelector('a-assets');
    if (model.type === 'gltf') {
        asset.setAttribute('id', model.name);
        asset.setAttribute('src', model.url);
        assets.appendChild(asset);
    } else if (model.type === 'obj') {
        if (model.mtl) {
            asset.setAttribute('id', model.name + '-mtl');
            asset.setAttribute('src', model.mtl);
            assets.appendChild(asset);
        }
        if (model.ogj) {
            asset.setAttribute('id', model.name + '-ogj');
            asset.setAttribute('src', model.ogj);
            assets.appendChild(asset);
        }
    }
}

var setEntity = function (model, entity) {
    let scene = document.querySelector('a-scene');
    let latitude = model.location.lat;
    let longitude = model.location.lng;

    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }
    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }
    if (model.position) {
        entity.setAttribute('position', model.position);
    }
    if (model.type === 'gltf') {
        entity.setAttribute('gltf-model', `#${model.name}`);
    } else if (model.type === 'obj') {
        entity.setAttribute('obj-model', `obj: #${model.name}-obj; mtl: #${model.name}-mtl;`);
    }
    entity.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    scene.appendChild(entity);
}

function renderPlaces() {
    models.forEach(model => {
        let asset = document.createElement('a-asset-item');
        setAsset(model, asset);
        let entity = document.createElement('a-entity');
        setEntity(model, entity);
    });
}

