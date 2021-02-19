<?
        $to = 'd.bortnik2013@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Башспецстрой'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><b>Телефон:</b> '.$_POST['phone'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: webmaster@example.com \r\n" . "X-Mailer: PHP/" . phpversion(); //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>