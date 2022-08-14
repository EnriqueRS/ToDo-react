import React from "react";

function Login() {
  return (
    <div id="wrapper">
      <h1>ToDo Application</h1>
      <div class="form_div">
        {/* <p class="form_label">LOGIN</p> */}
        <form method="post" action="">
          {/* <img src="/login_icon.svg"></img> */}
          <div class="center icon login_icon"/>
          <p><input type="text" placeholder="Enter Email" /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p><input type="submit" value="LOGIN" /></p>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div class="form_div">
        {/* <p class="form_label">SIGNUP FORM</p> */}
        <form method="post" action="">
          <div class="center icon signup_icon"/>
          <p><input type="text" placeholder="Enter Name" /></p>
          <p><input type="text" placeholder="Enter Email" /></p>
          <p><input type="password" placeholder="Password" /></p>
          <p><input type="submit" value="SIGNUP" /></p>
        </form>
      </div>
    </div>
  );
}

export default Login;