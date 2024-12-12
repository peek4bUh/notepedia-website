const fs = require('fs');
const path = require('path');

// Function to convert Wiki-style links to Markdown-style links
async function convertWikiLinksToMarkdown(filePath, destinationPath) {
    console.log(`Converting Wiki links in file: ${filePath}`);
    const content = fs.readFileSync(filePath, 'utf-8');

    // Convert [[Wiki-style links]] to Markdown and validate existence
    const convertedContent = content.replace(/\[\[(.*?)\]\]/g, (_, linkText) => {
        let [displayText, linkFile] = linkText.split('|').map(str => str.trim());

        // Default display text is the entire link if no '|' is found
        if (!linkFile) {
            linkFile = displayText;
            displayText = linkFile;
        }

        const sanitizedLink = linkFile.replace(/\s+/g, '-').replace(/[^\w\-]/g, '').toLowerCase();
        const linkFilePath = path.join(destinationPath, `${sanitizedLink}.md`);

        if (fs.existsSync(linkFilePath)) {
            // If second word exists, use that as plain text; otherwise, fallback to displayText
            const plainText = linkText.includes('|') ? linkFile : displayText;
            return `[${plainText}](${sanitizedLink}.md)`;
        } else {
            console.warn(`Warning: Linked file not found for "${linkText}". Converting to plain text.`);
            return linkText.includes('|') ? linkFile : displayText;
        }
    });

    console.log(`Converted content length: ${convertedContent.length} characters`);
    return convertedContent;
}

// Function to copy a file with the correct structure
function copyFileWithStructure(sourceFile, targetDir) {
    const targetPath = path.join(targetDir, path.basename(sourceFile));
    console.log(`Copying to: ${targetPath}`);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.copyFileSync(sourceFile, targetPath);
    return targetPath;
}

// Function to process a folder of Markdown files
async function processFolder(sourceDir, targetDir) {
    const files = fs.readdirSync(sourceDir);

    for (const file of files) {
        const fullPath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, file);

        if (fs.statSync(fullPath).isDirectory()) {
            console.log(`Processing subdirectory: ${fullPath}`);
            await processFolder(fullPath, targetPath);
        } else if (fullPath.endsWith('.md')) {
            console.log(`Processing file: ${fullPath}`);
            const convertedText = await convertWikiLinksToMarkdown(fullPath, targetDir);
            const targetPathResolved = copyFileWithStructure(fullPath, targetDir);
            console.log(`Writing converted file to: ${targetPathResolved}`);
            fs.writeFileSync(targetPathResolved, convertedText, 'utf-8');
        } else {
            console.log(`Skipping non-Markdown file: ${fullPath}`);
        }
    }
}

// Main script execution
(async () => {
    const args = process.argv.slice(2);
    const sourcePath = args[0];
    const destinationPath = args[1];

    console.log('Source Path:', sourcePath);
    console.log('Destination Path:', destinationPath);

    if (!sourcePath || !destinationPath) {
        console.error('Usage: node linkConverter.js <sourcePath> <destinationPath>');
        process.exit(1);
    }

    if (fs.statSync(sourcePath).isDirectory()) {
        console.log(`Processing directory: ${sourcePath}`);
        await processFolder(sourcePath, destinationPath);
    } else if (sourcePath.endsWith('.md')) {
        console.log(`Processing single file: ${sourcePath}`);
        const convertedText = await convertWikiLinksToMarkdown(sourcePath, destinationPath);
        const targetPathResolved = copyFileWithStructure(sourcePath, destinationPath);
        console.log(`Writing converted file to: ${targetPathResolved}`);
        fs.writeFileSync(targetPathResolved, convertedText, 'utf-8');
    } else {
        console.error('Error: Source must be a Markdown file or a directory containing Markdown files.');
        process.exit(1);
    }
})();
