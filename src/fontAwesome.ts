// ./src/fontawesome.ts

import { library } from '@fortawesome/fontawesome-svg-core'

// solid family icons
import { faFaceSurprise as FaSolidFaceSurprise } from '@fortawesome/free-solid-svg-icons/faFaceSurprise'
import { faHouse as FaSolidHouse } from '@fortawesome/free-solid-svg-icons/faHouse'
import { faHeart as FaSolidHeart } from '@fortawesome/free-solid-svg-icons/faHeart'

library.add(
    FaSolidFaceSurprise,
    FaSolidHouse,
    FaSolidHeart,
)
