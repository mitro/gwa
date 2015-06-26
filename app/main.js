var React = require('react');

var helloWorld = React.createClass({
    componentDidMount: function() {
        var map = this.map = L.map(this.getDOMNode(), {
            minZoom: 2,
            maxZoom: 20,
            layers: [
                L.tileLayer(
                    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    {
                        attribution: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
                    }
                )
            ],
            attributionControl: false
        });

        //L.control.fullscreen().addTo(map);
        map.fitWorld();
    },

    render: function() {
      return <div id="map"/>
    }
});

React.render(
    React.createElement(helloWorld, null),
    document.getElementById('react-mount')
);