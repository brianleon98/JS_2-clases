function this10() {
    var a = 0;
    var b = 0;
    if (a == 0) {
        var b = 11;
        this.a = 10 + 30;
    }
    return this.a;
}
console.log(this.this10());