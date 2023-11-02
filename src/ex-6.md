###  DIN UPPGIFT: Besvara följande fråga i denna md-fil / 3 poäng

I Typescript kan både type och interfaces användas för att skapa egna sammansatta typer. I många fall kan man använda antingen type eller interfaces, men det finns också skillnader. Redogör för dem och visa med kodexempel. 


Både types och interfaces används för att beskriva datatyper i TypeScript. Skillnaden är att types ofta används för att skapa nya typer medan interfaces ofta används för att beskriva befintliga datatyper, om man till exempel vill validera eller checka inkommande data. Interfaces kan också användas för att utöka andra interfaces.


Exempel på type med union: 

type Role = "Employee" | "Manager" | "CEO"


Exempel på ett interface för att checka inkommande data: 

  interface LukeSkywalker {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
  }



För att utöka andra interfaces kan man t.ex skriva: 

  interface Base {
    id: string
  }
  
  interface User extends Base{
    firstName: string;
    lastName: string;
  }
  
  interface Post extends Base{
    title: string;
    body: string;
  }
  
  interface Comment extends Base{
    comment: string;
  }

  Alla interface får med sig propertyn id från Base, så att man inte behöver skriva den varje gång.