import { StyledForm } from "./SignIn.styled";

export default function SignIn() {
  function onSubmit(e) {
    e.preventDefault();
    console.log("Submitted");
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <div className="input-wrapper">
        <label htmlFor="email">Email </label>
        <input type="email" name="email" id="email" className="user-input" />
      </div>

      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="user-input"
        />
      </div>
      <button className="submit">Login</button>
      <button className="register">Create an account</button>
    </StyledForm>
  );
}
