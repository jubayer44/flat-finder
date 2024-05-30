"use server";
type TUserRegister = {
  username: string;
  email: string;
  password: string;
};

const registerUser = async (payload: TUserRegister) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/register`, 
  {
    method: "POST",
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(payload)
  }
  );
  const result = await res.json();

  return result;
};

export default registerUser;