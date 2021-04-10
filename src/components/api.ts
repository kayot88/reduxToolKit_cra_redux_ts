export const fetchProfile = (id: number) =>
  Promise.resolve({
    id: id,
    name: "JohnDo",
    phone: 1234,
    email: "test@gmail.com",
  });
