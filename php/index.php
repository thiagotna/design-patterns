<?php

require_once __DIR__ . '/vendor/autoload.php';

use DesignPatterns\Singleton\UseCase\MongoDBConnector;

try {
  $db = MongoDBConnector::getInstance();
  $db->connect();

  echo "Sucesso! O Singleton e o MongoDB estão conversando.";
} catch (\Throwable $e) {
  echo "Ainda temos um problema: " . $e->getMessage();
}
