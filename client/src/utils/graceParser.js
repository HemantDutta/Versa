export const graceParser = (file) => {
    let markFile = file || "";

    //remove later
    markFile = `
# Heading 1

## Heading 2

This is a paragraph with **bold** and *italic* text.

- Unordered list item 1
- Unordered list item 2

\`Highlighted text\`

| Column 1 | Column 2 |
| -------- | -------- |
| Value 1  | Value 2  |

[Visit Google](https://www.google.com)
`;

    const headerRegex = /^(#{1,6})\s+(.*)$/gm;
    const boldRegex = /\*\*(.*?)\*\*/g;
    const italicRegex = /\*(.*?)\*/g;
    const unorderedListRegex = /(?:^|\n)(?:\*|-|\+)\s+(.*)/g;
    const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
    const imageRegex = /!\[([^\]]+)\]\(([^)]+)\s"([^")]+)"\)/g;
    const highlightRegex = /`([^`]+)`/g;

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
            .replace(highlightRegex, '<code>$1</code>')
    }

    const paragraphs = markFile.split(/\n\s*\n/);

    return paragraphs.map(paragraph => {

        if (paragraph.trim().startsWith('|')) {
            return convertMarkdownTableToHtml(paragraph);
        }

        if (paragraph.match(unorderedListRegex)) {
            return `<ul>${convertToHTML(paragraph)}</ul>`;
        }

        return `<p>${convertToHTML(paragraph)}</p>`;
    }).join('');
}