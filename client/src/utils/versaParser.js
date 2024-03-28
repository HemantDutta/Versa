export const versaParser = (file) => {

    let markFile = file || ``;

    const styles = {

    };

    //Regex variables
    const headerRegex = /^(#{1,6})\s+(.*)$/gm;
    const boldRegex = /\*\*(.*?)\*\*/g;
    const italicRegex = /\*(.*?)\*/g;
    const unorderedListRegex = /(?:^|\n)(?:\*|-|\+)\s+(.*)/g;
    const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
    const imageRegex = /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g;
    const highlightRegex = /`([^`]+)`/g;
    const multiHighlightRegex = /```([\s\S]*?)```/g;
    const blockquoteRegex = /^>(.*)$/gm;
    const strikeThroughRegex = /~~(.*?)~~/g;

    function convertMarkdownTableToHtml(tableMarkdown) {
        const rows = tableMarkdown.trim().split('\n');
        const tableHtml = rows.map(row => {
            const cells = row.split('|').map(cell => cell.trim()).filter(cell => cell !== '');
            return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`;
        }).join('');
        return `<table>${tableHtml}</table>`;
    }

    const convertToHTML = (conFile) => {
        return conFile
            .replace(headerRegex, (match, level, content) => `<h${level.length}>${content}</h${level.length}>`)
            .replace(boldRegex, '<strong>$1</strong>')
            .replace(italicRegex, '<em>$1</em>')
            .replace(unorderedListRegex, (match, item) => `<li>${item}</li>`)
            .replace(linkRegex, '<a href="$2">$1</a>')
            .replace(imageRegex, '<img src="$2" alt="$1" title="$3" />')
            .replace(highlightRegex, '<pre><code>$1</code></pre>')
            .replace(multiHighlightRegex, '<pre><code>$1</code></pre>')
            .replace(strikeThroughRegex, '<del>$1</del>')
            .replace(blockquoteRegex, (match, content) => `<blockquote>${content.trim()}</blockquote>`);
    }

    const paragraphs = markFile.split(/\n\s*\n/);

    let html = paragraphs.map(paragraph => {

        if (paragraph.trim().startsWith('|')) {
            return convertMarkdownTableToHtml(paragraph);
        }

        if (paragraph.match(unorderedListRegex)) {
            return `<ul>${convertToHTML(paragraph)}</ul>`;
        }

        return `<p>${convertToHTML(paragraph)}</p>`;
    }).join('');

    return html = `<section id="styledHtml" style="padding: 1.25rem">` + `<style>` + `</style>` + html + `</section>`;
}