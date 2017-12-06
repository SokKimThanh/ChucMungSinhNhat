console.log('ready');

    var james = $('#bond');

    var right = function () {
        james.animate({ left: '5px' }, 600, left);
    };

    var left = function () {
        james.animate({ left: '0px' }, 600, right);
    };
    right();