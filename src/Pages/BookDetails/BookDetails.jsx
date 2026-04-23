import React from 'react';
import { useParams } from 'react-router';

const BookDetails = () => {
  const params = useParams()
  console.log(params)
  return (
    <div className='mt-20'>
      <h2>book details</h2>
    </div>
  );
};

export default BookDetails;