/* Module */
const axios = require('axios').default;
const baseURL = 'https://kiryuu.id';

/* === */
axios.defaults.baseURL = baseURL;

/* Function */
const Axios = async (url) => {
    return new Promise(async (fullfill, reject) => {
        
        try {
        const res = await axios.get(url);
        if (res.status === 200) return fullfill(res);
            else reject(res);
        } catch (err) {
            return reject({status: false, error: err.message});
        }

    })
}

module.exports = Axios;
