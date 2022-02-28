import Plyr from 'plyr';

export default Alpine => (
    Alpine.data('MI_Site_Component_Atom_Video', () => ({
        init: ($el) => new Plyr($el)
    }))
)
