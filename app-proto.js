
///// getting elements
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } else {
    throw new Error(
      `Please check "${selection}" selector, no such element exists`
    );
  }
}

function Counter (element, value) {
  this.counter = element;
  this.value = value;
  this.resetBtn = element.querySelector('.reset');
  this.increaseBtn = element.querySelector('.increase');
  this.decreaseBtn = element.querySelector('.decrease');
  this.valueDOM = element.querySelector('.value');
  this.valueDOM.textContent = this.value;
  ///// bind 'this'
  this.increase = this.increase.bind(this)
  this.decrease = this.decrease.bind(this)
  this.reset = this.reset.bind(this)
  this.increaseBtn.addEventListener('click', this.increase);
  this.resetBtn.addEventListener('click', this.reset);
  this.decreaseBtn.addEventListener('click', this.decrease)
};

///// functions
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value
}
Counter.prototype.reset = function () {
  this.value = 0;
  this.valueDOM.textContent = this.value
}
Counter.prototype.decrease = function () {
  this.value--;
  this.valueDOM.textContent = this.value
}

const firstCounter = new Counter(getElement(".first-counter"), 200);
const secondCounter = new Counter(getElement(".second-counter"), 1000);

firstCounter.increase()




