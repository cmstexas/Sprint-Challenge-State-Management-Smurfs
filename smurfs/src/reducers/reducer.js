
import { 
    FETCHING_SMURF_DATA_START, 
    FETCHING_SMURF_DATA_SUCCESS, 
    FETCHING_SMURF_DATA_FAILURE,
    ADD_SMURF_DATA_SUCCESS 
} from '../actions/SmurfActions';

export const initialState = {
    smurfs: [],
    isLoading: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURF_DATA_START:
            return {
                ...state, 
                isLoading: true, 
                error: ''
            };
        case ADD_SMURF_DATA_SUCCESS:
                return {
                    ...state, 
                    smurfs: action.payload, 
                    addingSmurf: false,
                    isLoading: true, 
                    error: ''
                };
        case FETCHING_SMURF_DATA_SUCCESS:
            return {
                ...state, 
                isLoading: false, 
                smurfs: action.payload,
                error: ''
            };
        case FETCHING_SMURF_DATA_FAILURE:
            return {
                 ...state, 
                  isLoading: false, 
                 smurfs: null,
                 error: 'An error exists.'
            };
        case 'ADD_ITEM':
            return {
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}




// OLD PROJ CODE 

// import { 
//     FETCHING_PLAYER_DATA_START, 
//     FETCHING_PLAYER_DATA_SUCCESS, 
//     FETCHING_PLAYER_DATA_FAILURE 
// } from '../actions/playerActions';

// const initialState = {
//     players: [],
//     isLoading: false,
// };

// export const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case FETCHING_PLAYER_DATA_START:
//             return {
//                 ...state, 
//                 isLoading: true, 
//                 error: ''
//             };
//         case FETCHING_PLAYER_DATA_SUCCESS:
//             return {
//                 ...state, 
//                 isLoading: false, 
//                 players: action.payload,
//                 error: ''
//             };
//         default:
//             return state;
//     }
// }