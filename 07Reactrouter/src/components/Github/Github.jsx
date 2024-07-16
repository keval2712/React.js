import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const [userData, setUserData] = useState(null); // Use userData for clarity
  const dataFromLoader = useLoaderData(); // Use more descriptive variable name

  useEffect(() => {
    // Check if data is already available from route loader (prevents duplicate fetch)
    if (!userData && !dataFromLoader?.error) { // Check for error object in data
      fetch('https://api.github.com/users/keval2712')
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching data:', error)); // Handle errors
    }
  }, [userData, dataFromLoader]); // Only re-fetch on change of userData or loader data

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      {userData && ( // Conditional rendering for loading state
        <div>
          <h2>Github Followers: {userData.followers}</h2>
          <img src={userData.avatar_url} alt="Git picture" width={300} />
        </div>
      )}
      {!userData && <p>Loading user data...</p>}
    </div>
  );
}

export default Github;

// Assuming you have separate routing setup (replace accordingly):
export const githubInfoLoader = async () => {
  try {
    const response = await fetch('https://api.github.com/users/keval2712');
    return response.json();
  } catch (error) {
    return { error }; // Return error object for handling in component
  }
}