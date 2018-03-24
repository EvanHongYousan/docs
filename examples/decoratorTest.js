Function.prototype.before = function (beforefn) {
    var _self = this;
    return function () {
        beforefn.apply(this, arguments);
        return _self.apply(this, arguments);
    };
};

Function.prototype.after = function (afterfn) {
    var _self = this;
    return function () {
        var ret = _self.apply(this, arguments);;
        afterfn.apply(this, arguments);
        return ret;
    };
};

var func = function (param) {
    console.log(param);
}

func = func.before(function (param) {
    param.kk = 'kk';
    console.log('decorator params');
});

func = func.after(function (param) {
    console.log('report: ' + JSON.stringify(param));
});

func({ aw: 'wa' });