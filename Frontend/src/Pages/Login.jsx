import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };
  const login = async () => {
    console.log("login function");
  };

  const signUp = async () => {
    console.log("sign up function");
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/formdata",
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  return (
    <>
      <h3>{state}</h3>
      <div>
        {state === "Sign up" && (
          <div>
            <input
              type="text"
              placeholder="your name"
              name="username"
              value={formData.username}
              onChange={changeHandler}
            />
          </div>
        )}
        <div>
          <input
            type="email"
            placeholder="your email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="your password"
            value={formData.passsword}
            onChange={changeHandler}
          />
        </div>
      </div>
      <button onClick={() => (state === "Login" ? login() : signUp())}>
        Continue
      </button>
      {state === "Sign up" ? (
        <p>
          Already have an account?{" "}
          <span onClick={() => setState("Login")}>Login</span>
        </p>
      ) : (
        <p>
          Create an account?{" "}
          <span onClick={() => setState("Sign up")}>Click here</span>
        </p>
      )}
      <div>
        <p>By Continuing, i agree to the terms of use and privacy policy</p>
        <input type="checkbox" />
      </div>
    </>
  );
};

export default Login;
