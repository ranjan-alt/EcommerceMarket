const Login = () => {
  return (
    <>
      <h3>Sign up </h3>
      <div>
        <input type="text" placeholder="your name" />
        <input type="email" placeholder="your email" />
        <input type="password" placeholder="your password" />
      </div>
      <button>Continue</button>
      <p>
        Already have an account? <span>Login</span>
      </p>
      <div>
        <input type="checkbox" />
        <p>By Continuing, i agree to the terms of use and privacy policy</p>
      </div>
    </>
  );
};

export default Login;
