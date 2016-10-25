Object.prototype.as = function(type) {
    let self = this;
    for (var key in type) {
        if (type.hasOwnProperty(key)) {
            var element = type[key];
            self[key] = element;
        }
    }
    self.__proto__ = type.prototype;

    return self;
}
