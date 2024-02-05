import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api/character';

const fetchData = async searchQuery => {
  const res = await axios.get(`/?name=${searchQuery}`);

  return res.data.results;
};

export default fetchData;
