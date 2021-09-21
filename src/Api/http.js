import axios from 'axios';

// const queryString = require('query-string');

const API_KEY = process.env.REACT_APP_DB_API_KEY;
export const url = process.env.REACT_APP_NFDDB_URL;

const fetchRequest = async (way) => {
  const res = await axios.get(`${url}${way}`, {
    headers: {
      'X-Api-Factory-Application-Id': API_KEY,
      'Access-Control-Allow-Origin': '*',
      'Content-type': 'text-html',
    },
  });
  return res.data;
};

export const getCityList = async () => {
  const res = await fetchRequest('/db/city');
  return res.data;
};

export const getPointListByCityId = async (cityId) => {
  const res = await fetchRequest(`/db/point?cityId=${cityId}`);
  return res.data;
};

export const getCarList = async () => {
  const res = await fetchRequest('/db/car');
  return res.data;
};

export const getCarCategory = async () => {
  const res = await fetchRequest('/db/category');
  return res.data;
};

export const getCarListByCategory = async (catId) => {
  const res = await fetchRequest(`/db/car?categoryId=${catId}`);
  return res.data;
};
// export const getLeagueCalendarPage = async (leagueId) => {
//   const data = await fetchRequest(`/competitions/${leagueId}`);
//   return data;
// };

// export const getTeamsList = async () => {
//   const data = await fetchRequest('/teams');
//   return data;
// };

// export const getTeamCalendarPage = async (teamId) => {
//   const data = await fetchRequest(`/teams/${teamId}/matches`);
//   return data;
// };

// export const getLeagueTeamsList = async (leagueId) => {
//   const parse = queryString.parse(window.location.search);
//   let path = '';
//   if (parse.season) {
//     path = `/competitions/${leagueId}/teams?season=${parse.season}`;
//   } else {
//     path = `/competitions/${leagueId}/teams`;
//   }
//   const data = await fetchRequest(path);

//   return data;
// };

export default fetchRequest;
