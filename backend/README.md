# StocksBackend

## Descriptions

Backend for Stocks information.

## Getting started

#### Prerequisites

* [Java JDK 8](http://www.oracle.com/technetwork/java/javase/overview/index.html)

#### Installation / Development

Install prerequisites and then run the app by executing the following command from within the backend directory:

  $ `gradle bootRun`

#### Verify pacts

First build a jar and start it:

  $ `gradle assemble`
  $ `java -jar build/libs/backend-0.0.1-SNAPSHOT.jar`

Then in another terminal run:

  $ `gradle pactVerify`
