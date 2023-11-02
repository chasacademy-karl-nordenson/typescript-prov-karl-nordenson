// DIN UPPGIFT: Utför fråga 1-3 med kodexempel i Typescript / 3 poäng


// 1. Ge ett exempel på en funktion med en generiskt typ.

function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse()
    
}


// 2. Ge ett exempel på en funktion med två generiska typer.

function makePair<T, K>(key: T, value: K):  {key: T, value: K} {
    return {key, value}
}

// 3. Ge ett exempel på ett interface med en generisk typ.

interface Container<T> {
    item: T
}
