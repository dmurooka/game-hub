import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params: {
        key: 'b641018ced764889a00ecdad171462be'
    }
})