type Callback = () => void;

export class Eventing {
  //event type is an object. where each object key(key name will be dynamic)type be the string and value be the callback array
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    const handlers = this.events[eventName] || []; //If 1st is undefined then use []array
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach((callback) => {
      callback();
    });
  };
}
