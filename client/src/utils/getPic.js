import BRYNLEE from "../playerpic/brynlee.jpeg"
import ADDY from "../playerpic/addy.jpeg"
import HALIE from "../playerpic/halie.PNG"

const getPic = player => {
    switch (player) {
        case 1:
            return BRYNLEE;
        case 2:
            return ADDY;
        case 3:
            return HALIE
    }
        
}

export default getPic