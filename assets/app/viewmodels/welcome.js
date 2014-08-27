﻿define(['plugins/router'], function(router) {
    var ctor = function () {
        var self = this;
        self.displayName = 'Welcome to Real World';

        self.next = function() {
            router.navigate("whoAmI");
        };
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});