function generateHTML(cards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <div class="h-100 text-center text-white p-3 bg-danger border">
            <h2>My Team</h2>
            
        </div>
    
        <div class="container">
            <div class="row d-flex justify-content-center">
            
                ${cards}
            
            </div>
        </div>
    </body>

    </html>
            `
}

module.exports = generateHTML;