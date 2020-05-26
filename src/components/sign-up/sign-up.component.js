import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

class SignUP extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.state = {
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with you email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            handleChange={this.handleChange}
            value={displayName}
            required
            label="Display Name"
          />
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={email}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={password}
            required
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            handleChange={this.handleChange}
            value={confirmPassword}
            required
            label="Confirm Password"
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}
export default SignUP;
