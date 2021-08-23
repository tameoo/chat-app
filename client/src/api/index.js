const fetchUserSignIn = async (bodyData) => {
  const data = await fetch("http://localhost:8000/user/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  if (!data.ok) {
    const response = await data.json();
    throw new Error(response.message);
  }

  return await data.json();
};

const fetchUserSignUp = async (bodyData) => {
  const data = await fetch("http://localhost:8000/user/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });

  if (!data.ok) {
    const response = await data.json();
    throw new Error(response.message);
  }

  return await data.json();
};

const fetchAllConversations = async (bearerToken) => {
  const data = await fetch(
    "http://localhost:8000/conversation/retrieve-conversation",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!data.ok) {
    const response = await data.json();
    throw new Error(response.message);
  }

  return await data.json();
};

export { fetchUserSignIn, fetchUserSignUp, fetchAllConversations };
