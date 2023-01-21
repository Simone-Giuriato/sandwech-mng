var $ = jQuery;

$(window).on('load', function () {
    // fields dell'editor
    var editor = new $.fn.dataTable.Editor({
        ajax: "../EditorPHP/controllers/product_tag.php",
        table: "#table",
        fields: [{
            label: "Prodotto:",
            name: "product_name"
        },
        {
            label: "NomeTag:",
            name: "tag_name"
        },
       
        ]
    });

    // fields della tabella
    var table = $('#table').DataTable({
        lengthChange: false,
        ajax: "../EditorPHP/controllers/product_tag.php",
        columns: [
            {
                data: "product_name"
            },
            {
                data: "tag_name"
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