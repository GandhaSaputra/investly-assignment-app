let API: (
  data: {
    email: string;
    password: string;
  },
  url: string,
) => Promise<{
  status: boolean;
  messages: string;
}>;

API = async (data, url) => {
  const dataToSend = {
    email: data.email,
    password: data.password,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(dataToSend),
  }).then(resp => resp.json());

  return response;
};

export default API;
