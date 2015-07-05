import TrackingActions from '../actions/TrackingActions';

class TrackingService {
    start() {

        this._x = 52.285577;
        this._y = 76.940947;
        this._angle = 0;
        setInterval(this.onTimer.bind(this), 200);
    }

    onTimer() {

        let lat = this._x + 0.05 * Math.sin(this._angle);
        let lon = this._y + 0.05 * Math.cos(this._angle);

        let positions = [
            {lat: lat, lon: lon}
        ];

        TrackingActions.setPositions(positions);

        this._angle += 0.1;
    }
}

export default new TrackingService()