const API_DOMAIN = 'https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt'
const API_KEY = 'apiKey=339f09b90362468f92b4f1b588621c29'


export const category_api = category => `${API_DOMAIN}&category=${category}&${API_KEY}`
export const search_api = q => `${API_DOMAIN}&q=${q}&${API_KEY}`