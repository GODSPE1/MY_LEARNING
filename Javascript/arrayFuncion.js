const str = 'Hello world';
console.log(str);

const socials = ['Twitter', 'LinkedIn', 'X', 'Facebook', 'Youtube'];

socials.forEach(function list(items) {
    console.log(items)
});

socials.forEach((elements) => console.log(elements));

for (let i = 0; i < socials.length; i++) {
    console.log(socials[i]);
};

// for item in socials
function logSoicals(social) {
    console.log(social)
}


socials.forEach(logSoicals);


const siteObj = [
    { name: 'Twitter', url: 'https://twitter.com'},
    { name: 'Facebook', url: 'https://facebook.com'},
    { name: 'LinkedIn', url: 'https://linkedin.com'},
    { name: 'Instagram', url: 'https://instagram.com'}
]


siteObj.forEach((i) => console.log(i));
