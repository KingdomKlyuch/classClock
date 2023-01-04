class Clock {
  constructor({ template }) {
    this.template = template;
  }

  get template() {
    return this._template;
  }

  set template(value) {
    this._template = value;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    this.template = `${hours}:${mins}:${secs}`;
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(this.render.bind(this), 1000);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();

class Display {
  constructor() {}

  display(clock) {
    clock.render();
    const element = document.querySelector('.clock');
    element.innerHTML = clock.template;
  }
}

const display = new Display();
display.display(clock);

setInterval(() => {
  display.display(clock);
}, 1000);

  