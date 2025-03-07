export const defineEnv = () => {
  if (window.location.hostname === 'localhost') {
    return {
      API_URL: 'http://localhost:5000/api/portfolio/v1',
      ADD_SKILL: '/add/skill',
      GET_SKILLS: '/get-skills',
      LOGIN: '/login',
      VERIFY: '/auth',
    };
  } else {
    return {
      API_URL: 'https://bk-app-be.onrender.com/api/portfolio/v1',
    };
  }
};
