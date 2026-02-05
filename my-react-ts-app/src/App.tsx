import AuthStatus from "./Components/AuthStatus"
import Profile from "./Components/Profile"
import TypedForm from "./Components/TypedForm"


function App() {

  return (
    <>
      <h1>User profile</h1>
      <Profile name="Anzil" age={21} />
      <h1>Typed form</h1>
      <TypedForm />
      <h1>Auth Context</h1>
      <AuthStatus/>
    </>
  )
}

export default App
