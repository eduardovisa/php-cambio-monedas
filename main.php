<?php 
    $monedas = array(10, 5, 2, 1);
    $cantidades = array();
    $total = $_POST['cantidadIn'];
    $cantidad = 0;
    foreach ($monedas as &$moneda) {
        $cantidad = (int)($total/$moneda);
        $total = $total%$moneda;
        array_push($cantidades, $cantidad);
    }
    echo json_encode($cantidades);
?>