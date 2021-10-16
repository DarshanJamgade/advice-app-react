import axios from "axios";

const fetchAdvice = (setAdvice) => {
  axios
    .get("https://api.adviceslip.com/advice")
    .then((res) => {
      const { advice } = res.data.slip;
      setAdvice(advice);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default fetchAdvice;
