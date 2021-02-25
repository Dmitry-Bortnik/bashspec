<?
        $to = 'd.bortnik2013@yandex.ru'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Башспецстрой'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>

                        <p><b>Выберите направление:</b> '.$_POST['step-1'].'</p> 

                        <p><b>Объем заказа:</b> '.$_POST['step-2'].'</p> 

                        <p><b>Срок пошива:</b> '.$_POST['step-3'].'</p> 

                        <p><b>Адрес доставки:</b> '.$_POST['adres'].'</p> 
                        <p><b>Имя:</b> '.$_POST['name'].'</p> 
                        <p><b>Телефон:</b> '.$_POST['phone'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: webmaster@example.com \r\n" . "X-Mailer: PHP/" . phpversion(); //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
?>