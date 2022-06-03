const API_URL_RANDOM = 'https://api.thecatapi.com/v1/images/search?limit=2&api_key=1ddcacfa-9d00-4ac2-8567-563c3e86a9c4'

const API_URL_FAVORITES = 'https://api.thecatapi.com/v1/favourites?limit=2&api_key=1ddcacfa-9d00-4ac2-8567-563c3e86a9c4'


async function loadRandomMichis() {
    const res = await fetch(API_URL_RANDOM)
    const data = await res.json()

    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')


    img1.src = data[0].url
    img2.src = data[1].url
    
}
async function loadFavoritesMichis() {
    const res = await fetch(API_URL_FAVORITES)
    const data = await res.json()

    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')


    img1.src = data[0].url
    img2.src = data[1].url
    
}

loadFavoritesMichis()
loadRandomMichis()