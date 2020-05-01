function spanTitle() {
    let title = document.querySelector('.title');
    let text= title.innerHTML;
    let letters = text.split('');
    let spans = letters.map(
        letter => {
            let span = document.createElement('span');
            span.innerText = letter;
            return span;
        }
    );
    title.innerHTML = '';
    spans.forEach(span => {
        title.appendChild(span);
        
    });
};
spanTitle();