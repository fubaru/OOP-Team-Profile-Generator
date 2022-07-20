function engineerHTML(engineer) {
    return `<div class="col-sm-4 my-3">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-title">${engineer.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">Office Number: ${engineer.github}</li>
            </ul>
        </div>
    </div>
</div>`
}

module.exports = engineerHTML;