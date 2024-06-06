
import './index.css'; // Ensure this points to your CSS file
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <Logo />
      <Credentials />
    </>
  );
}

function Logo() {
  return (
    <div className="logo"></div>
  );
}

function Credentials() {
  return (
    <div className="credentials">
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password" />
      <button>Login</button>
      <button>Signin with Google</button>
    </div>
  );
}

export default App;
