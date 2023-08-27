import { useAuthContext } from "../context/AuthContext";
import { useLogout } from "../hooks/useLogout";

export default function Home() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  return (
    <div className="utility__page ">
      <h1> Home Page</h1>
      {user && (
        <>
          <div className="user">
            <p> You&apos;re logged in as: </p>

            <span>{user.displayName} </span>
            <img className="profile_img" src={user.photoURL} alt="" />
          </div>

          <button className="logout" onClick={() => logout()}>
            Log out
          </button>
        </>
      )}
    </div>
  );
}
