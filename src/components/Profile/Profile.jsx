import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Profile</h1>
{console.log(user.name)}
      <p>{user.name}</p>

      <p>{user.email}</p>
    </div>
  );
};

export default Profile;