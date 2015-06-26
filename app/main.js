var React = require('react');

var helloWorld = React.createClass({
    render: function() {
      return (<h2>Hello, I am Smartberry with Bower and watch!</h2>)
    }
});

React.render(
    React.createElement(helloWorld, null),
    document.getElementById('react-mount')
);