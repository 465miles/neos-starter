
export default Alpine => {
    Alpine.data('MI_Site_Component_Atom_AccordionItem', id => ({
        get open() {
            return this.selected === id
        },
        toggle() {
            this.selected === id
                ? this.selected = null
                : this.selected = id
        },
    }))
}
