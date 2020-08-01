import React, { useState } from "react";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up.styles.scss";

// class SignUP extends React.Component {
// constructor() {
//   super();
//   this.state = {
//     displayName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   };
// }
const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { signUpStart } = this.props;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    signUpStart({ email, password, displayName });
    // try {
    // const { user } = await auth.createUserWithEmailAndPassword(
    //   email,
    //   password
    // );
    // await createUserProfileDocument(user, { displayName });
    // this.state = {
    //   displayName: "",
    //   email: "",
    //   password: "",
    //   confirmPassword: "",
    // };
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    // this.setState({ [name]: value });
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  // render() {
  // const { displayName, email, password, confirmPassword } = this.state;
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with you email and password</span>
      {/* <form className="sign-up-form" onSubmit={this.handleSubmit}> */}
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          // handleChange={this.h÷andleChange}
          handleChange={handleChange}
          value={displayName}
          required
          label="Display Name"
        />
        <FormInput
          name="email"
          type="email"
          // handleChange={this.handleChange}
          handleChange={handleChange}
          value={email}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type="password"
          // handleChange={this.handleChange}
          handleChange={handleChange}
          value={password}
          required
          label="Password"
        />
        <FormInput
          name="confirmPassword"
          type="password"
          // handleChange={this.handleChange}
          handleChange={handleChange}
          value={confirmPassword}
          required
          label="Confirm Password"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
  // }
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
