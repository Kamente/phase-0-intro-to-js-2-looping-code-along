// Code your solutions in this file


const names = ["Justin"];
const messages = writeCards(names);
function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
  
    return thankYouMessages;
  }
  

  console.log(messages);
  


  function countDown(number1){
    for (let i = number1; i>=0; i--){
        console.log(i);
    }
  }

  countDown(number1);


