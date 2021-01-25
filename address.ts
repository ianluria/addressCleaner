let message: string;
message = `Ian Luria
2610 Brinker Ave.
Ogden, UT 84091`;

const messageArray = message.split('\n');

for (let line in messageArray) {
    const wordsFromLine = messageArray[line].split(" ");
    for (let word in wordsFromLine) {
        //check if the first character of the word is a letter
        //make uppercase if not already uppercase
        console.log(word, wordsFromLine[word]);
    }
}

//first line is name
//second line is name if doesn't begin with integer else begin address
//third line is name if second line is name and it doesn't begin with integer else address
//last line is city, state, zip if not containing 'United States' or 'USA' 

