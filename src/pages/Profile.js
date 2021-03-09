import { useEffect, useState } from 'react';


function ProfilePage() {
  const [profile, setProfile] = useState({});
 
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      fetch('http://localhost:4000/api/v1/users/profile', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/JSON',
          'auth': token
        }
      })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
      }) 
      .then((data) => {
        console.log(data);
        setProfile(data.profile)
      })
      .catch((err) => console.log(err))
    }
  }, [])

  return (
    <div>
      <h2>Profile Page</h2>
      <p><strong>Name: </strong>{profile.name}</p>
    </div>
  );
}

export default ProfilePage;