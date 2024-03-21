//1. array-i iki qatı olan array yaradın
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

//2. array-in cüt ədədərdən ibarət arrayı yaradın
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//3. arrayın-dən yaşı 30-da yuxarı olanların adlarından ibarət array yaradın
const users = [
    { id: 1, name: 'Alice', age: 28 },
    { id: 2, name: 'Bob', age: 32 },
    { id: 3, name: 'Charlie', age: 25 },
    { id: 4, name: 'David', age: 40 },
  ];
  const namesOver30 = users.filter(user => user.age > 30).map(user => user.name);
  console.log(namesOver30); 

  //4. mergedSettings  iki obyektin dəyərlərini birəşdirin bir obyekt yaradın
  const defaultSettings = { theme: 'light', fontSize: 16 };
  const userSettings = { fontSize: 18, showSidebar: true };
  const mergedSettings = { ...defaultSettings, ...userSettings };
  console.log(mergedSettings);  

  //5. arrayınin cüt ədədlərinin iki qatını cəmini tap
  const numbers1 = [1, 2, 3, 4, 5, 6];
  const result = numbers1.reduce((acc, numbers) => {
    if (numbers % 2 === 0) {
      return acc + (numbers * 2);
    }
    return acc;
  }, 0);
  console.log(result);


  //6. dəyərləri ayri-ayri dəyişkən kimi yazın
  const person = {
    name: 'Alice',
    address: {
      city: 'New York',
      zip: '10001',
    },
 };
 const { name } = person;
 const { city } = person.address;
 const { zip } = person.address;
 
 console.log(name); // 'Alice'
 console.log(city); // 'New York'
 console.log(zip); // '10001'
 
    