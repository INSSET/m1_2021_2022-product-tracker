<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class MailSender{

    static $our_mail = "khechinibakr20@gmail.com";

    public static function send($receiver, $subject, $body, $altbody) {

        $mail = new PHPMailer(true);


        try {

            //Recipients
            $mail->setFrom(self::$our_mail, 'Mail Notifier');
            $mail->addAddress($receiver);     //Add a recipient
            $mail->addReplyTo('noreply@product_tracker.com', 'Information');
        
            // //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
        
            //Content
            $mail->isHTML(true);                                  //Set email format to HTML
            $mail->Subject = $subject;
            $mail->Body    = $body;
            $mail->AltBody = $altbody;
        
            $mail->send();
            echo 'Message a été envoyé';
        } catch (Exception $e) {
            echo "Le message n'a pas pu être envoyé. Erreur de l'expéditeur: {$mail->ErrorInfo}";
        }

    } 
}