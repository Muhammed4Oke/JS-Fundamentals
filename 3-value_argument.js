const args1 = process.argv[2];
const args2 = process.argv[3];
if (!args1){
  console.log('No argument');
} else if (!args2){
  console.log(`${args1}`);
} else {
  console.log(`2 arguments: ${args1} ${args2}`)
}