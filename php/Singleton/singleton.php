<?php

use DesignPatterns\Singleton\DatabaseConnectorInterface;

interface SingletonInterface
{
  public function getInstance(): SingletonInterface;
  public function businessLogic();
}
