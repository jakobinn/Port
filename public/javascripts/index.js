$(function() {
    var filterList = {
        init: function() {
            $('#portitems').mixItUp({
                selectors: {
                    target: '.portfolio',
                    filter: '.filter'
                },
            });
        }
    };
    filterList.init();
});