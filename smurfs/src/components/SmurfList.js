import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import SmurfCard from './SmurfCard';
import { getData } from '../actions/SmurfActions';


const SmurfList = props => {
    return (
    <>
    <h1>Welcome to the amazing Smurf Data App!</h1>
    <button className="databutton" onClick={props.getData}>
        {props.isLoading ?
        <Loader 
        type="TailSpin"
        color="#00BFFF"
        height="15"
        width="100"
        /> : 
        'Get Smurf Data'}
        </button>
        {props.smurfs && props.smurfs.map(smurf => (     //before &&, saves us if our players array is ever null or has error
            <SmurfCard key={smurf.id} name={smurf.name} id={smurf.id} age={smurf.age} />))}
    </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfs: state.smurfs
    };
};

export default connect (mapStateToProps, { getData })(SmurfList);


// OLD PROJ CODE:

// import React from 'react';
// // import {useSelector} from "react-redux";
// import {connect} from 'react-redux';
// import Loader from 'react-loader-spinner';
// import Players from './Players';
// import { getData } from '../actions/playerActions';


// const PlayerList = props => {
//     // const test = useSelector(state => state.test)
//     return (
//     <>
//     <h1>Welcome to the NBA Player App!</h1>
//     <button className="databutton" onClick={props.getData}>
//         {props.isLoading ?
//         <Loader 
//         type="TailSpin"
//         color="#00BFFF"
//         height="15"
//         width="100"
//         /> : 
//         'Get Player Data'}
//         </button>
//         {props.players && props.players.map(person => (     //before &&, saves us if our players array is ever null or has error
//             <Players key={person.id} players={person} />))}
//     </>
//     );
// };

// const mapStateToProps = state => {
//     return {
//         isLoading: state.isLoading,
//         players: state.players
//     };
// };

// export default connect (mapStateToProps, { getData })(PlayerList);