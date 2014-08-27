define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'whoAmI', title: 'Who Am I?', moduleId: 'viewmodels/whoAmI', nav: true },
                { route: 'tresta', title: 'What I Do (Now)', moduleId: 'viewmodels/tresta', nav: true },
                { route: 'auth', title: 'Who Are You?', moduleId: 'viewmodels/auth', nav: true },
                { route: 'hotness', title: 'Change-Up', moduleId: 'viewmodels/transitions', nav: true },
                { route: 'widgets', title: 'Wedgie', moduleId: 'viewmodels/widgets', nav: true },
                { route: 'routing', title: 'I-95', moduled: 'viewmodels/routing', nav: true}
            ]).buildNavigationModel();

            return router.activate();
        }
    };
});