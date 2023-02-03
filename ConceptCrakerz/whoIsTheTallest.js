function tallestFriend (height) {
  //Write your code here
  //Don't forget to return
  let tallest = height[0];
  for (let i = 0; i < height.length; i++) {
    const index = i;
    const element = height[index];
    if (element > tallest) {
      tallest = element;
    }
  }
  return tallest;
}

const friendsHeight = [157, 134, 188];
const lombu = tallestFriend(friendsHeight);
console.log(lombu);
