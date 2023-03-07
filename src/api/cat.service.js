import httpReq from "./http.service";

class catService{
    async getAllCats() {
        const {data} = await httpReq.get("/api/getallcats")
    }
}

export default new catService();