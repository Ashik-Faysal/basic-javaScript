const names = ["akash", "sojib", "sobuj", "nahid", "sabbir", "rayhan", "habib", "nahid", "akash", "sabbir", "rayhan", "habib", "sojib", "habib"];
function removeDuplicate(names) {
    const unique = [];
    for (i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);