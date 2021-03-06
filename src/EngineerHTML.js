function engineerHTML(engineer) {
    return `<div class="col-sm-4 my-3">
    <div class="card">
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${engineer.name}</h5>
            <h6 class="card-title text-white">👓${engineer.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: ${engineer.email}</li>
                <li class="list-group-item">GitHub Link: ${engineer.github}</li>
            </ul>
        </div>
    </div>
</div>`
}

module.exports = engineerHTML;