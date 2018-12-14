const API_BASE = 'http://jsonplaceholder.typicode.com/'

class Api {
    async getUsersList(){
        const query = await fetch (`${API_BASE}users`);
        const { data } = await query.json();
        return data
    }
    async getAlbumsList(){
        const query = await fetch (`${API_BASE}albums`)
        const { data } = await query.json();
        return data
    }
}

export default new Api();
