export default (numTicket) => {
  numTicket = numTicket.toString();
  if (numTicket.length % 2 !== 0) return console.log("Tiket must be even!");

  let firstHalfOFString = 0;
  let secondHalfOFString = 0;

  for (let i = 0; i < numTicket.length; i++) {
    if (i < numTicket.length / 2) {
      const ticketAsNumber = new Number(numTicket[i]);
      firstHalfOFString += ticketAsNumber;
    } else {
      const ticketAsNumber = new Number(numTicket[i]);
      secondHalfOFString += ticketAsNumber;
    }
  }
  return firstHalfOFString === secondHalfOFString ? true : false;
};

//LOGGING...
//
// console.log(isHappyTicket(1234567812345678));
// console.log(isHappyTicket("124153513"));
