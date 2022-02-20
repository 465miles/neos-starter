import Alpine from 'alpinejs'

import * as ButtonData from './Component/Atom/Button/Button.js'

const AlpineData = [
    ButtonData
]

AlpineData.map(component => {
    Object.entries(component).map(([key, value]) => {
        Alpine.data(key, value)
    })
})

Alpine.start()
