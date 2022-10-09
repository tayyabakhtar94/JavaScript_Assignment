// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.


var invite_guest = ["Yasir","Abdullah","Hamza"];
// Invitation for friends
console.log(invite_guest[0]+", You're invited to Dinner.");
console.log(invite_guest[1]+", You're invited to Dinner.");
console.log(invite_guest[2]+", You're invited to Dinner.\n");

// alternating friends list
console.log("Unfortunetaly "+invite_guest[2]+" has got some work to do so he cant make it to dinner.");
var replacement = invite_guest[2];
invite_guest[2] = "Ather";
console.log("So "+invite_guest[2]+" is invited as a replacement of "+replacement+" but "+invite_guest[0]+" and "+invite_guest[1]+" will come for sure.");
