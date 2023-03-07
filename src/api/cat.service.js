import httpReq from "./http.service";

class catService{
    async getAllCats() {
        const { data } = await httpReq.get("/api/getallcats")
        return data
    }
}

export default new catService();