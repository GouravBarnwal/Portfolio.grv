const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');
const MarkdownIt = require('markdown-it');

// Read the markdown resume
const markdownContent = fs.readFileSync('src/assets/Gourav_Barnwal_Resume_Updated.md', 'utf8');

// Convert markdown to HTML
const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true
});

const htmlContent = md.render(markdownContent);

// Create a complete HTML document with professional styling
const htmlDocument = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gourav Barnwal - Resume</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
            background: white;
            padding: 40px;
            max-width: 800px;
            margin: 0 auto;
        }
        
        h1 {
            color: #2563eb;
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            border-bottom: 3px solid #2563eb;
            padding-bottom: 10px;
        }
        
        h2 {
            color: #1e40af;
            font-size: 1.5rem;
            font-weight: 600;
            margin: 30px 0 15px 0;
            border-bottom: 2px solid #e5e7eb;
            padding-bottom: 5px;
        }
        
        h3 {
            color: #374151;
            font-size: 1.2rem;
            font-weight: 600;
            margin: 20px 0 10px 0;
        }
        
        h4 {
            color: #4b5563;
            font-size: 1.1rem;
            font-weight: 500;
            margin: 15px 0 8px 0;
        }
        
        p {
            margin-bottom: 12px;
            text-align: justify;
        }
        
        ul, ol {
            margin: 15px 0;
            padding-left: 25px;
        }
        
        li {
            margin-bottom: 8px;
        }
        
        strong {
            color: #1f2937;
            font-weight: 600;
        }
        
        a {
            color: #2563eb;
            text-decoration: none;
        }
        
        a:hover {
            text-decoration: underline;
        }
        
        .contact-info {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #2563eb;
        }
        
        .contact-info ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        
        .contact-info li {
            margin-bottom: 8px;
            display: flex;
            align-items: center;
        }
        
        .contact-info strong {
            min-width: 120px;
            display: inline-block;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 20px 0;
        }
        
        .skill-category {
            background: #f9fafb;
            padding: 15px;
            border-radius: 6px;
            border: 1px solid #e5e7eb;
        }
        
        .skill-category h4 {
            color: #2563eb;
            margin-bottom: 10px;
        }
        
        .project {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #10b981;
        }
        
        .project h3 {
            color: #059669;
            margin-bottom: 10px;
        }
        
        .timeline-item {
            background: #f9fafb;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            border-left: 4px solid #f59e0b;
        }
        
        .timeline-item h4 {
            color: #d97706;
            margin-bottom: 8px;
        }
        
        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-style: italic;
        }
        
        @media print {
            body {
                padding: 20px;
            }
            
            .page-break {
                page-break-before: always;
            }
        }
    </style>
</head>
<body>
    ${htmlContent}
</body>
</html>
`;

// Write the HTML file
fs.writeFileSync('resume.html', htmlDocument);

console.log('HTML file created successfully!');
console.log('To generate PDF, install dependencies and run the PDF generation script.'); 