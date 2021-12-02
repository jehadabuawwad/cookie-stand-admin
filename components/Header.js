import { useAuth } from '../contexts/auth'

export default function Header() {
  const { user, login,logout } = useAuth()
  return (
    <header className="flex justify-between w-screen p-5 bg-green-500 ">
      <h1 className="text-4xl font-medium ml-60">Cookie Stand Admin </h1>

      <div className="flex mr-96">
        <button className="p-2 rounded-lg bg-green-50 border-5">rudy</button>
        {user ? (
          <div>
            <button className="flex-row p-2 ml-3 rounded-lg bg-green-50 border-5"
            onClick={() => {
              logout()
            }}>
              Sign Out
            </button>
            <h1 className="absolute ml-56 -mt-8 font-medium">welcome {user.username}</h1>
          </div>
          
        ) : (
          <button
            className="flex-row p-2 ml-3 bg-gray-500 rounded-lg border-3"
            onClick={() => {
              login('Jehadabuawwad', 'Jehadcom1100')
            }}
          >
            Login
          </button>
        )}
        <button className="flex-row p-2 ml-3 rounded-lg bg-green-50 border-5"
        >
          Overview
        </button>
      </div>
    </header>
  )
}
