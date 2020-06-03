// Iteration 1: Names and Input
const hacker1 = "Vladimir";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Marie";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.  `
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker2.length} characters!  `
  );
}

// Iteration 3: Loops

console.log(`"` + hacker1.split("").join(" ").toUpperCase() + `"`);
console.log(`"` + hacker2.split("").reverse("").join("") + `"`);

var result = hacker2.localeCompare(hacker1);

console.log(result);

if (result < 0) {
  console.log("The driver's name goes first.");
} else if (result > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else if (result === 0) {
  console.log("What?! You both have the same name?");
}

// Bonus 1:

let loremIpsum =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquet scelerisque tempus. Morbi blandit id orci sed luctus. Donec eu sem non purus feugiat aliquam. Etiam vel dictum diam. Phasellus non suscipit lacus, vitae pulvinar quam. Duis fermentum eu lacus id sollicitudin. Cras eget turpis ullamcorper tellus sollicitudin pharetra. Nulla vitae sem venenatis, eleifend sapien ut, efficitur nulla. Nullam convallis justo sit amet velit luctus molestie ut et libero. Nam iaculis, dui nec feugiat dapibus, sapien diam lacinia neque, ut sollicitudin tellus sapien a mauris. Maecenas tempor feugiat ante, sed molestie ex porta id. Nulla ac odio vitae quam mollis finibus. Nulla auctor sagittis vehicula. Aliquam urna enim, tincidunt id tempor et, venenatis sit amet ipsum. Phasellus libero dolor, tincidunt ut nisl in, ornare facilisis lacus. Fusce viverra lorem eu ultricies pretium.Nunc tempor sit amet felis eget ultricies. Nullam dapibus magna eget mattis pretium. Nullam sed egestas sapien. Nam auctor ornare libero, in rhoncus nulla sodales vel. Nullam suscipit iaculis arcu vitae rutrum. Duis euismod fringilla mauris, at ultricies mi lobortis sit amet. Etiam augue diam, imperdiet quis metus et, viverra pulvinar justo. Nunc eget luctus felis, varius viverra neque.Donec eleifend laoreet convallis. Proin sit amet libero urna. Vestibulum placerat, risus vel ultrices semper, mi magna aliquam ligula, a varius ex eros rutrum mauris. Curabitur suscipit euismod nibh, vitae fringilla sem interdum sed. Sed vel faucibus massa. Sed pulvinar augue vitae ultricies hendrerit. Nulla in porttitor neque. Suspendisse scelerisque maximus purus eget vestibulum. Nullam eu risus quam. Morbi sodales eget ex non feugiat. Duis at libero magna. Aenean sit amet risus tellus. Donec sollicitudin sit amet metus eu sollicitudin. Sed sit amet scelerisque enim. Aenean semper consequat velit, et efficitur est volutpat quis.";

// console.log(loremIpsum)

const countWords = (string) => {
  console.log(string.trim().split(/\s+/).length);
};

var word_matches = loremIpsum.match(/et/gi).length;

countWords(loremIpsum);
console.log(word_matches);

// Bonus 2:

function palindrome(str) {
  var re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, "");
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(palindrome("radar"));
