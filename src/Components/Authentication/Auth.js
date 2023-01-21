export default function Auth(props) {
  return (
    <div>
      <h1>You must be logged in to see that page</h1>
      <h1>Admin Login</h1>
      <input type="text" id="username" name="username" />
      <input type="password" id="password" name="password" />
      <button>Log in</button>
    </div>
  );
}
