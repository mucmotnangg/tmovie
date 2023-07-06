import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv : 'tv'
}

export const movieType ={
    upcoming : 'upcoming',
    popular : 'popular',
    now_playing : 'now_playing',
    top_rated: 'top_rated'
}

export const tvType ={
    airing_today : 'airing_today',
    popular : 'popular',
    on_the_air : 'on_the_air',
    top_rated: 'top_rated'
}
const tmdbApi = {
    getMovieList: (type,params)=>{
        const url = 'movie/' + movieType[type];
        return axiosClient.get(url,params);
    },
    getTvList: (type,params)=>{
        const url = 'tv/' + tvType[type];
        return axiosClient.get(url,params);
    },
    getVideos: (cate,id)=>{
        const url = category[cate] +'/' + id + '/videos';
        return axiosClient.get(url,{params:{}});
    },
    getDetails: (cate,id)=>{
        const url = category[cate] +'/' + id;
        return axiosClient.get(url,{params:{}});
    },
    getRecommendations: (cate,id)=>{
        const url = category[cate] +'/' + id +'/recommendations';
        return axiosClient.get(url,{params:{}});
    },
    getReviews: (cate,id)=>{
        const url = category[cate] +'/' + id +'/reviews';
        return axiosClient.get(url,{params:{}});
    },
    getSimilar: (cate,id)=>{
        const url = category[cate] +'/' + id +'/similar';
        return axiosClient.get(url,{params:{}});
    },
    getCredits: (cate,id)=>{
        const url = category[cate] +'/' + id +'/credits';
        return axiosClient.get(url,{params:{}});
    },
    getProviders: (cate,id)=>{
        const url = category[cate] +'/' + id +'/providers';
        return axiosClient.get(url,{params:{}});
    },
    getColletions: (name,params)=>{
        const url = `search/collection?query=${name}`;
        return axiosClient.get(url,params);
    }
}

export default tmdbApi;