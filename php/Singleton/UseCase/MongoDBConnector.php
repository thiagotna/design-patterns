<?php

namespace DesignPatterns\Singleton\UseCase;

use MongoDB\Driver\Manager;
use MongoDB\Driver\Exception\Exception as MongoException;
use Exception;

class MongoDBConnector
{
  private static ?self $instance = null;
  private ?Manager $connection = null;

  private function __construct() {}

  private function __clone() {}
  public function __wakeup()
  {
    throw new Exception("Cannot unserialize singleton");
  }

  public static function getInstance(): self
  {
    if (self::$instance === null) {
      self::$instance = new self();
    }
    return self::$instance;
  }

  public function connect(): void
  {
    if ($this->connection !== null) {
      echo "ℹ️  Reutilizando conexão existente.\n";
      return;
    }

    try {
      // No Docker, usamos o nome do serviço ou host local
      $uri = "mongodb://root:example@mongodb:27018";
      $this->connection = new Manager($uri);

      echo "✅ Conexão com MongoDB estabelecida com sucesso.\n";
    } catch (MongoException $e) {
      echo "❌ Falha ao conectar ao MongoDB: " . $e->getMessage() . "\n";
    }
  }

  public function getConnection(): ?Manager
  {
    if ($this->connection === null) {
      $this->connect();
    }
    return $this->connection;
  }

  public function disconnect(): void
  {
    if ($this->connection !== null) {
      $this->connection = null;
      echo "🔌 Conexão com MongoDB encerrada.\n";
    }
  }
}
