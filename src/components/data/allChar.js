import axios from 'axios';

const fetchAllChar = async () => {
  const res = await axios.get();

  return res;
};

export default fetchAllChar;
