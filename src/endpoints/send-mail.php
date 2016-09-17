<?php
    require_once('vendor/autoload.php');
    $Email = new PHPMailer; 
    $Email -> isSMTP();
    $Email -> SMTPAuth = true;
    //$Email -> SMTPDebug = 2;
    $Email -> Host = 'tls://host.elearningserv.com';
    $Email -> Username = 'godwin.k@elearningserv.com';
    $Email -> Password = 'i6sLuM#r#3k}';
    $Email -> SMTPSecure = 'STARTTLS';
    $Email -> Port = '587';

    $Email -> From = "godwin.k@elearningserv.com";
    $Email -> FromName = "Godwin Vinny Carole";
    $Email -> addReplyTo('godwin.k@elearningserv.com','Reply Address');
    $Email -> addAddress ('godwin.k@elearningserv.com','Godwin Vinny Carole');
    //$Email -> addCC('godwin.k@elearningserv.com','Godwin Vinny Carole');
    //$Email -> addBCC('godwin.k@elearningserv.com','Godwin Vinny Carole');

    $Email -> Subject = "Learning PHPMailer";
    $Email -> Body = "Lorem episum";
    $Email -> AltBody = "Lorem episum";
    //echo !extension_loaded('openssl')?"Not Available <br/>":"Available <br/>";
    var_dump($Email->send());
?>