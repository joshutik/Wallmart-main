// import from 'react';
// import './ProfileNavbar.css';

// const ProfileNavbar = () => {
//   return (
//     <div className="profile-navbar">
//       <img 
//         src="https://via.placeholder.com/40" 
//         alt="Profile" 
//         className="profile-img" 
//       />
//       <span className="profile-email">Admin786@gmail.com</span>
//     </div>
//   );
// };

// export default ProfileNavbar;



import{ useState, useEffect } from 'react';
import './ProfileNavbar.css';

const ProfileNavbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user's information from your authentication system
    // Replace the below code with actual user data fetching logic
    const loggedInUser = {
      email: 'Admin786@gmail.com',
      photoUrl: 'https://via.placeholder.com/40', // Replace with actual photo URL
    };

    setUser(loggedInUser);
  }, []);

  if (!user) return null; // Don't display anything if the user isn't logged in

  return (
    <div className="profile-navbar">
      <img 
        src={user.photoUrl} 
        alt="Profile" 
        className="profile-img" 
      />
      <span className="profile-email">{user.email}</span>
    </div>
  );
};

export default ProfileNavbar;