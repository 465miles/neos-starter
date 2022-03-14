import Alpine from 'alpinejs'
import collapse from '@alpinejs/collapse'

import Button from './Component/Atom/Button/Button.alphine'
import Video from './Component/Atom/Video/Video.alpine'
import VideoExternal from './Component/Atom/VideoExternal/VideoExternal.alpine'
import AccordionItem from './Component/Atom/AccordionItem/AccordionItem.alpine'
import TabLabel from './Component/Atom/TabLabel/TabLabel.alpine'
import TabPanel from './Component/Atom/TabPanel/TabPanel.alpine'
import Navigation from './Component/Template/Fragment/Navigation/Navigation.alpine'

Alpine.plugin(collapse)

Button(Alpine)
Video(Alpine)
VideoExternal(Alpine)
AccordionItem(Alpine)
TabLabel(Alpine)
TabPanel(Alpine)

if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) >= 768) {
    Navigation(Alpine)
}

Alpine.magic('inBackendWaitForInlineEditing', el => callback => {

    if (window.neos === undefined) {
        callback()
        return
    }

    const inlineEditorWrap = el.querySelector('.neos-inline-editable')

    if (inlineEditorWrap === null) {
        callback()
        return
    }

    new MutationObserver((mutations, self) => {
        if (mutations.some(mutation => mutation.attributeName === 'data-neos-inline-editor-is-initialized')) {
            self.disconnect()
            callback()
        }
    }).observe(inlineEditorWrap, {attributes: true})
})

Alpine.start()
