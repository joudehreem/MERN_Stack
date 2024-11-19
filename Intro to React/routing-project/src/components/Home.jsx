import { Link, Outlet, useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation()
  const {username} = location.state || {}
  return (
    <div>
      <Link to='profile'>Profile</Link>
      |
      <Link to  ='settings'>Settings</Link>

      <h1>Welcome { username}</h1>
      <Outlet/>
    </div>
  )
}