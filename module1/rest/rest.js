var myfriend = function () {
    var friend = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friend[_i] = arguments[_i];
    }
    friend.forEach(function (element) {
        console.log(element);
    });
};
myfriend('abul', 'kabul');
