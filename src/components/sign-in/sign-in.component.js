import React, { useState } from "react";
import { connect } from "react-redux";
// import { auth } from "../../firebase/firebase.utils";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.action";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

// class SignIn extends React.Component {
// constructor(props) {
//   super(props);

//   this.state = {
//     email: "",
//     password: "",
//   };
// }
const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // const { emailSignInStart } = this.props;
    // const { email, password } = this.state;

    emailSignInStart({ email, password });

    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.error(error);
    // }
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    // this.setState({ [name]: value });
    setUserCredentials({ ...userCredentials, [name]: value });
  };
  // render() {
  // const { googleSignInStart } = this.props;
  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>

      {/* <form onSubmit={this.handleSubmit}> */}
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          // handleChange={this.handleChange}
          handleChange={handleChange}
          // value={this.state.email}
          value={email}
          required
          label="email"
        />
        <FormInput
          name="password"
          type="password"
          // handleChange={this.handleChange}
          handleChange={handleChange}
          // value={this.state.password}
          value={password}
          required
          label="password"
        />
        <div className="button">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
  // }
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (emailAndPassword) =>
    dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(SignIn);
