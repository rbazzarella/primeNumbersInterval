let loopCount = 0;

class PrimesInterval {

  const min = document.getElementById('min')! as HTMLInputElement;
  const max = document.getElementById('max')! as HTMLInputElement;
  const form = document.querySelector('form')! as HTMLFormElement;
  const answer = document.querySelector('#test');

  constructor() {
    this.submitingForm();
  }

  submitingForm() {
    this.form.addEventListener('submit', this.generateArr.bind(this));
  }

  generateArr(e: Event): void {
    e.preventDefault();
    let minVal = Number(this.min.value);
    let maxVal = Number(this.max.value);

    if(isNaN(minVal) || isNaN(maxVal)) {
      this.answer.innerHTML = "insert a number, please";
      return;
    }


    if(this.min.value.length == 0 || this.max.value.length == 0) {
      this.answer.innerHTML = "the fields cannot be blank. Fill both fields, please";
      return;
    }

    if(minVal >= maxVal) {
      this.answer.innerHTML = "minimum value should be less then maximun value";
      return;
    }

    let arr: number[] = [];

    for(let i=minVal; i <= maxVal; i++) {
      arr.push(i);
    }

    const result: number[] = this.filterPrimes(arr);

    if(result.length === 0) {
      this.answer.innerHTML = "there isn't any prime number between " + minVal + " and " + maxVal;
      return;
    }

    console.log('loopCount', loopCount);

    this.answer.innerHTML = "there are (is) " + result.length + " prime number(s) between " + minVal + " and " + maxVal + " and they are: <br/><br/>" + result.join(", ");
  }

  isPrime(num: number):   boolean {

    let div = Math.ceil(num/2);
    let count = 1;
 
    while(div > 0) {
      loopCount++;
      if(num%div === 0) {
        count++;
        if(count > 2) {
          return false;
        }
      }
      div--;
    }

    if(num === 1 || num === 0) {
      return true;
    }

    if(count === 2){
      return true;
    }
      return false;
  }

  filterPrimes(arr2: number[]): number[] {
    let i = 0;
    let arrayOfPrimes: number[] = [];

   arrayOfPrimes = arr2.filter(el => this.isPrime(el));
 
    return arrayOfPrimes;
  }
}

const primesintervalnst = new PrimesInterval();

addEventListener('load', function(e) {
});
