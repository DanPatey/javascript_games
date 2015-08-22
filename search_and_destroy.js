var text = 'This is Dan a sample Dan string Dan test one two'
var myName = 'Dan'
var hits = []

for (i = 0; i < text.length; i++) {
    if (text[i] === 'D') {
            for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
    }
}
if (hits.length === 0) {
    console.log('Sorry your array was not found')
}
else {
    console.log(hits)
}

