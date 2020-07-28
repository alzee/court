<?php
/**
 * vim:ft=php et ts=4 sts=4
 * @author z14 <z@arcz.ee>
 * @version
 * @todo
 */

$autoloader = require_once 'autoload.php';


$loader = new \Twig\Loader\FilesystemLoader('./templates');
$twig = new \Twig\Environment($loader, [
    'cache' => 'cache',
    'debug' => true,
]);

$template = $twig->load('index.html.twig');

echo $template->render();
