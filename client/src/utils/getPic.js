import BRYNLEE from "../playerpic/brynlee.jpeg"
import ADDY from "../playerpic/addy.jpeg"
import HALIE from "../playerpic/halie.PNG"
import GRACE from "../playerpic/grace.jpeg"
import ZAIRA from "../playerpic/zaira.jpg"

const getPic = player => {
    switch (player) {
        case "Brynlee Taga":
            return BRYNLEE;
        case "Addison Yurt":
            return ADDY;
        case "Halie Lavoie":
            return HALIE;
        case "Grace Vincent":
            return GRACE;
        case "Zaira Vigil":
            return ZAIRA;
    }
        
}

export default getPic