class SmartCalculator {
  constructor(initialValue) {
    //initialValue = this.initialValue;
    this.outp = [];
    this.outp.push(initialValue);
  }

  add(number) {
    this.outp.push('+');
    this.outp.push(number);
    return this;
  }

  subtract(number) {
    this.outp.push('-');
    this.outp.push(number);
    return this;
  }

  multiply(number) {
    this.outp.push('*');
    this.outp.push(number);
    return this;
  }

  devide(number) {
    this.outp.push('/');
    this.outp.push(number);
    return this;
  }

  pow(number) {
    this.outp.push('**');
    this.outp.push(number);
    return this;
  }
  valueOf(){
    for(let i = this.outp.length-1; i > 0; i--){
      if(this.outp[i] == '**'){ //начинать надо с конца
        this.outp.splice(i-1, 3, Math.pow(this.outp[i-1], this.outp[i+1]));
        i++;
      }
    }
    for(let i = 0; i<this.outp.length; i++){
      if(this.outp[i] == '/'){
        this.outp.splice(i-1, 3, this.outp[i-1]/this.outp[i+1]);
        i--;
      }
    }
    for(let i = 0; i<this.outp.length; i++){
      if(this.outp[i] == '*'){
        this.outp.splice(i-1, 3, this.outp[i-1]*this.outp[i+1]);
        i--;
      }
    }
    for(let i = 0; i<this.outp.length; i++){
      if(this.outp[i] == '-'){
        this.outp.splice(i-1, 3, this.outp[i-1]-this.outp[i+1]);
        i--;
      }
    }
    for(let i = 0; i<this.outp.length; i++){
      if(this.outp[i] == '+'){
        this.outp.splice(i-1, 3, this.outp[i-1]+this.outp[i+1]);
        i--;
      }
    }
    return this.outp.join('');
  }
}

module.exports = SmartCalculator;
