import BaseStore from './BaseStore';
import {POSITIONS_LOADED} from '../constants/MapConstants';

class MapStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(() => this._registerToActions.bind(this));

        this._points = [
            {
                lat: 52.285577,
                lon: 76.940947
            }
        ]
    }

    _registerToActions(action) {
        switch(action.actionType) {
            case POSITIONS_LOADED:
                this._points = action.positions;
                this.emitChange();
                break;
            default:
                break;
        }
    }

    get points () {
        return this._points;
    }
}

export default new MapStore();