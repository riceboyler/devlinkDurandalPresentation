define([], function() {
   ko.bindingHandlers.slideVisible = {
        init: function (element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            $(element).toggle(value);
        },
        update: function (element, valueAccessor, allBindingsAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            var duration = allBindingsAccessor().slideDuration || 400;

            if (value === true)
                $(element).slideDown(duration);
            else
                $(element).slideUp(duration);
        }
    };

    ko.bindingHandlers.fadeVisible = {
        init: function(element, valueAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            $(element).toggle(value);
        },
        update: function(element, valueAccessor, allBindingsAccessor) {
            var value = ko.utils.unwrapObservable(valueAccessor());
            var duration = allBindingsAccessor().slideDuration || 400;

            if(value === true)
                $(element).fadeIn(duration);
            else
                $(element).fadeOut(duration);
        }
    };
});