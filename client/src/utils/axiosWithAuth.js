import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token")
    const getUrl = window.location
    const currentUrl = getUrl.protocol + "//" + getUrl.host + "/"
    console.log("currentUrl", currentUrl)
    let baseURL

    if (currentUrl === "http://localhost:3000/") {
        baseURL = "http://localhost:5000"
        console.log("baseurl", baseURL)
    } else if (currentUrl === "https://elitexbandits.com/") {
        baseURL = "https://softballpage.herokuapp.com/"
        console.log("BASEURL", baseURL)
    }

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: baseURL
    })
}

