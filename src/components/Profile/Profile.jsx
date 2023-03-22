import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Profile{console.log(user)}</h1>

      <p>{user?.user.name}</p>

      <p>{user?.user.email}</p>

      <p>{user?.user.role}</p>
    </div>
  );
};

export default Profile;
