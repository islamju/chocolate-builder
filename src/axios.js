import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://builder-c2fd7-default-rtdb.firebaseio.com/";

export default instance;