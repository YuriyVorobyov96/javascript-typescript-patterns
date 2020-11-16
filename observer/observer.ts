interface subscriber {
  title: string;
  callback: () => void;
}

class Observable {
  subscribers: subscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(cb) {
    this.subscribers.push(cb);
  }

  unsubscribe(cb) {
    this.subscribers = this.subscribers.filter(item => item !== cb);
  }

  sendMessage(msg) {
    this.subscribers.forEach(cb => cb(msg));
  }
}

const sub1 = (msg: string): void => console.log(`Hello ${msg}`);
const sub2 = (msg: string): void => console.log(`And goodbye ${msg}`);
const sub3 = (msg: string): void => console.log(`${msg} foo ${msg}`);

const observable = new Observable();

observable.subscribe(sub1);
observable.subscribe(sub2);

observable.sendMessage('I have fired');

observable.subscribe(sub3);
observable.unsubscribe(sub2);

observable.sendMessage('I have fired... again');
