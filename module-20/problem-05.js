/* You are in a hurry to go to your school on time . But when you are crossing the road , the traffic signal is red coloured . In this situation , if you try to cross the road , you may be in danger . If  you notice a yellow coloured traffic signal , you should stop . If you notice a green  coloured trafic sugnal , you should cross the road. So write a JS code , where there is a variable called signal . It's value can be green , yellow or red & we will get different acftivites as output depending on the variable. So hurry up. */
let tColor = "red";
switch (tColor) {
    case "red":
        console.log("Now dangeer");
        break;
    case "yellow":
        console.log("you should stop");
        break;
    case "green":
        console.log("Now you will go .");
        break;
    default:
        console.log("daraye thako")
}