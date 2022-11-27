import * as constants from './constants'
import { fromJS } from 'immutable'
const defaultState = fromJS({
    focused: false
});
let reducerobj = (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return state.set('focused', true)
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false)
    }
    return state;
}
export default reducerobj;