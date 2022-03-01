import Plyr from 'plyr';

export default Alpine => {
    Alpine.data('MI_Site_Component_Atom_VideoExternal', () => ({
        init() {
            new Plyr(this.$el, {
                youtube: {
                    noCookie: true,
                },
            })
        }
    }))
}
