
function Review(props) {


  return (
    <div className="review">
      <img src={props.logo} className="review-logo" alt="" />
      <p>{props.rating}</p>
      <div className='review-features'>
        <p>{props.features[0]}</p>
        <p>{props.features[1]}</p>
        <p>{props.features[2]}</p>
      </div>
      <p>{props.play_url}</p>
      <p>{props.terms_and_conditions}</p>
    </div>
  );
}

export default Review;