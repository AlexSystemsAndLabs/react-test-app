class pixabayService {

    async getAllHits() {
        const KEY = '13897658-c6a723525e89d0abec6e0570b'
        const API_URL = `https://pixabay.com/api/?key=${KEY}&q=cats&image_type=all&per_page=50`
        const response = await fetch(API_URL)
        const data = await response.json()
        return await data.hits
    }

    async getOneHit(id) {
        const KEY = '13897658-c6a723525e89d0abec6e0570b'
        const API_URL = `https://pixabay.com/api/?key=${KEY}&id=${id}`
        const response = await fetch(API_URL)
        const data = await response.json()
        return await data.hits[0]
    }
}

export default new pixabayService()