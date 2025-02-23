var $ = jQuery;

$(window).on('load', function () {
    // fields dell'editor
    var editor = new $.fn.dataTable.Editor({
        ajax: "../EditorPHP/controllers/nutritional_value.php",
        table: "#table",
        fields: [
            {
                label: "Prodotto:",
                name: "name"
            },
            {
                label: "Kcal:",
                name: "kcal"
            },
            {
                label: "Fats:",
                name: "fats"
            }
        ]
    });

    // fields della tabella
    var table = $('#table').DataTable({
        lengthChange: false,
        ajax: {
            url: "../EditorPHP/controllers/nutritional_value.php",
            type: 'POST'
        },
        columns: [
            {
                data: "name"
            },
            {
                data: "kcal"
            },
            {
                data: "fats"
            }
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