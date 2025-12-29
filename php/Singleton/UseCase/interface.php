<?php

/**
 * Interface to abstract database connection using PDO.
 *
 * Defines the responsibility of obtaining the connection instance and managing
 * its lifecycle (connect/disconnect). Implementations must ensure a single
 * connection instance is exposed as required by the application.
 *
 * @see PDO
 *
 * @method void connect()        Establishes the database connection.
 * @method void disconnect()     Closes the database connection, releasing
 *                              associated resources.
 */

namespace DesignPatterns\Singleton\UseCase\DatabaseConnectorInterface;

use PDO;


interface DatabaseConnectorInterface
{
  public function connect(): void;
  public function disconnect(): void;
}
