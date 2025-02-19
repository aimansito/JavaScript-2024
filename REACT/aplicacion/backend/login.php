<?php
// Habilitar CORS (ajusta según sea necesario)
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Leer los datos JSON recibidos
$data = json_decode(file_get_contents("php://input"));

// Verificar si se enviaron los campos requeridos
if (!isset($data->telefono) || !isset($data->password)) {
    echo json_encode(["success" => false, "message" => "Faltan datos"]);
    exit;
}

// Datos de usuario válidos (puedes conectarlo a una base de datos en el futuro)
$usuarios_validos = [
    ["telefono" => "aiman", "password" => "2023"],
    ["telefono" => "usuario", "password" => "1234"]
];

// Verificar credenciales
$autenticado = false;
foreach ($usuarios_validos as $usuario) {
    if ($usuario["telefono"] === $data->telefono && $usuario["password"] === $data->password) {
        $autenticado = true;
        break;
    }
}

// Responder con éxito o error
if ($autenticado) {
    echo json_encode(["success" => true, "message" => "Login exitoso"]);
} else {
    echo json_encode(["success" => false, "message" => "Usuario o contraseña incorrectos"]);
}
?>
