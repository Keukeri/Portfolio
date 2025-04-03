<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$dbname = "tp1"; 

// Créer une connexion à la base de données
$mysqli = new mysqli($servername, $username, $password, $dbname);

// Vérifier la connexion
if ($mysqli->connect_error) {
    die("Échec de la connexion: " . $mysqli->connect_error);
}

// Vérifier si le formulaire a été soumis avec les données
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $prenom = $_POST['firstname'];
    $nom = $_POST['lastname'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Préparer la requête d'insertion pour éviter les injections SQL
    $stmt = $mysqli->prepare("INSERT INTO formulaire (firstname, lastname, email, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $prenom, $nom, $email, $message);

    // Exécuter la requête
    if ($stmt->execute()) {
        echo "Merci, votre message a été envoyé avec succès.";
    } else {
        echo "Erreur: " . $stmt->error;
    }

    // Fermer la connexion
    $stmt->close();
    $mysqli->close();
}
?>
