const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

const buahAndi = fruits.map((buah) => {
  return `${buah.fruitName}`;
});

// console.log(buahAndi);

/*
  1. Jenis buah yang dimiliki Andi berdasarkan fruitName
      output :
      [ 'Apel', 'Kurma', 'apel', 'Manggis', 'Jeruk Bali', 'KURMA', 'Salak' ]
*/

const importTypes = fruits.filter((books) => books.fruitType === "IMPORT");
console.log(
  "TYPE IMPORT:",
  importTypes.map((item) => item.fruitName),
  "JUMLAH:",
  importTypes.reduce((sum, current) => sum + current.stock, 0)
);
const localTypes = fruits.filter((books) => books.fruitType === "LOCAL");
console.log(
  "TYPE LOCAL:",
  localTypes.map((item) => item.fruitName),
  "JUMLAH:",
  localTypes.reduce((sum, current) => sum + current.stock, 0)
);
