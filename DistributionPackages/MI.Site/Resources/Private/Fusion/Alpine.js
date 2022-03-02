import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import Button from './Component/Atom/Button/Button.alphine'
import Video from './Component/Atom/Video/Video.alpine'
import VideoExternal from './Component/Atom/VideoExternal/VideoExternal.alpine'
import AccordionItem from './Component/Atom/AccordionItem/AccordionItem.alpine'

Alpine.plugin(collapse)

Button(Alpine)
Video(Alpine)
VideoExternal(Alpine)
AccordionItem(Alpine)

Alpine.start()
