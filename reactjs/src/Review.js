import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faStarSolid} from '@fortawesome/free-solid-svg-icons'

function Review(props) {

  const stars = [];

  // print one full star for each rating point
  for (let index = 1; index <= props.rating; index++) {
    stars.push(<FontAwesomeIcon icon={faStarSolid} style={{ color: 'orange' }}/>);
  }
  
  // then print one empty star until there are a total of 5 stars
  for (let index = props.rating+1; index <= 5; index++) {
    stars.push(<FontAwesomeIcon icon={faStar} style={{ color: 'orange' }}/>);
  }

  return (
    <div className="Review">
      <img src={props.logo} className="Review-logo" alt="" />
      <p>{stars}</p>
      <div className='Review-features'>
        <p>{props.features[0]}</p>
        <p>{props.features[1]}</p>
        <p>{props.features[2]}</p>
      </div>
      <div className='Review-links'>
        <a href={props.play_url}>Play Now</a>
        <p>{props.terms_and_conditions}</p>
      </div>
    </div>
  );
}

export default Review;