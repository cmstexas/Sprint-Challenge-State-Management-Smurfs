import axios from 'axios';

export const FETCHING_SMURF_DATA_START = 'FETCHING_SMURF_DATA_START'
export const FETCHING_SMURF_DATA_SUCCESS = 'FETCHING_SMURF_DATA_SUCCESS'
export const FETCHING_SMURF_DATA_FAILURE = 'FETCHING_SMURF_DATA_FAILURE'


export const getData = () => {
    return dispatch => {
        dispatch({ type: FETCHING_SMURF_DATA_START});
        axios.post('http://localhost:3333/smurfs', {
            name: "",
            age: [],
            height: "",
            id: []
        })
        .then(res => {
            dispatch({ type: FETCHING_SMURF_DATA_SUCCESS, payload: res.data.data });
        })
        .catch(err => {
            dispatch({type: FETCHING_SMURF_DATA_FAILURE, payload: err.response});
        });
    };
};






// OLD PROJECT CODE FROM REACT-REDUX APP
// import axios from 'axios';

// export const FETCHING_PLAYER_DATA_START = 'FETCHING_PLAYER_DATA_START'
// export const FETCHING_PLAYER_DATA_SUCCESS = 'FETCHING_PLAYER_DATA_SUCCESS'
// export const FETCHING_PLAYER_DATA_FAILURE = 'FETCHING_PLAYER_DATA_FAILURE'


// export const getData = () => {
//     return dispatch => {
//         dispatch({ type: FETCHING_PLAYER_DATA_START});
//         axios.get('https://www.balldontlie.io/api/v1/players')
//         .then(res => {
//             dispatch({ type: FETCHING_PLAYER_DATA_SUCCESS, payload: res.data.data });
//         })
//         .catch(err => {
//             dispatch({type: FETCHING_PLAYER_DATA_FAILURE, payload: err.response});
//         });
//     };
// };