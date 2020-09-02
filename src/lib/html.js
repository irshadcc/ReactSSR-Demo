

function html( body,data ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
            <link rel="stylesheet" href="/static/app.css">
            <script> 
                window.__INITIAL_DATA__ = JSON.parse( '${
                    JSON.stringify(data)
                } ')
            
            
            
            </script>
        </head>
        
        <body>
            <div id="app">${ body }</div>
            <script src="/static/vendor.bundle.js"></script>
            <script src="/static/app.bundle.js"></script>
        </body>
        </html>
    `;
}




module.exports = html ;