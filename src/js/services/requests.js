export const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data,
  });

  return await res.text();
};

export const getResource = async (url) => {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error("Couldn't get data from " + url);
  }

  return await res.json();
};
