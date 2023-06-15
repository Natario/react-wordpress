
function Review(props) {


  return (
    <div className="Review">
      <div className="Review-photoContainer">
        <img src={props.logo} className="Review-photo" alt="" />
      </div>
      <div className='Review-description'>
        <p>{props.features[0]}</p>
        <p>{props.features[1]}</p>
        <p>{props.features[2]}</p>
      </div>
    </div>
  );
}

export default Review;