const initialState = {
  manicure: [
    { name: 'Classic Mani', price: 1800, id: 1 },
    { name: 'Special Mani', price: 4500, id: 2 },
    { name: 'Gel Mani', price: 3500, id: 3 },
  ],
  pedicure: [
    { name: 'Classic Pedi', price: 3000, id: 4 },
    { name: 'Special Pedi', price: 6000, id: 5 },
    { name: 'Gel Pedi', price: 7000, id: 6 },
  ],
  waxingLady: [
    { name: 'Eyebrow', price: 1800, id: 7 },
    { name: 'Lips', price: 1000, id: 8 },
    { name: 'Chin/sides', price: 2000, id: 9 },
    { name: 'Full face', price: 4500, id: 10 },
    { name: 'Full arm', price: 4500, id: 11 },
    { name: 'Underarm', price: 1500, id: 12 },
    { name: 'Full back', price: 4000, id: 13 },
    { name: 'Stomach', price: 2000, id: 14 },
  ],
  waxingMen: [
    { name: 'Chest', price: 4500, id: 15 },
    { name: 'Back', price: 5000, id: 16 },
    { name: 'Shoulders', price: 2500, id: 17 },
    { name: 'Neck', price: 2000, id: 18 },
    { name: 'Ears', price: 2000, id: 19 },
    { name: 'Nose', price: 2500, id: 20 },
  ],
};

export default function (state = initialState, { type }) {
  switch (type) {
    default:
      return state;
  }
}
