//import PropTypes from 'prop-types';

function Stuff(props){
    return(
   <div className="myCard">
        <img src="https://placehold.co/100x100"></img>
        <h3>{props.name}</h3>
        <p>{props.title}</p>
   </div>
    );
}
export default Stuff