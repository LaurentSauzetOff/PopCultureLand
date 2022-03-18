import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#111',

            },
            dark: {
                primary: '#fff',
                //here you will define primary secondary stuff for dark theme
            }
        },
        dark: false
    }

})