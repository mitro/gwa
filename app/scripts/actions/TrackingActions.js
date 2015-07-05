import AppDispatcher from '../dispatcher/AppDispatcher.js';
import {POSITIONS_LOADED} from '../constants/MapConstants';

export default {
    setPositions(positions) {
        AppDispatcher.dispatch({
            actionType: POSITIONS_LOADED,
            positions: positions
        });
    }
}