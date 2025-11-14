const args1 = process.argv[2];
const args2 = process.argv[3];
if (!args1){
  console.log('No argument');
} else if (!args2){
  console.log(`One argument found${args1} ${args2}`);
} else {
  console.log('Arguments found');
}