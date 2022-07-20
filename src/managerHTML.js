function managerHTML(manager) {
    return `<div class="col-sm-4 my-3">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-title">${manager.getRole()}</h6>
            <ul class="list-group">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: ${manager.email}</li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
    </div>
</div>`
};

module.exports=managerHTML;