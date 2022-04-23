@Clients
Feature: Get Clients

  Background:
    * url baseUrl
    * def clientsPath = '/clients'

  Scenario: Get Clients

    Given path clientsPath
    When method GET
    Then status 200