🎯 Uppgift: Bearbeta användardata
Denna uppgift syftar till att sammanfatta och tillämpa kunskaperna från veckans genomgångar: variabler, datatyper, arrayer, objekt, loopar, villkorssatser och typkonvertering.

Du har en fördefinierad lista med användare. Din uppgift är att bearbeta denna lista enligt instruktionerna nedan.

📝 Indata:
En array av objekt som representerar användare:

const users: { id: number, name: string, age: string, isActive: boolean }[] = [
    {"id": 1, "name": "Alice", "age": "28", "isActive": true},
    {"id": 2, "name": "Bob", "age": "35", "isActive": false},
    {"id": 3, "name": "Charlie", "age": "22", "isActive": true}
];
🚀 Uppgifter:
Loopa igenom användarna:

Använd en for...of-loop för att gå igenom varje user-objekt i users-arrayen.
Konvertera ålder:

Inuti loopen, konvertera varje användares age från en sträng (string) till ett nummer (number, heltal). Du kan använda funktionen parseInt().
Villkorsstyrd Namnändring:

Använd en if-sats: Om användaren är isActive (alltså isActive är true), ändra då deras name till att vara i versaler (stora bokstäver). Du kan använda strängmetoden .toUpperCase().
Bygg en ny, bearbetad array:

Skapa en tom array i början av din kod för att lagra de bearbetade användarobjekten.
Inuti loopen, skapa ett nytt objekt med den modifierade åldern (som ett nummer) och det eventuellt modifierade namnet.
Lägg till detta nya, bearbetade objekt till din nya array (använd array-metoden push()).
Skriv ut resultatet:

Efter loopen, skriv ut den nya arrayen med de bearbetade användarobjekten till konsolen.
Skriv även ut varje bearbetad användares information på en separat rad i ett läsbart format (t.ex. "Användare ID: X, Namn: Y, Ålder: Z, Aktiv: A").
💡 Exempel på förväntad utdata för Alice (efter bearbetning):
Användare ID: 1, Namn: ALICE, Ålder: 28, Aktiv: true