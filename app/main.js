var React = require('react');

var helloWorld = React.createClass({
    componentDidMount: function() {
        var map = this.map = L.map(this.getDOMNode(), {
            minZoom: 2,
            maxZoom: 20,
            attributionControl: false
        });

        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        var yndx = new L.Yandex();
        var googleLayer = new L.Google('ROADMAP');

        map.addLayer(osm);

        map.addControl(new L.Control.Layers({'OSM':osm, "Yandex":yndx, "Google":googleLayer}));

        map.setView([52.285577, 76.940947], 11);
    },

    render: function() {
      return <div id="map"/>
    }
});

React.render(
    React.createElement(helloWorld, null),
    document.getElementById('react-mount')
);