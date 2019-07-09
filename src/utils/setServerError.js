export default function setServerError(error) {
  const errorCode = error.message.slice(-3);
  let serverError;
  if (errorCode === '401') {
    serverError = {
      password: 'Wrong password!',
    };
  } else if (errorCode === '404') {
    serverError = {
      email: 'User not found!',
    };
  } else if (errorCode === '409') {
    serverError = {
      email: 'Email already used!',
    };
  } else {
    serverError = {
      general: 'Sorry something went wrong!',
    };
  }

  return serverError;
}
