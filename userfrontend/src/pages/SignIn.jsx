import "../styles/signin.css";

function SignIn() {
  return (
    <div className="signin-page">
      <h2>Sign In</h2>
      <form className="signin-form">
        <label>Email: <input type="email" /></label>
        <label>Password: <input type="password" /></label>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="#">Register</a></p>
    </div>
  );
}

export default SignIn;
