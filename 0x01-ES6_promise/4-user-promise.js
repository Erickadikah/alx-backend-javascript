export default function SignupUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
