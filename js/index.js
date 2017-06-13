let hello = {
    name: '小明',
    getName: function () {
        return 'Hi，我是' + this.name + '！';
    }
};
console.log(hello.getName());