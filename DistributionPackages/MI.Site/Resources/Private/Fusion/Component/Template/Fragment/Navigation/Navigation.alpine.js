
export default Alpine => (
    Alpine.data('MI_Site_Component_Template_Fragment_Navigation', () => ({

        isOpen: false,

        megaContent: null,

        get open() {
          return this.isOpen;
        },

        show(html) {
            this.isOpen = true;
            this.megaContent = html.innerHTML
        },

        close() {
            this.isOpen = false;
        },

        init() {
        }
    }))
)
