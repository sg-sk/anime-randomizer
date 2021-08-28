import { API_URL, ANILIST_MAX_PER_PAGE, ANILIST_MAX_PAGE } from './config';
import { getRandomizedNumber } from './helpers';

// GraphQL query which fetches a list of animes
const query = `
query ($page: Int, $perPage: Int) {
    Page (page: $page, perPage: $perPage) {
        media (format: TV, type: ANIME, sort: POPULARITY_DESC) {
            id
            title {
                romaji
            }
            seasonYear
            averageScore
            coverImage {
              large
              color
            }
            bannerImage
            description
        }
    }
}
`;

const variables = {
  page: getRandomizedNumber(1, ANILIST_MAX_PAGE),
  perPage: ANILIST_MAX_PER_PAGE,
};

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: query,
    variables: variables,
  }),
};

const apiSettings = {
  fetchAnimeList: async () => {
    return await (await fetch(API_URL, requestOptions)).json();
  },
};

export default apiSettings;
