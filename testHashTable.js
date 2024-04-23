import HashTable from './HashTable.js';

const table = new HashTable(500);
table.set('name', 'John Doe');
table.set('age', 34);
console.log(table.entries());
console.log(table.keys());
console.log(table.values());