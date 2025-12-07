require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {
  const webmap = new WebMap({
    portalItem: {
      id: "5abbc1d74f0042c4802cab83b224de17"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  // Continent settings
  const regions = {
    "Africa": { center: [20, 0], zoom: 2.5 },
    "Antarctica": { center: [0, -75], zoom: 1.5 },
    "Asia": { center: [100, 40], zoom: 2.1 },
    "Australia": { center: [135, -25], zoom: 3 },
    "Europe": { center: [15, 50], zoom: 3 },
    "North America": { center: [-100, 40], zoom: 2.1 },
    "Oceania": { center: [160, -5], zoom: 3 },
    "South America": { center: [-60, -15], zoom: 2.1 }
  };


  view.when(() => {
    Object.keys(regions).forEach(continent => {
      const btn = document.getElementById(`btn-${continent.replace(" ", "")}`);
      if (btn) {
        btn.addEventListener("click", () => {
          view.goTo({
            center: regions[continent].center,
            zoom: regions[continent].zoom
          });
        });
      }
    });
  });
});