// UPPGIFT: Skapa en egen sammansatt typ som beskriver stockMeasurements. Byt ut any mot passande typer / 2 poäng
// Kompilera TS-koden och se att den fortfarande fungerar som den ska.

type stockMeasurementsType = 
  
    {
      day: string,
      price: number
    }[]
  



const getRisingStockDays = (stockMeasurements: stockMeasurementsType)  =>
  stockMeasurements.filter((data) => data.price > 100);

const stockMeasurements: stockMeasurementsType = [
  {
    day: "Monday",
    price: 105,
  },
  {
    day: "Tuesday",
    price: 98,
  },
  {
    day: "Wednesday",
    price: 110,
  },
];

const profitableDays: stockMeasurementsType = getRisingStockDays(stockMeasurements);
console.log(profitableDays);
