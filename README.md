Hola! Este repositorio es mi trabajo integrador final del curso QA AUTOMATION CON CYPRESS que se dicto en la universidad Blas Pascal.

A continuacion les dejo los pasos para poder descargar y ejecutar los casos de prueba y los requieistos que se necesitan.

Requerimientos del sistema:

Cypress soporta ls siguientes sistemas operativos:

* macOS >=11 (Intel or Apple Silicon 64-bit (x64 or arm64))
* Linux (x64 or arm64) see also Linux Prerequisites down below
     *Ubuntu >=22.04
     *Debian >=11
     *Fedora >=41
* Windows 10 & 11 (x64)
* Windows 11 24H2 (arm64, runs in x64 emulation mode, minimum Cypress 14.5.0 required) - preview status
* Windows Server 2019, 2022 and 2025 (x64)

Instalar Node.js (siempre estar actualizado a la ultima version)

Node.js 20.x, 22.x, >=24.x

Descargar el instalador segun el sistema opertativo desde la pagina oficial de Node.js

Luego:

1 - Clonar el repositorio

2- Instalar cypres con el comando npm install cypress --save-dev

3- Instalar las dependencias necesarias para ejecutar Cucumber y los reportes

    * npm install @badeball/cypress-cucumber-preprocessor --save-dev
    * npm install @cypress/browserify-preprocessor --save-dev
    * npm install @badeball/cypress-cucumber-preprocessor@latest cucumber-html-formatter@latest --save-dev
    * npm install rimraf --save-dev
    * npm install cross-env mkdirp --save-dev
    * npm install cucumber-html-formatter --save-dev
    * npm install --save-dev @badeball/cypress-cucumber-preprocessor @bahmutov/cypress-esbuild-preprocessor esbuild
    * npm install @faker-js/faker --save-dev
	
4- ejecutar Script

Script de ejecucuion:

Para ejecutar los casos de prueba se deben correr los script:

* Script e2e con interfaz grafica tanto para DEV o TST en todos los navegadores

	cypress:open:dev:chrome : cypress open --e2e --browser chrome -e ENV=DEV",

	cypress:open:dev:edge : cypress open --e2e --browser edge -e ENV=DEV",

	cypress:open:dev:electron : cypress open --e2e --browser electron -e ENV=DEV",

	cypress:open:tst:chrome : cypress open --e2e --browser chrome -e ENV=TST",

	cypress:open:tst:edge : cypress open --e2e --browser edge -e ENV=TST",

	cypress:open:tst:electron : cypress open --e2e --browser electron -e ENV=TST"



 * Script e2e con reporte tanto para DEV o TST en todos los navegadores
  

	cypress:report:e2e:dev:chrome : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser chrome -e ENV=DEV && npm run generate:report,

	cypress:report:e2e:dev:edge : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser edge -e ENV=DEV && npm run generate:report,

	cypress:report:e2e:dev:electron : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser electron -e ENV=DEV && npm run generate:report,

	cypress:report:e2e:tst:chrome : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser chrome -e ENV=TST && npm run generate:report,

	cypress:report:e2e:tst:edge : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser edge -e ENV=TST && npm run generate:report,

	cypress:report:e2e:tst:electron : rimraf cypress/reports && cypress run --spec cypress/journeys/features/e2e/**/*.feature --browser electron -e ENV=TST && npm run generate:report,


* Script api con reporte tanta para DEV o TST en todos los navegadores

	cypress:report:api:dev:chrome : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser chrome -e ENV=DEV && npm run generate:report,
	
	cypress:report:api:dev:edge : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser edge -e ENV=DEV && npm run generate:report,
	
	cypress:report:api:dev:electron : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser electron -e ENV=DEV && npm run generate:report,
	
	cypress:report:api:tst:chrome : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser chrome -e ENV=TST && npm run generate:report,
	
	cypress:report:api:tst:edge : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser edge -e ENV=TST && npm run generate:report,
	
	cypress:report:api:tst:electron : rimraf cypress/reports && cypress run --spec cypress/journeys/features/api/**/*.feature --browser electron -e ENV=TST && npm run generate:report,
	

(colocar en el ultimo lugar del script "generate:report": "node generate-cucumber-report.js para que se generen los reportes y corran los script sin errores)



Ejecucion de caso de prueba e2e de CarritoDeCompras.feature

![Carrito de compras](https://github.com/user-attachments/assets/c79a8ac1-ea6f-4319-aaeb-71eb42f2c7dd)


Ejecucion de casos de prueba e2e con reporte



![Carrito de compras reporte](https://github.com/user-attachments/assets/af0a47d9-3d96-4137-ab1b-1418e0e2fbe5)



Reporte de caso de prueba



![reporte](https://github.com/user-attachments/assets/925ae63f-b003-40b2-a82f-8738cc121ef6)





