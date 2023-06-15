import './App.css';
import React, { useEffect, useState } from 'react';
import Review from './Review';

function App() {

  const [reviews, setReviews] = useState([]);

  // Fetch reviews from Wordpress API custom endpoint
  useEffect( function() {
    fetch('http://localhost/react-wordpress/wordpress/wp-json/custom-api/v1/reviews')
    .then(res => res.json())
    .then(data => setReviews(data.toplists[575]))
  }, [])
  
  // console.log(reviews);

  // Sort reviews by "position" value
  reviews.sort((a, b) => a.position - b.position);
  
  // console.log(reviews);

  // Put each review from the JSON into a custom React Review Component
  const reviewComponents = reviews.map((review, key) =>
    <Review
      key={review.brand_id}
      logo={review.logo}
      rating={review.info.rating}
      features={review.info.features}
      terms_and_conditions={review.terms_and_conditions}
      play_url={review.play_url}
    />)

  return (
    <div className="App">
      {reviewComponents}
    </div>
  );
}

export default App;
