<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


class MailSender{

    static $our_mail = "producttrackerccm@gmail.com";

    public static function send($receiver, $subject, $body, $altbody) {

        $mail = new PHPMailer(true);


        try {

            //Recipients
            $mail->setFrom(self::$our_mail, 'Mail Notifier');
            $mail->addAddress($receiver);     //Add a recipient
            $mail->addReplyTo('noreply@producttracker.com', 'Information');
        
            // //Attachments
            // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
            // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name
            
            //Server settings
            $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
            $mail->isSMTP();                                            //Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
            $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
            $mail->Username   = 'producttrackerccm@gmail.com';                     //SMTP username
            $mail->Password   = '6RsXhHV5L0Kh';                               //SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
            $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

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