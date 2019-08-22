 Instalacion de NodeJS

```url
https://nodejs.org/es/
```

Comandos de verificación de versión

```cmd
C:\Users\PC>node -v
v10.16.0
C:\Users\PC>npm -v
6.9.0
```

Instalando React media  paquetes npm

```cmd
C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS>npm install -g create-react-app

C:\Users\PC\AppData\Roaming\npm\create-react-app -> C:\Users\PC\AppData\Roaming\npm\node_modules\create-react-app\index.js
+ create-react-app@3.0.1
added 91 packages from 45 contributors in 28.555s
```

Verificación de version de react

```cmd
C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS> create-react-app
-V
3.0.1

```

Información del servidor donde se esta ejecutando react

```cmd
C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS> create-react-app
--info

Environment Info:

  System:
    OS: Windows 10
    CPU: (4) x64 Intel(R) Core(TM) i5-4460  CPU @ 3.20GHz
  Binaries:
    Node: 10.16.0 - C:\Program Files\nodejs\node.EXE
    Yarn: Not Found
    npm: 6.9.0 - C:\Program Files\nodejs\npm.CMD
  Browsers:
    Edge: 44.17763.1.0
    Internet Explorer: 11.0.17763.592
  npmPackages:
    react: Not Found
    react-dom: Not Found
    react-scripts: Not Found
  npmGlobalPackages:
    create-react-app: Not Found
```

Creando una application react

```
create-react-app nombre_de_la_app
```

```cmd
C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS>create-react-app myreactapp

Creating a new React app in C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS\myreactapp.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...


> core-js@2.6.9 postinstall C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS\myreactapp\node_modules\babel-runtime\node_modules\core-js
> node scripts/postinstall || echo "ignore"


> core-js-pure@3.1.4 postinstall C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS\myreactapp\node_modules\core-js-pure
> node scripts/postinstall || echo "ignore"

+ react-scripts@3.0.1
+ react@16.8.6
+ react-dom@16.8.6
added 1386 packages from 675 contributors and audited 902127 packages in 455.959s
found 0 vulnerabilities


Initialized a git repository.

Success! Created myreactapp at C:\Users\PC\Google Drive\Developer\FrontEnd\RactJS\myreactapp
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd myreactapp
  npm start
```

