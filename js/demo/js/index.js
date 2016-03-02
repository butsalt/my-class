(function (test) {
    test(function () {
        return 1 + 1 === 2;
    }, '1 + 1 = 2');

    test(function () {
        return 123 + 256 === 777;
    }, '123 + 256 = 777');

    test(function () {
        throw '发生错误了';
    }, '异常不能被捕获');

    test(function () {
        var total = 0;
        var i;
        for (i = 1; i <= 999999; i++) {
            total += i;
        }
        return total === (1 + 999999) * 999999 / 2;
    }, '可以用简便公式计算1 + 2 + ... + 999999', true);
})(test);