import React, { useState, useEffect, useRef } from 'react';
import './Scanner_main.css'
import { BarcodeType } from '../plugins/barkoder-cordova-plugin/www/BarkoderConfig.ts';
const BarcodeScannerApp = () => {
  const barkoderViewRef = useRef(null);
  const morePopupRef = useRef(null);
  const detailsMorePopupRef = useRef(null);
  
  const [scannedResult, setScannedResult] = useState(null);
  const [isSettingsPopupVisible, setIsSettingsPopupVisible] = useState(false);
  const [isWebhookConfigVisible, setIsWebhookConfigVisible] = useState(false);
  const [isSearchEnginePopupVisible, setIsSearchEnginePopupVisible] = useState(false);
  const [isRecentScansPopupVisible, setIsRecentScansPopupVisible] = useState(false);
  const [isMorePopupVisible, setIsMorePopupVisible] = useState(false);
  const [isDetailsMorePopupVisible, setIsDetailsMorePopupVisible] = useState(false);
  const [isConfirmDeletePopupVisible, setIsConfirmDeletePopupVisible] = useState(false);
  const [isBarcodeDetailsPopupVisible, setIsBarcodeDetailsPopupVisible] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isFlashOn, setIsFlashOn] = useState(false);
  const [isWebhookEnabled, setIsWebhookEnabled] = useState(false);
  const [isWebSearchEnabled, setIsWebSearchEnabled] = useState(false);
  const [selectedBarcode, setSelectedBarcode] = useState(null);
  const [permanentEngine, setPermanentEngine] = useState('google');
  const [temporaryEngine, setTemporaryEngine] = useState('');
  const [currentZoomFactor, setCurrentZoomFactor] = useState(1.0);
  const [webhookUrl, setWebhookUrl] = useState(localStorage.getItem('webhookUrl') || '');
  const [secretWord, setSecretWord] = useState(localStorage.getItem('secretWord') || '');
  const [confirmationFeedback, setConfirmationFeedback] = useState(null);
  const [recentScans, setRecentScans] = useState([]);
  
  
  useEffect(() => {
      barkoderViewRef.current = document.getElementById('barkoderView');
      
  }, []);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (morePopupRef.current && !morePopupRef.current.contains(event.target)) {
        setIsMorePopupVisible(false);
      }
      if (detailsMorePopupRef.current && !detailsMorePopupRef.current.contains(event.target)) {
        setIsDetailsMorePopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);


  const setActiveBarcodeTypes = async () => {
    try {
      await window.Barkoder.setBarcodeTypeEnabled(BarcodeType.code128, true);
      await window.Barkoder.setBarcodeTypeEnabled(BarcodeType.ean13, true);
      await window.Barkoder.setBarcodeTypeEnabled(BarcodeType.qr, true);
    } catch (error) {
      console.error('Error setting active barcode types:', error);
      throw error;
    }
  };

  const setBarkoderSettings = async () => {
    try {
      window.Barkoder.setRegionOfInterestVisible(true);
      window.Barkoder.setRegionOfInterest(5, 30, 90, 40);
      window.Barkoder.setCloseSessionOnResultEnabled(true);
      window.Barkoder.setMaximumResultsCount(100);
      window.Barkoder.setImageResultEnabled(true);
      window.Barkoder.setBarcodeThumbnailOnResultEnabled(true);
      window.Barkoder.setBeepOnSuccessEnabled(true);
      window.Barkoder.setPinchToZoomEnabled(true);
      window.Barkoder.setZoomFactor(currentZoomFactor);
      

    } catch (error) {
      console.error('Error setting Barkoder settings:', error);
      throw error;
    }
  };

  const toggleFlash = () => {
    if (window.Barkoder) {
      setIsFlashOn(!isFlashOn);
      window.Barkoder.setFlashEnabled(!isFlashOn);
    } else {
      console.error('BarkoderScanner plugin not available');
    }
  };

  const toggleScan = () => {
    if (isScanning) {
      stopScanning();
    } else {
      startScanning();
    }
  };


  const initializeBarkoder = async (boundingRect) => {
    try {
      if (window.Barkoder) {
        await window.Barkoder.registerWithLicenseKey('Your_key');
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

  const tapScan = () => {
    if (isScanning) return; 
    setIsScanning(true);
    setScannedResult(null);
  
    try {
      if (window.Barkoder) {
        window.Barkoder.startScanning(
          handleScanResult,
          (error) => {
            console.error('Scanning error:', error);
            setIsScanning(false);
          }
        );
      } else {
        throw new Error('Barkoder plugin is not available');
      }
    } catch (error) {
      alert('Error: ' + error.message);
      setIsScanning(false);
    }
  };
  

  const startScanning = async () => {
    if (isScanning) return;
    setIsScanning(true);
    setScannedResult(null);
  
    try {
      const boundingRect = await barkoderViewRef.current.getBoundingClientRect();
      await initializeBarkoder(boundingRect);
  
      document.addEventListener('deviceready', startBarcodeScan, false);
    } catch (error) {
      alert('Error: ' + error.message);
      setIsScanning(false);
    }
  };
  
  const startBarcodeScan = () => {
    if (window.Barkoder) {
      window.Barkoder.startScanning(
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
  };
  
  const handleScanResult = async (barkoderResult) => {
    // If decoderResults is an array, iterate through it
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
        setScannedResult(newScan);
        await window.Barkoder.stopScanning();
        setIsScanning(false);
  
        const updatedScans = [...recentScans, newScan];
        setRecentScans(updatedScans);
      }
    }
  };
  

  


  // const startScanning = async () => {
  //   setIsScanning(true);
  //   setScannedResult(null);
    
  //   try {
  //     const boundingRect = await barkoderViewRef.current.getBoundingClientRect();
  //     // alert('Barkoder initialized') ;
  //     if (window.Barkoder) {
  //       await  window.Barkoder.registerWithLicenseKey('PEmBIohr9EZXgCkySoetbwP4gvOfMcGzgxKPL2X6uqP3l0Sl9Jd4wRiBqt0FcK0LpN7RtAZUNNmh1_Z2lzqSMawaMTK3O8Y8VFQggkzq3j6drhPuNIIZpex7Xtju_1zd6uC5RUkQPkpKn7yxB3JLr8uSHnVgttOVh-1SoQhsCcxR1EMvvuDHxiVJNAqMTWBckmEnRWMxTA2U5ViP2v7K9vWrKXZllwqfqUzDky6yGpraAlpbwxlzqa4eo7NthGmIjAFWBXM9pLG5asJVtRxMCJVYnqXr0_KDZDvKwLT_k7TkZ9SgO8LtmsIFm6YPhRy8');
  //     }
      
  //   await new Promise((resolve, reject) => {
  //       window.Barkoder.initialize(
  //         Math.round(boundingRect.width),
  //         Math.round(boundingRect.height),
  //         Math.round(boundingRect.x),
  //         Math.round(boundingRect.y),
  //         () => resolve(),
  //         (error) => reject('Initialization error: ' + error)
  //       );
  //     });

  //     await setBarkoderSettings();
  //     await setActiveBarcodeTypes();

  //     document.addEventListener('deviceready', () => {
  //       if (window.Barkoder) {
  //         window.Barkoder.startScanning(
  //           (barkoderResult) => {
  //             const randomId = Math.floor(Math.random() * 1000000);
  //             const newScan = {
  //               id: randomId,
  //               textualData: JSON.stringify(barkoderResult?.decoderResults[0]?.textualData),
  //               type: JSON.stringify(barkoderResult?.decoderResults[0]?.barcodeTypeName),
  //               resultImage: "data:image/jpeg;base64," + barkoderResult?.resultImageAsBase64,
  //               thumbnailImage: "data:image/jpeg;base64," + barkoderResult?.resultThumbnailsAsBase64[0],
  //             };
  //             setScannedResult(newScan);

  //             window.Barkoder.stopScanning();
  //             setIsScanning(false);

  //             setRecentScans((prevScans) => {
  //               const updatedScans = [...prevScans, newScan];
  //               localStorage.setItem('recentScans', JSON.stringify(updatedScans));
  //               return updatedScans;
  //             });
  //           },
  //           (error) => console.error('Scanning error:', error)
  //         );
  //       } else {
  //         console.error('BarkoderScanner plugin not available');
  //       }
  //     }, false);
  //   } catch (error) {
  //     alert('Error: ' + error);
  //   }
  // };

  const stopScanning = () => {
     
        window.Barkoder.stopScanning(
          () => setIsScanning(false),
          (error) => console.error('Stop scanning error:', error)
        );
  };

  const handleSettingsClick = () => {
    if (!isSettingsPopupVisible) {
      setIsSettingsPopupVisible(true);
    }

    if (isScanning) {
      stopScanning();
    }
  };

  const handleWebhookConfigClick = () => {
    loadWebhookConfig();
    if (!isWebhookConfigVisible) {
      setIsWebhookConfigVisible(true);
    }
  };

  const handleOpenEnginesPopup = () => {
    if (!isSearchEnginePopupVisible) {
      setTemporaryEngine(permanentEngine);
      setIsSearchEnginePopupVisible(true);
    }
  };

  const handleOpenRecentScansPopup = () => {
    if (!isRecentScansPopupVisible) {
      setIsRecentScansPopupVisible(true);
    }
  };

  const openRecentScansMorePopup = () => {
    setIsMorePopupVisible(true);
  };

  const openDetailsMorePopup = () => {
    setIsDetailsMorePopupVisible(true);
  };

  const closeSettings = () => {
    setIsSettingsPopupVisible(false);
  };

  const closeRecentScans = () => {
    setIsRecentScansPopupVisible(false);
  };

  const closeMorePopup = () => {
    setIsMorePopupVisible(false);
  };

  const closeDetailsMorePopup = () => {
    setIsDetailsMorePopupVisible(false);
  };

  const closeWebhookConfig = () => {
    setIsWebhookConfigVisible(false);
  };

  const closeEnginesPopup = () => {
    setIsSearchEnginePopupVisible(false);
  };

  const saveSelectedEngine = () => {
    setPermanentEngine(temporaryEngine);
    closeEnginesPopup();
  };

  const zoomIn = async () => {
    try {
      setCurrentZoomFactor(currentZoomFactor + 1.0);
      window.Barkoder.setZoomFactor(currentZoomFactor + 1.0);
    } catch (error) {
      console.error('Error zooming in:', error);
    }
  };

  const zoomOut = async () => {
    try {
      setCurrentZoomFactor(currentZoomFactor - 1.0);
      window.Barkoder.setZoomFactor(currentZoomFactor - 1.0);
    } catch (error) {
      console.error('Error zooming out:', error);
    }
  };

  const handleCopyToClipboard = () => {
    alert('Text copied to clipboard: ' + scannedResult.textualData);
  };

  const handleWebhookConfiguration = async () => {
    if (!webhookUrl) {
      alert('The Webhook URL is not set.');
      return;
    }

    if (!scannedResult) {
      alert('No scanned result to send.');
      return;
    }

    try {
      alert('Send scanned result to: ' + webhookUrl);
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(scannedResult),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok. Status: ${response.statusText}`);
      }

      const result = await response.json();
      alert('Webhook response: ' + JSON.stringify(result));
    } catch (error) {
      alert('Error sending webhook request: ' + error.message);
    }
  };

  const handleSearch = () => {
    if (scannedResult && scannedResult.textualData) {
      const searchQuery = encodeURIComponent(scannedResult.textualData);
      const searchEngines = {
        google: 'https://www.google.com/search?q=',
        yahoo: 'https://search.yahoo.com/search?p=',
        duckDuckGo: 'https://www.duckduckgo.com/?q=',
        yandex: 'https://yandex.com/search/?text=',
        bing: 'https://www.bing.com/search?q=',
        brave: 'https://search.brave.com/search?q=',
      };

      const baseUrl = searchEngines[permanentEngine] || searchEngines.google;
      const searchUrl = `${baseUrl}${searchQuery}`;
      window.open(searchUrl, '_blank');
    } else {
      console.error('No textual data available to search.');
    }
  };

  const saveWebhookConfig = () => {
    localStorage.setItem('webhookUrl', webhookUrl);
    localStorage.setItem('secretWord', secretWord);
    closeWebhookConfig();
  };

  const loadWebhookConfig = () => {
    setWebhookUrl(localStorage.getItem('webhookUrl') || '');
    setSecretWord(localStorage.getItem('secretWord') || '');
  };

  const resetWebhookConfig = () => {
    localStorage.removeItem('webhookUrl');
    localStorage.removeItem('secretWord');
    setWebhookUrl('');
    setSecretWord('');
  };

  const openConfirmDeletePopup = () => {
    setIsConfirmDeletePopupVisible(true);
  };

  const closeConfirmDeletePopup = () => {
    setIsConfirmDeletePopupVisible(false);
  };

  const deleteScan = () => {
    setRecentScans([]);
    // localStorage.removeItem('recentScans');
    closeConfirmDeletePopup();
  };

  const deleteScannedBarcode = () => {
    if (!selectedBarcode || !selectedBarcode.id) {
      console.error('Selected barcode is invalid or missing an ID');
      return;
    }
  
    setRecentScans((prevScans) => {
      const updatedScans = prevScans.filter((barcode) => barcode.id !== selectedBarcode.id);
      return updatedScans;
    });
  
    // Call the close function after updating the scans
    closeBarcodeDetailsPopup();
  };
  
  

  const openBarcodeDetailsPopup = (barcode) => {
    setSelectedBarcode(barcode);
    setIsBarcodeDetailsPopupVisible(true);
  };

  const closeBarcodeDetailsPopup = () => {
    setIsBarcodeDetailsPopupVisible(false);
    setSelectedBarcode(null);
  };


  return (
    <div id="container">
    <div className="app_title" style={{ backgroundPosition: isScanning || scannedResult?.thumbnailImage ? 'top' : 'bottom' }}>
      <div className="title_settings_container">
        {/* <h4 v-if="isScanning && !scannedResult?.thumbnailImage" @click="stopScanning">Back</h4> */}
        {isScanning && !scannedResult?.thumbnailImage && (
          <img onClick={stopScanning} alt="touch icon" src="/assets/close.svg" />
        )}
        <h2 style={{ width: '100%' }}>Cordova + React</h2>
        <img alt="settings icon" src="/assets/Settings.svg" onClick={handleSettingsClick} />
      </div>
    </div>
  
    <div id="barkoderView" ref={barkoderViewRef} style={{ height: '85vh', minHeight: scannedResult?.thumbnailImage && !isScanning ? '85vh' : '85vh', top: '60px' }}>
      {scannedResult?.resultImage && (
        <img className="fullResultImage" src={scannedResult?.resultImage} onClick={startScanning} alt="Scanned Thumbnail" />
      )}
      {scannedResult?.resultImage && (
        <div className="tap_anywhere_popup" onClick={startScanning}>
          <img alt="touch icon" src="/assets/touch_app.svg" />
          <span>Tap anywhere to continue</span>
        </div>
      )}
    </div>
  
    <div
  className={`btnContainer ${scannedResult?.type ? 'animate-btnContainer' : ''}`} style={{ borderRadius: !isScanning ? '28px 28px 0 0' : '0 0 0 0' }}>
      {scannedResult?.type && (
        <div className="resultContainer">
          <div className="line_container">
            <div className="results_line"></div>
          </div>
          <div className="result_text_img">
            <span className="result_title">{scannedResult?.type}</span>
            {scannedResult?.thumbnailImage && <img className="resultImage" src={scannedResult?.thumbnailImage} alt="Scanned Thumbnail" />}
            <p>Result:
              <a href={scannedResult?.textualData}>{scannedResult?.textualData}</a>
            </p>
          </div>
          <div className="results_btn_container">
            <button className="main_btn" onClick={handleCopyToClipboard}><img alt="copy icon" src="/assets/Copy.svg" />Copy</button>
            <button className="main_btn"><img alt="csv icon" src="/assets/CSV.svg" />CSV</button>
            <button className="main_btn" onClick={handleWebhookConfiguration}><img alt="webhook icon" src="/assets/Webhook.svg" />Webhook</button>
            <button className="main_btn" onClick={handleSearch}><img alt="search icon" src="/assets/Search.svg" />Search</button>
          </div>
        </div>
      )}
  
      {!scannedResult?.type && (
        <div className="buttons">
          {!isScanning && (
            <div className="recent_scan_btn" onClick={handleOpenRecentScansPopup}>
              <img width="40" alt="recent scan icon" src="/assets/recent.webp" />
              <span style={{ fontSize: '14px' }}>Recent</span>
            </div>
          )}
          {!isScanning && (
            <div className="actionButton" onClick={toggleScan}>
              <img width="40" alt="scan icon" src="/assets/scan-circle.svg" />
            </div>
          )}
          {!isScanning && (
            <div style={{ width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img width="40" alt="info icon" src="/assets/info.svg" />
            </div>
          )}
          {isScanning && (
            <div className="scanning_on_buttons">
              {isScanning && isFlashOn && (
                <button onClick={toggleFlash} className="click_btn"><img alt="flash icon" src="/assets/flash_on.svg" /></button>
              )}
              {isScanning && !isFlashOn && (
                <button onClick={toggleFlash} className="click_btn"><img alt="flash icon" src="/assets/flash_off.svg" /></button>
              )}
              {isScanning && currentZoomFactor > 1.0 && (
                <button onClick={zoomOut} className="click_btn"><img alt="zoom out icon" src="/assets/zoom_out.svg" /></button>
              )}
              {isScanning && currentZoomFactor <= 1.0 && (
                <button onClick={zoomIn} className="click_btn"><img alt="zoom in icon" src="/assets/Zoom.svg" /></button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  
    <div id="settingsPopup" style={{ display: isSettingsPopupVisible ? 'block' : 'none' }}>
      <div className="section_title_container">
        <img alt="back icon" src="/assets/back_arrow.svg" onClick={closeSettings} />
        <h2 style={{ width: '100%', textAlign: 'start', color: '#291716', fontSize: '22px' }}>Settings</h2>
      </div>
  
      <div className="settings_container">
        <div className="settings_title">
          <h3 style={{ margin: '0' }}>Webhook Settings</h3>
        </div>
        <div className="settings_item toggle_btn">
          <span>Enabled Webhook</span>
          <div className="toggle_switch">
            <input type="checkbox" id="enabled_webhook" checked={isWebhookEnabled} onChange={(e) => setIsWebhookEnabled(e.target.checked)} />
            <label htmlFor="enabled_webhook"></label>
          </div>
        </div>
        <div className={`settings_item ${isWebhookEnabled ? '' : 'disabled'}`}  onClick={handleWebhookConfigClick}>
          <span>Webhook Config</span>
          <div className="arrow_settings_container">
            <img alt="right icon" src="/assets/right_arrow.svg" />
          </div>
        </div>

        <div className="settings_item toggle_btn">
          <span>Webhook Confirmation Feedback</span>
          <div className="toggle_switch">
            <input type="checkbox" id="confirmation_feedback" checked={confirmationFeedback} onChange={(e) => setConfirmationFeedback(e.target.checked)} />
            <label htmlFor="confirmation_feedback"></label>
          </div>
        </div>
      </div>
  
      <div className="settings_container">
        <div className="settings_title">
          <h3 style={{ margin: '0' }}>General Settings</h3>
        </div>
        <div className="settings_item toggle_btn">
          <span>Enabled Search on Web</span>
          <div className="toggle_switch">
            <input type="checkbox" id="enabled_websearch" checked={isWebSearchEnabled} onChange={(e) => setIsWebSearchEnabled(e.target.checked)} />
            <label htmlFor="enabled_websearch"></label>
          </div>
        </div>
        <div className={`settings_item ${isWebSearchEnabled ? '' : 'disabled'}`} onClick={handleOpenEnginesPopup}>
          <span>Default Search Engine</span>
          <div className="arrow_settings_container">
            <img alt="right icon" src="/assets/right_arrow.svg" />
          </div>
        </div>

      </div>
  
      <div className="settings_container">
        <div className="settings_title">
          <h3 style={{ margin: '0' }}>Scanning Mode Settings</h3>
        </div>
        <div className="settings_item">
          <span>All 1D Codes</span>
          <div className="arrow_settings_container"> <img alt="right icon" src="/assets/right_arrow.svg" /> </div>
        </div>
        <div className="settings_item">
          <span>1D Industrial</span>
          <div className="arrow_settings_container"> <img alt="right icon" src="/assets/right_arrow.svg" /> </div>
        </div>
      </div>
    </div>
  
    <div id="recentScansPopup" style={{ display: isRecentScansPopupVisible ? 'block' : 'none' }}>
      <div className="section_title_container" style={{ position: 'relative' }}>
        <img alt="back icon" src="/assets/back_arrow.svg" onClick={closeRecentScans} />
        <h2 style={{ width: '100%', textAlign: 'start', color: '#291716', fontSize: '22px' }}>Recent Scans</h2>
        <img alt="more options" src="/assets/more_vert.svg" onClick={openRecentScansMorePopup} />
      </div>
  
      <div id="morePopup" style={{ display: isMorePopupVisible ? 'block' : 'none' }} ref={morePopupRef}>
        <div className="more_popup_container">
        <div className={`delete_all_container ${recentScans.length < 1 ? 'disabled' : ''}`} onClick={recentScans.length > 0 ? openConfirmDeletePopup : null}>
          <img alt="delete icon" src="/assets/delete.svg" />
          <span>Delete All</span>
        </div>

        </div>
      </div>
  
      <div className="recent_scans_container">
        {recentScans?.length > 0 ? (
          <div className="recent_scans_list">
            {recentScans?.map((scan, index) => (
              <div key={index} className="recent_scan_item" onClick={() => openBarcodeDetailsPopup(scan, index)}>
                <div className="recent_scan_details">
                  <div className="recent_scan_barcode_icon">
                    <img alt="barcode icon" src="/assets/1d-barcode.svg" />
                  </div>
                  <div className="recent_text_info">
                    <span className="recent_scan_title">{scan?.textualData}</span>
                    <span className="recent_scan_subtitle">{scan?.type}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No recent scans.</p>
        )}
      </div>
    </div>
  
    <div id="barcodeDetailsPopup" style={{ display: isBarcodeDetailsPopupVisible ? 'block' : 'none' }}>
      <div className="section_title_container" style={{ position: 'relative' }}>
        <img alt="back icon" src="/assets/back_arrow.svg" onClick={closeBarcodeDetailsPopup} />
        <h2 style={{ width: '100%', textAlign: 'start', color: '#291716', fontSize: '22px' }}>Barcode Details</h2>
        <img alt="more options" src="/assets/more_vert.svg" onClick={openDetailsMorePopup} />
      </div>
  
      <div className="details_image_container">
        <div className="details_icon_wrapper">
          <img width="48" alt="barcode icon" src="/assets/1d-barcode.svg" />
        </div>
      </div>
      <div className="details_section_title">
        <span>Data</span>
      </div>
      <div className="details_text_info">
        <span style={{ color: '#666666', fontWeight: 500, fontSize: '12px' }}>Barcode Type</span>
        <span style={{ fontSize: '16px', letterSpacing: '0.5px', fontWeight: 500 }}>{selectedBarcode?.type}</span>
      </div>
      <div className="details_text_info">
        <span style={{ color: '#666666', fontWeight: 500, fontSize: '12px' }}>Value</span>
        <span style={{ fontSize: '16px', letterSpacing: '0.5px', fontWeight: 500 }}>{selectedBarcode?.textualData}</span>
      </div>
  
      <div id="detailsMorePopup" style={{ display: isDetailsMorePopupVisible ? 'block' : 'none' }} ref={detailsMorePopupRef}>
        <div className="more_popup_container">
          <div className="delete_all_container" onClick={deleteScannedBarcode}>
            <img alt="delete icon" src="/assets/delete.svg" />
            <span>Delete</span>
          </div>
        </div>
      </div>
    </div>
  
    <div id="confirmDeletePopup" style={{ display: isConfirmDeletePopupVisible ? 'block' : 'none' }} className="delete_popup_confirmation">
      <div>
        <h4>This action permanently deletes all recent scans</h4>
        <div className="confirm_delete_container">
          <span className="confirm_buttons" onClick={closeConfirmDeletePopup}>CANCEL</span>
          <span className="confirm_buttons" onClick={deleteScan}>DELETE ALL</span>
        </div>
      </div>
    </div>
  
    <div id="webhookConfigPopup" style={{ display: isWebhookConfigVisible ? 'block' : 'none' }}>
      <div className="section_title_container">
        <img alt="back icon" src="/assets/back_arrow.svg" onClick={closeWebhookConfig} />
        <h3 style={{ width: '100%', textAlign: 'start', color: '#291716', fontSize: '16px' }}>Configure Webhook</h3>
        <span className="save_btn" onClick={saveWebhookConfig}>Save</span>
      </div>
      <div className="webhook_config_content">
        <input id="url" className="textInput" type="text" placeholder="Enter Webhook url" value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />
        <input id="secret_word" className="textInput" type="text" placeholder="Enter Secret Word" value={secretWord} onChange={(e) => setSecretWord(e.target.value)} />
        
        <div className="webhook_config_btn_container">
          <button onClick={resetWebhookConfig}>Reset Value</button>
        </div>
      </div>
    </div>
  
    <div id="overlay" style={{ display: isSearchEnginePopupVisible || isConfirmDeletePopupVisible ? 'block' : 'none' }}></div>
  
    <div id="searchEnginePopup" style={{ display: isSearchEnginePopupVisible ? 'block' : 'none' }}>
      <div style={{ padding: '8px', height: 'auto', marginBottom: '16px' }}>
        <h3 style={{ width: '100%', textAlign: 'start', color: '#291716', fontSize: '24px', margin: '0' }}>Default Search Engine</h3>
      </div>
  
      <div className="engines_container">
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="google" value="google" checked={temporaryEngine === 'google'} onChange={() => setTemporaryEngine('google')} />
          <label htmlFor="google">Google</label>
        </div>
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="yahoo" value="yahoo" checked={temporaryEngine === 'yahoo'} onChange={() => setTemporaryEngine('yahoo')} />
          <label htmlFor="yahoo">Yahoo</label>
        </div>
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="duckDuckGo" value="duckDuckGo" checked={temporaryEngine === 'duckDuckGo'} onChange={() => setTemporaryEngine('duckDuckGo')} />
          <label htmlFor="duckDuckGo">DuckDuckGo</label>
        </div>
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="yandex" value="yandex" checked={temporaryEngine === 'yandex'} onChange={() => setTemporaryEngine('yandex')} />
          <label htmlFor="yandex">Yandex</label>
        </div>
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="bing" value="bing" checked={temporaryEngine === 'bing'} onChange={() => setTemporaryEngine('bing')} />
          <label htmlFor="bing">Bing</label>
        </div>
        <div className="engine_checkbox_container">
          <input type="radio" name="engine_choice" id="brave" value="brave" checked={temporaryEngine === 'brave'} onChange={() => setTemporaryEngine('brave')} />
          <label htmlFor="brave">Brave</label>
        </div>
      </div>
      <div className="footer_btn_container">
        <button onClick={closeEnginesPopup}>Cancel</button>
        <button onClick={saveSelectedEngine}>Save</button>
      </div>
    </div>
  </div>
  

  );
};

export default BarcodeScannerApp;
