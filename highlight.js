document.addEventListener('mousedown', async () => {
    if (getSelection()) {
        console.log("first condition");
        // Only activate extension if not on a google doc page
        if (getSelection().anchorNode.id !== 'docs-title-widget') {
            
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