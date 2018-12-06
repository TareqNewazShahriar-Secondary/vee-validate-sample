/// <reference path="ref.js" />

Vue.use(VeeValidate, { delay: 600 });

new Vue({
    el: '#app',
    data: () => ({
        username: null,
        password: null,
        confirmPassword: null,
        photo: null,
        wife: null
    }),
    created: function () {
        console.log(this);
        this.$validator.extend('unique', {
            validate: (value) => {
                console.log('validating UNIQUE');
                return axios.post('/home/isUniqueEmail', { email: value })
                    .then((response) => {
                        console.log(response);
                        return {
                            valid: response.data.valid,
                            data: {
                                message: response.data.message
                            }
                        };
                    });
            },
            getMessage: (field, params, data) => {
                console.log('getMessage');
                console.log(field);
                console.log(params);
                console.log(data.message);
                return data.message;
            }
        });

    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {

                // console.log(this.$validator)
                if (result) {
                    // eslint-disable-next-line
                    alert('validation succeeded!');
                    return;
                }
            });
        },
        fileSelected(e) {
            console.log('file selected');
        }
    }
});
