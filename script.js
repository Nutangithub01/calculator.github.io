//here is class using in ES6
  class CalculatorModel {  
   n1  = 0;
   n2 = 0;
   result = 0;
   add(){
    this.result = this.n1 + this.n2;
   }
   subtract(){
    this.result = this.n1 - this.n2;
   }
   multiply(){
    this.result = this.n1 * this.n2;
   }
   divide(){
    this.result = this.n1 / this.n2;
   }
  }
  const model = new CalculatorModel();
  const onTxtNumber1Change = (evt) => {
   model.n1 = evt.target.valueAsNumber;
  };
  const onTxtNumber2Change = (evt) => {
   model.n2 = evt.target.valueAsNumber;
  };
  const displayResult = () => {
   document.getElementById('divResult')
    .innerText = model.result;
  };
  const onBtnAddClick = () => {
   model.add();
   displayResult();
  };
  const onBtnSubtractClick = () => {
   model.subtract();
   displayResult();
  }
  const onBtnMultiplyClick = () => {
   model.multiply();
   displayResult();
  }
  const onBtnDivideClick = () => {
   model.divide();
   displayResult();
  }
  window.addEventListener('load', () => {
   let txtNumber1 = document.getElementById('txtNumber1');
   txtNumber1.addEventListener('change', onTxtNumber1Change);
   let txtNumber2 = document.getElementById('txtNumber2');
   txtNumber2.addEventListener('change', onTxtNumber2Change);
   document.getElementById('btnAdd')
    .addEventListener('click', onBtnAddClick);
   document.getElementById('btnSubtract')
    .addEventListener('click', onBtnSubtractClick);
   document.getElementById('btnMultiply')
    .addEventListener('click', onBtnMultiplyClick);
   document.getElementById('btnDivide')
    .addEventListener('click', onBtnDivideClick);
  });
  