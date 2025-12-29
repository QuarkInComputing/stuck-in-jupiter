const quotes = [
    "Fact, CS;GO started as a mod for half life",
    "Up, Down, Top, Bottom, Charm... thats strange I cant remember",
    "Help! Im stuck in this website!",
    "Fuck AI, revert to genuine stupidity.",
    "Insantity is doing the same thing over and over and over and over and over...",
    "The end is never the end is never the end is never the end is never the end is",
    "You cant beat gravity.",
    "Coming up with a MOTD is hard :("
];
const motd = document.getElementById("motd");
var quote = quotes[Math.floor(Math.random()*quotes.length)];

motd.innerHTML = "MOTD: \""+quote+"\"";