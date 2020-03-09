# qrScanner
 a QR scanner app that scans QR codes from the webcam of the user

## Running the app

To run, just open "index.html" in your browser

## Loose coupling

You can easily switch values of certificates and units or data source, just make sure to preserve the variable names used in myModules/dataFetcher.js. 
The QR code library is called once in qrScan.js , you can easily change it there.

## Powered by

> https://github.com/cozmo/jsQR 