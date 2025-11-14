const args1 = process.agrv[2];
const args2 = process.agrv[3];
if (!args1){
  console.log('No argument');
} else if (!args2){
  console.log(`One argument found${args1}`);
} else {
  console.log('Arguments found');
}