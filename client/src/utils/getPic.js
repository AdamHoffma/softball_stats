import BRYNLEE from "../playerpic/brynlee.jpeg"
import ADDY from "../playerpic/addy.jpeg"
import HALIE from "../playerpic/halie.PNG"

const getPic = player => {
    switch (player) {
        case "Brynlee Taga":
            return BRYNLEE;
        case "Addison Yurt":
            return ADDY;
        case "Halie Lavoie":
            return HALIE
    }
        
}

export default getPic