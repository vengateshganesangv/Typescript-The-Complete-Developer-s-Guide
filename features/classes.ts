class Vehichle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("honk");
  }
}

const v = new Vehichle("red");
console.log(v.color);

class Car extends Vehichle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log("voom");
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const c = new Car(4, "orange");
c.startDriving();
console.log(c.color);
