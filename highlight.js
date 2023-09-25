document.addEventListener('mousedown', async () => {
    if (getSelection()) {
        console.log("first condition");
        if (getSelection().anchorNode.id !== 'docs-title-widget') {
            console.log("second condition");
            
            const range = document.getSelection().getRangeAt(0),
            span = document.createElement('span');
    
            span.className = 'highlight';
            span.appendChild(range.extractContents());
            range.insertNode(span);
        } else {
            return;
        }
    } else {
        return;
    }
});