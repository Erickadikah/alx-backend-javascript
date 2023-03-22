import SignupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const userName = SignupUser(firstName, lastName);
  const userPic = uploadPhoto(fileName);

  const info = await Promise.allSettled([userName, userPic])
    .then((response) => response.map((response) => {
      if (response.status !== 'fulfilled') {
        return {
          status: 'rejected',
          value: response.reason.toString(),
        };
      }
      return response;
    }));
  return Promise.resolve(info);
}
