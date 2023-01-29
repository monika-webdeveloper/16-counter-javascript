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

class Counter {
  constructor (element, value) {
     this.counter = element;
     this.value = value;
     this.resetBtn = element.querySelector(".reset");
     this.increaseBtn = element.querySelector(".increase");
     this.decreaseBtn = element.querySelector(".decrease");
     this.valueDOM = element.querySelector(".value");
     this.valueDOM.textContent = this.value;
     ///// bind 'this'
     this.increase = this.increase.bind(this);
     this.decrease = this.decrease.bind(this);
     this.reset = this.reset.bind(this);
     this.changeColour = this.changeColour.bind(this)
     this.increaseBtn.addEventListener("click", this.increase);
     this.resetBtn.addEventListener("click", this.reset);
     this.decreaseBtn.addEventListener("click", this.decrease);
  }
  increase () {
    this.value++;
    this.valueDOM.textContent = this.value;
    this.changeColour()
  }
  reset () {
    this.value = 0;
    this.valueDOM.textContent = this.value;
    this.changeColour()
  }
  decrease () {
    this.value--;
    this.valueDOM.textContent = this.value;
    this.changeColour()
  }
  changeColour () {
    if (this.value > 0) {
      this.valueDOM.style.color = "green"
    }
    else if (this.value < 0) {
      this.valueDOM.style.color = "red"
    }
    else {
      this.valueDOM.style.color = "black"
    }
  }
}

const firstCounter = new Counter(getElement(".first-counter"), 0);
const secondCounter = new Counter(getElement(".second-counter"), 0);

