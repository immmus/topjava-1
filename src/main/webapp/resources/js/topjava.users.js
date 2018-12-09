const userAjaxUrl = "ajax/admin/users/";

function updateUsers() {
    $.get(userAjaxUrl, updateTable)
}
function enableOrDisable(id, check){
    let enableOrDisable = check.is(':checked');
    $.ajax({
        url: userAjaxUrl + id,
        type: "POST",
        data: 'enableOrDisable=' + enableOrDisable,
    }).done(function () {
        successNoty(enableOrDisable ? 'Enabled' : 'Disabled')
    })
}
// $(document).ready(function () {
$(function () {
    makeEditable({
        ajaxUrl: userAjaxUrl,
        datatableApi: $("#datatable").DataTable({
            "paging": false,
            "info": true,
            "columns": [
                {
                    "data": "name"
                },
                {
                    "data": "email"
                },
                {
                    "data": "roles"
                },
                {
                    "data": "enabled"
                },
                {
                    "data": "registered"
                },
                {
                    "defaultContent": "Edit",
                    "orderable": false
                },
                {
                    "defaultContent": "Delete",
                    "orderable": false
                }
            ],
            "order": [
                [
                    0,
                    "asc"
                ]
            ]
        }),
        updateTable: updateUsers
    });
});