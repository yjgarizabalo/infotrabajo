const INFOJOBS_API_ENDPOINT="https://api.infojobs.net/api/1/"

const TOKEN = import.meta.env.INFOJOBS_API_TOKEN;


export const query = (path: string) =>{
  const url = `${INFOJOBS_API_ENDPOINT}${path}`;
  fetch(url, {
    headers: {
      Authorization: `Basic ${TOKEN}`,
      'content-type': 'application/json'
    }
  }).then(response => response.json())
}

export const getDictionary = async (dictionaryId: string) => {
  return query(`dictionary/${dictionaryId}`)
}