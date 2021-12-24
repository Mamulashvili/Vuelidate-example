export default ({
    install: app => {
        app.component('DataInfo', {
            props: ['sd'],  // store data
            template: `<div class="info">
            {{ sd }}
            </div>`,
        })
    }
})