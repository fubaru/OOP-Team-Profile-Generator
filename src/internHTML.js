function internHTML (intern) {
    return `<div class="col-sm-4 my-3">
    <div class="card">
        <div class="card-body bg-primary">
            <h5 class="card-title text-white">${intern.name}</h5>
            <h6 class="card-title text-white">🍳${intern.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: ${intern.email}</li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>`
}

module.exports=internHTML