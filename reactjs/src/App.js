import './App.css'
import React, { useEffect, useState } from 'react'
import Review from './Review'

function App() {

  const [reviews, setReviews] = useState([])
  const [reviewComponents, setReviewComponents] = useState([])
  const [loadedReviewsCount, setLoadedReviewsCount] = useState(0)

   
  useEffect( function() {
    // Fetch reviews from Wordpress API custom endpoint
    fetch('https://pedronatario.com/react-wordpress/wordpress/wp-json/custom-api/v1/reviews')
    .then(res => res.json())
    .then(data => {
      
      // then sort them by the "position" value
      const sortedData = data.toplists[575].sort((a, b) => a.position - b.position);

      // then create the first 3 Review Components
      setReviewComponents(sortedData.slice(0,3).map((review, key) =>
        <Review
          key={review.brand_id}
          position={review.position}
          logo={review.logo}
          rating={review.info.rating}
          features={review.info.features}
          terms_and_conditions={review.terms_and_conditions}
          play_url={review.play_url}
        />))

      // then hide the loading text and show the Load More button
      document.getElementsByClassName("loadingtext")[0].style.display = "none";
      document.getElementsByClassName("loadmore-div")[0].style.display = "block";

      // then advance the counter so we know where to cut the review array on the next "load more" click
      setLoadedReviewsCount(3)

      // and finally save the sorted reviews for future use outside this hook
      setReviews(sortedData)
    })
  }, [])
  


  // Load 3 more reviews and put each one into a custom Review Component
  function loadMore() {

    // But if we already loaded all existing reviews, alert user
    if(loadedReviewsCount >= reviews.length) {
      alert('No more reviews to load!')
    } else {
      setReviewComponents(reviewComponents.concat(reviews.slice(loadedReviewsCount,loadedReviewsCount+3).map((review, key) =>
        <Review
          key={review.brand_id}
          position={review.position}
          logo={review.logo}
          rating={review.info.rating}
          features={review.info.features}
          terms_and_conditions={review.terms_and_conditions}
          play_url={review.play_url}
        />)))
        setLoadedReviewsCount(loadedReviewsCount + 3)
    }
  }

  return (
    <div className="App">
      <p className='loadingtext'>Loading reviews...</p>
      {reviewComponents}
      <div className='loadmore-div' style={{ display:'none' }}>
        <div className='loadmore-button' onClick={loadMore}>
          Load More
        </div>
      </div>
    </div>
  )
}

export default App
