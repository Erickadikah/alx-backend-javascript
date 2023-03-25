import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const [photo, user] = await Promise.all([uploadPhoto(), createUser()]);
    return { photo, user };
  } catch (err) {
    console.toString(err);
    return {
      photo: null,
      user: null,
    };
  }
}
