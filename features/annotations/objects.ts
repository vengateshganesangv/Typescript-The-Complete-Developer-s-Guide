const profile = {
  name: "alex",
  age: 20,
  cords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const {
  cords: { lat, lng },
}: {
  cords: {
    lat: number;
    lng: number;
  };
} = profile;
