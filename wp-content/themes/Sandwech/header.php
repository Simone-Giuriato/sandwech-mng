<!--
Il file header.php contiene il codice per la parte superiore del sito, inclusi elementi come il logo, 
il menu di navigazione, la barra di ricerca e l'intestazione. Il codice presente in questo file viene 
incluso in ogni pagina del sito, quindi è possibile utilizzarlo per creare un'intestazione coerente per tutte le pagine.
-->


<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sandwech Management</title>
    <script type="text/javascript" src="<?php echo get_template_directory_uri(); ?>/js/default/jquery-3.6.0.min.js">
    </script>
    <link href="<?php echo get_template_directory_uri(); ?>/style.css" rel="stylesheet" type="text/css">
    <?php
    /*
    wp_head() è utilizzato all'interno del file header.php del tema per aggiungere script e stili in cima alla pagina HTML, 
    prima della chiusura del tag <head>. Questa funzione è importante perché permette ai plugin e ai temi di aggiungere i 
    propri script e stili alla pagina, senza dover modificare manualmente il file header.php.
    */
    wp_head();
    ?>
</head>

<body <?php body_class(); ?>>
    <header class="sticky-top">
        <nav class="navbar navbar-expand-lg navbar-color">
            <div class="container-fluid">
                <a class="navbar-brand mb-0 h1" href="http://localhost/sandwech-mng">Sandwech Management</a>
                <img class="logo-img" src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" width="40"
                    height="40" alt="">
            </div>
        </nav>
    </header>