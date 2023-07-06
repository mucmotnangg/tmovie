const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: "5b9ece60beb80542e82d9891eb1f645f",
    originalImage : (imgPath)=>`https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image : (imgPath)=>`https://image.tmdb.org/t/p/w500/${imgPath}`,
    videoYoutube: (id)=>` https://www.youtube.com/watch?v=${id}`
}

export default apiConfig;