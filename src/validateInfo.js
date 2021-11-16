export default function validateInfo(values) {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = "Username required";
  } else if (values.name.length < 4) {
    errors.name = "Username is to short";
  }

  if (!values.email.trim()) {
    errors.email = "Email required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password need to be 6 characters or more";
  } else if (!/!|#|@|\$|%/.test(values.password)) {
    errors.password =
      "Password must contain a spacial character (!, @, # or %) and number (0-9)";
  }

  if (!values.passwordRepeat) {
    errors.passwordRepeat = "Password required";
  } else if (values.passwordRepeat !== values.password) {
    errors.passwordRepeat = "Password do not match";
  }

  return errors;
}