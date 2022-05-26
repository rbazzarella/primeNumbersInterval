var PrimesInterval = /** @class */ (function () {
    function PrimesInterval() {
        this.loopCount = 0;
        this.min = document.getElementById('min');
        this.max = document.getElementById('max');
        this.form = document.querySelector('form');
        this.answer = document.querySelector('#answer');
        this.submitingForm();
    }
    PrimesInterval.prototype.submitingForm = function () {
        this.form.addEventListener('submit', this.generateArr.bind(this));
    };
    PrimesInterval.prototype.generateArr = function (e) {
        e.preventDefault();
        var minVal = Number(this.min.value);
        var maxVal = Number(this.max.value);
        if (isNaN(minVal) || isNaN(maxVal)) {
            this.answer.innerHTML = "insert a number, please";
            return;
        }
        if (this.min.value.length == 0 || this.max.value.length == 0) {
            this.answer.innerHTML = "The fields cannot be blank. Fill both fields, please";
            return;
        }
        if (minVal >= maxVal) {
            this.answer.innerHTML = "Minimum value should be less then maximun value";
            return;
        }
        var arr = [];
        for (var i = minVal; i <= maxVal; i++) {
            arr.push(i);
        }
        var result = this.filterPrimes(arr);
        if (result.length === 0) {
            this.answer.innerHTML = "There isn't any prime number between " + minVal + " and " + maxVal;
            return;
        }
        console.log('loopCount', this.loopCount);
        this.answer.innerHTML = "There are (is) " + result.length + " prime number(s) between " + minVal + " and " + maxVal + " and they are: <br/><br/>" + result.join(", ");
    };
    PrimesInterval.prototype.isPrime = function (num) {
        var div = Math.ceil(num / 2);
        var count = 1;
        while (div > 0) {
            this.loopCount++;
            if (num % div === 0) {
                count++;
                if (count > 2) {
                    return false;
                }
            }
            div--;
        }
        if (num === 1 || num === 0) {
            return true;
        }
        if (count === 2) {
            return true;
        }
        return false;
    };
    PrimesInterval.prototype.filterPrimes = function (arr2) {
        var _this = this;
        var i = 0;
        var arrayOfPrimes = [];
        arrayOfPrimes = arr2.filter(function (el) { return _this.isPrime(el); });
        return arrayOfPrimes;
    };
    return PrimesInterval;
}());
new PrimesInterval();
