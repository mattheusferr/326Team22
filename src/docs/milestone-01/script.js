document.addEventListener('DOMContentLoaded', () => {
    const countWords = text => text.match(/\w+/g)?.length || 0;

    document.getElementById('wordCountBtn').addEventListener('click', () => {
        const mainText = document.querySelector('main').innerText;
        const wordCount = countWords(mainText);
        document.getElementById('wordCountResult').textContent = `Total word count: ${wordCount}`;
    });
});
