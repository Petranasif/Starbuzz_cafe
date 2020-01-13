var game = {
    words: ['apple', 'orange', 'banana'], /* dictionarul de cuvinte pe care le stie calculatorul*/
    word: undefined, /* cuvintul ales de calculator pentru ghicit*/
    letters: [], /*literele incercate, il definesc cu un array gol*/
    triesLeft: 6,
    start: function () {
        this.word = this.randomWord();
    },
    randomWord: function () {
        let index = Math.floor(Math.random() * this.words.length)
        return this.words[index];
    },
    tryLetter: function(letter) {
        this.letters.push(letter);
        if(!this.word.split('').includes(letter)) {
            this.triesLeft--;

        }
    },
    isDead: function () {
        return this.triesLeft == 0
    },
    isWinner: function () {

    }

}