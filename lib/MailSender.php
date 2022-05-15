<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class MailSender{

    static $our_mail = "khechinibakr20@gmail.com";

    public static function send($receiver) {

        $mail = new PHPMailer(true);


        try {

            //Recipients
            $mail->setFrom(self::$our_mail, 'Mail Notifier');
            $mail->addAddress($receiver);     //Add a recipient
            $mail->addReplyTo('noreply@oudomain.com', 'Information');
        
            // //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = 'Price Notifier';
            $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
        
            $mail->send();
            echo 'Message a été envoyé';
        } catch (Exception $e) {
            echo "Le message n'a pas pu être envoyé. Erreur de l'expéditeur: {$mail->ErrorInfo}";
        }

    } 
}