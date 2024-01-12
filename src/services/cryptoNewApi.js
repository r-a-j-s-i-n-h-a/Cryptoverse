import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': '9ca113e8b5ce47e289bd7a04a4d4c37f',
    // 'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
}
const baseUrl = 'https://newsapi.org';

const createRequest = (url) => (url)

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi', 
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/v2/everything?q=${newsCategory}&publishedAt&apiKey=57082477bdb745adb73589067d2305d9&count=${count}`),
        }),
    }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
