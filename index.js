const writeCards = (nameList, eventName) => {
    let messages = [];
  
    for (let i=0; i < nameList.length; i++) {
      console.log(nameList[i]);
      messages.push(`Thank you, ${nameList[i]}, for the wonderful ${eventName} gift!`);
    }
  
    return messages;
  }

writeCards(['Lisa', 'Kaitlin', 'Jan'], 'surprise');


function countDown() {
    let countDown = 10;
    while ( countDown >= 0 ) {
        console.log(countDown--);
    }
    return countDown;
}

countDown(10);