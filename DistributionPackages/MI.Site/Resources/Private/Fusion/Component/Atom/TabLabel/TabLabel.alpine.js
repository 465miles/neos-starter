
export default Alpine => {
    Alpine.data('MI_Site_Component_Atom_TabLabel', id => ({
        init() {
            if (this.selected === null) {
                this.show()
            }
        },
        get open() {
            return this.selected === id
        },
        show() {
            this.selected = id
        },
    }))
}
