var $ = jQuery;

$(window).on('load', function () {
    // fields dell'editor
    var editor = new $.fn.dataTable.Editor({
        ajax: "../EditorPHP/controllers/cart.php",
        table: "#table",
        fields: [
            {
                label: "Quantità:",
                name: "quantity"
            },
        ]
    });

    // fields della tabella
    var table = $('#table').DataTable({
        lengthChange: false,
        ajax: "../EditorPHP/controllers/cart.php",
        columns: [
            {
                data: "user_name"
            },
            {
                data: "user_surname"
            },
            {
                data: "product_name"
            },
            {
                data: "quantity"
            },
        ],
        select: true,
    });

    // Display the buttons
    new $.fn.dataTable.Buttons(table, [
        { extend: "create", editor: editor },
        { extend: "edit", editor: editor },
        { extend: "remove", editor: editor }
    ]);

    table.buttons().container()
        .appendTo($('.col-md-6:eq(0)', table.table().container()));
});