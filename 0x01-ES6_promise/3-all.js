import { uploadPhoto, createUser } from "./utils.js";

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();
  const userPromise = createUser();

  Promise.all([photoPromise, userPromise])
  .then(result => {
    const msg = `${result[0].body} ${result[1].firstName} ${result[1].lastName}`;
    console.log(msg);
  })
}
