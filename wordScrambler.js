let scrambleText = () =>{
    let text = document.getElementById( 'textIn' ).value;
    console.log( 'text:', text );
    let words = text.split( ' ' );
    console.log( 'words:', words );
    let scrambledText = '';
    for( word of words ){
        if( word.length > 2 ){
            let first = word.slice( 0, 1 );
            console.log( 'first:', first );
            let last = word.slice(-1);
            console.log( 'last:', last );
            let middle = word.slice( 1, -1)
            console.log( 'middle:', middle );
            word = first + middle.shuffle() + last;
        } //end length check
        scrambledText += word + ' ';
    } //end all words
    console.log( 'scrambledText:', scrambledText );
    let el = document.getElementById( 'textOut' );
    el.innerHTML = scrambledText;
} // end scrambleText

// from https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
String.prototype.shuffle = function () {
    var a = this.split(""),
        n = a.length;

    for(var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }
    return a.join("");
}