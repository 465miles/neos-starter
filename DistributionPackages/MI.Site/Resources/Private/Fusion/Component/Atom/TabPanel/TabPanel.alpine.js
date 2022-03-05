
export default Alpine => {
    Alpine.data('MI_Site_Component_Atom_TabPanel', id => ({
        get open() {
            return this.selected === id
        }
    }))
}
