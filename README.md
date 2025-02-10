# Cordova with React Starter Example with barKoder Barcode Scanner SDK

## Introduction

This is a starter app example with React JS, showcasing the integration of the barKoder Barcode Scanner SDK for Cordova. The barKoder Barcode Scanner SDK is an enterprise-grade solution that provides a highly customizable interface for barcode scanning in both iOS and Android apps.

## Key Features:

- Utilizes VueJS for building the app's user interface.
- Integrates the barKoder Barcode Scanner SDK to enable advanced barcode scanning.
- Leverages Cordova for seamless cross-platform deployment to iOS and Android.
- Supports a wide range of barcode types, including 1D and 2D barcodes.

# barKoder Barcode Scanner SDK plugin for Cordova

The barKoder Barcode Scanner SDK is designed to transform smartphones and tablets into rugged barcode scanning devices. It boasts a robust barcode reading engine that supports various barcode types with exceptional speed and recognition rates.

## Supported Barcode Types:

- 1D: Codabar, Code 11, Code 25, Code 39, Code 93, Code 128, DotCode, EAN-8, EAN-13, Interleaved 2 of 5, ITF-14, MSI Plessey, Pharmacode, Telepen, UPC-A, UPC-E.
- 2D: Aztec Code, Aztec Compact, Data Matrix, PDF417, Micro PDF417, QR Code, Micro QR Code.

## Advanced Features:

- DPM Mode for decoding Data Matrix barcodes engraved using any DPM technique.
- MatrixSight algorithm for scanning QR Codes or Data Matrix barcodes with missing patterns.
- Segment Decoding for recognizing 1D barcodes with deformations along their Z axis.
- VIN Barcode Scanning Mode for advanced scanning of Vehicle Identification Numbers.
- DeBlur Mode for eliminating blur in EAN or UPC barcodes.
- PDF417-LineSight for detecting severely damaged PDF417 codes.

## Documentation

You can find full documentation about the barKoder Barcode Reader SDK here: https://docs.barkoder.com

## Trial License

If you run the barKoder Barcode Scanner SDK without a valid trial or production license, all results upon successful barcode scans will be partially masked by asterisks (\*). You can get a trial license simply by [registering on the barKoder Portal](https://barkoder.com/register) and utilizing the self-service for [Evaluation License Generation](https://barkoder.com/spr/new)! Each trial license will be good for an initial duration of 30 days and can be deployed to up to 25 devices. For any custom requirements, contact our sales team via sales@barkoder.com

**Note:** Trial licenses are for development or staging environments only. Do not publish a trial license with your app to public stores.

## Free Developer Support

Our support is completely free for integration or testing purposes and granted through the [barKoder Portal](https://barkoder.com/login). After registering and logging into your account, you only need to submit a [Support Issue](https://barkoder.com/issues) form. Alternatively, you can contact us by email via support@barkoder.com.

## Requirements

Cordova is a cross-platform app runtime that makes it easy to build web apps that run natively on iOS, Android and the web. To get started with building apps using Cordova, you'll need to meet certain requirements:

1. **Node.js and npm:**
   - Ensure you have Node.js installed on your machine. Cordova requires Node.js version 10 or later.
   - npm (Node Package Manager) is also required. It usually comes with Node.js.
2. **Text Editor or IDE:**
   - Choose a text editor or IDE for coding (e.g., Visual Studio Code).
3. **Git:**
   - Install Git for managing projects.
4. **Command Line Interface (CLI):**
   - Cordova commands are executed via the command line. Make sure you have a command line interface (CLI) installed and accessible on your system.
5. **Mobile Development SDKs:**
   - For iOS: Install Xcode (macOS).
   - For Android: Install Android Studio.

# Getting Started

1. **install Cordova globally on your machine:**
   ```bash
   npm install -g cordova
   ```
2. **Create a New Cordova Project:**

```bash
 cordova create my-cordova-app com.example.cordovaapp CordovaApp
```

3. **Navigate into the Cordova Project:**

```bash
 cd my-cordova-app
```

3.1. **Add Android Platform:**

```bash
 cordova platform add android
```

4. **Add barkoder-cordova Plugin:**

```bash
 cordova plugin add barkoder-cordova
```

5. **Create a New React Application:**

```bash
 npx create-react-app react_app
```

6. **Configure React Build Output for Cordova:** </br>
   > Update the react_app project's build configuration to output to the www directory, which is used by Cordova for building mobile applications.
   > Create scripts folder and inside create copy-to-cordova.js that contains code for build configuration output to the www directory.
   > Edit package.json in your React project (react_app) to set the build output directory:

```bash
  "scripts": {
  "start": "react-scripts start",
  "build": "react-scripts build && npm run copy-to-cordova",
  "copy-to-cordova": "node ./scripts/copy-to-cordova.js",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

7. **Build React Application:**

```bash
 cd react-app
npm run build
```

8. **Make sure cordova.js script is included in public/index.html:**

```bash
    <script src="cordova.js"></script>
```

9. **Test and Run Your App:**
   > back to cordova project root

```bash
  cd ..
  cordova build android
  cordova run android
```

## Using the plugin

## React:

**In your components/[fileName].js:**

```bash
import React, { useRef, useState, useEffect } from 'react';
import { BarcodeType } from '../plugins/barkoder-cordova-plugin/www/BarkoderConfig.ts';
```

```bash
const BarcodeScannerApp = () => {
  const barkoderViewRef = useRef(null);
  const [scannedResult, setScannedResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    barkoderViewRef.current = document.getElementById('barkoderView');

  }, []);

  const setActiveBarcodeTypes = async () => {
      try {
          await window.Barkoder.setBarcodeTypeEnabled(BarcodeType.code128, true);
          await window.Barkoder.setBarcodeTypeEnabled(BarcodeType.ean13, true);
      } catch (error) {
          console.error('Error setting active barcode types:', error);
          throw error;
      }
  };

  const setBarkoderSettings = async () => {
      try {
          window.Barkoder.setRegionOfInterestVisible(true);
          window.Barkoder.setRegionOfInterest(5, 5, 90, 90);
          window.Barkoder.setCloseSessionOnResultEnabled(true);
          window.Barkoder.setImageResultEnabled(true);
          window.Barkoder.setBarcodeThumbnailOnResultEnabled(true);
          window.Barkoder.setBeepOnSuccessEnabled(true);
          window.Barkoder.setPinchToZoomEnabled(true);
          window.Barkoder.setZoomFactor(2.0);
      } catch (error) {
          console.error('Error setting Barkoder settings:', error);
          throw error;
      }
  };

  const initializeBarkoder = async (boundingRect) => {
  try {
    if (window.Barkoder) {
      await window.Barkoder.registerWithLicenseKey('ADD_YOUR_LICENSE_KEY_HERE');
      await window.Barkoder.initialize(
        Math.round(boundingRect.width),
        Math.round(boundingRect.height),
        Math.round(boundingRect.x),
        Math.round(boundingRect.y)
      );

      // Set settings once initialized
      await setBarkoderSettings();
      await setActiveBarcodeTypes();
    } else {
      throw new Error('Barkoder plugin is not available');
    }
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const startScanning = async () => {
  try {
    const boundingRect = await barkoderViewRef.current.getBoundingClientRect();
    await initializeBarkoder(boundingRect);
    setIsScanning(true);
    setScannedResult(null);

    document.addEventListener('deviceready', async () => {

      if (window.Barkoder) {
       await window.Barkoder.startScanning(
          handleScanResult,
          (error) => {
            console.error('Scanning error:', error);
            setIsScanning(false);
          }
        );
      } else {
        console.error('BarkoderScanner plugin not available');
        setIsScanning(false);
      }
    }, false);
  } catch (error) {
    alert('Error: ' + error.message);
    setIsScanning(false);
  }
};

const handleScanResult = async (barkoderResult) => {
  setIsScanning(false);

      const decoderResults = Array.isArray(barkoderResult?.decoderResults) ? barkoderResult?.decoderResults : [barkoderResult?.decoderResults];

      for (const result of decoderResults) {
        const randomId = Math.floor(Math.random() * 1000000);
        const newScan = {
          id: randomId,
          textualData: JSON.stringify(result?.textualData),
          type: JSON.stringify(result?.barcodeTypeName),
          resultImage: "data:image/jpeg;base64," + barkoderResult?.resultImageAsBase64,
          thumbnailImage: "data:image/jpeg;base64," + barkoderResult?.resultThumbnailsAsBase64[0],
        };

        if (newScan) {
          setIsScanning(false);
          setScannedResult(newScan);
        }
      }
};

  const stopScanning = () => {
      window.Barkoder.stopScanning(
          () => setIsScanning(false),
          (error) => console.error('Stop scanning error:', error)
      );
  };

    return (
      <div id="container">
        <div id="barkoderView" ref={barkoderViewRef}> </div>
          <div className="btnContainer">
                {!isScanning && ( <div className="actionButton" onClick={startScanning}>
                  <img width="40" alt="scan icon" src="/assets/scan-circle.svg" />
                </div>
          )}
              <div className="result_text_img">
                <span className="result_title">{scannedResult?.type}</span>
                {scannedResult?.thumbnailImage && <img className="resultImage" src={scannedResult?.thumbnailImage} alt="Scanned Thumbnail" />}
                <p>Result:
                  <a href={scannedResult?.textualData}>{scannedResult?.textualData}</a>
                </p>
              </div>
          </div>
      </div>
  );
};

export default BarcodeScannerApp;
```

```bash
<style>
#barkoderView {
min-height: 85vh;
height: 100%;
position: relative;
top: 60px;
}
// other styles as needed
</style>
```
