const INFOJOBS_API_ENDPOINT = "https://api.infojobs.net/api/1";

const TOKEN = import.meta.env.API_INFOJOBS_TOKEN;
export const query = (oath: string) => {
  const url = `${INFOJOBS_API_ENDPOINT}${oath}`;
  return fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

type DictionaryId = "study" | "availability";

export const getDictionary = (dictionaryId: string) => {
  return query(`/dictionary/${dictionaryId}`);
};
