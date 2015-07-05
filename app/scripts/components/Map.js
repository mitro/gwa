import React from 'react';
import AuthenticatedComponent from './AuthenticatedComponent';
import MapStore from '../stores/MapStore';

export default AuthenticatedComponent(class Map extends React.Component {
    componentDidMount() {
        this.onChange();
        MapStore.addChangeListener(this.onChange.bind(this));
        this.renderMap();

        this._marker = L
            .marker([0, 0])
            .addTo(this.map);
    }

    componentWillUnmount() {
        MapStore.removeChangeListener(this.onChange)
    }

    onChange() {
        this.setState({
            points: MapStore.points
        })
    }

    renderMap() {
        var map = this.map = L.map(document.getElementById('map'), {
            minZoom: 2,
            maxZoom: 20,
            attributionControl: false
        });

        var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
        var yndx = new L.Yandex();
        var googleLayer = new L.Google('ROADMAP');

        map.addLayer(osm);

        map.addControl(new L.Control.Layers({'OSM': osm, "Yandex": yndx, "Google": googleLayer}));

        map.setView([52.285577, 76.940947], 11);
    }

    render() {
        return (
            <div id='map'/>
        )
    }

    componentDidUpdate() {
        for (let point of this.state.points) {
            this._marker.setLatLng([point.lat, point.lon]);
        }
    }
});