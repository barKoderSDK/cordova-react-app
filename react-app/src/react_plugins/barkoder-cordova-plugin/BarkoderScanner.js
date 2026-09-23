var exec = require("cordova/exec");

var barkoderScanner = "BarkoderScanner";

// - Initialize the BarkoderView

/**
 * Initializes the Barkoder scanner with the specified dimensions and position
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.initialize = function (width, height, x, y, success, error) {
  exec(success, error, barkoderScanner, "initialize", [width, height, x, y]);
};

// - Register with license key

/**
 * Registers the Barkoder scanner with the specified license key
 * @param {*} licenseKey - The license key to register the Barkoder scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.registerWithLicenseKey = function (licenseKey, success, error) {
  exec(success, error, barkoderScanner, "registerWithLicenseKey", [licenseKey]);
};

// - Setters

/**
 * Sets the zoom factor for the device's camera, adjusting the level of zoom during barcode scanning
 * @param {*} zoomFactor - The zoom factor to set. This should be a positive number
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setZoomFactor = function (zoomFactor, success, error) {
  exec(success, error, barkoderScanner, "setZoomFactor", [zoomFactor]);
};

/**
 * Enables or disables the device's flash (torch) for illumination during barcode scanning
 * @param {*} enabled - Set to true to enable the flash, false to disable it.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setFlashEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setFlashEnabled", [enabled]);
};

/**
 * Controls whether the front camera preview is horizontally mirrored.
 * @param {*} enabled - Set to true to mirror the preview, false to disable mirroring.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setPreviewMirrored = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setPreviewMirrored", [enabled]);
};

exports.startCamera = function (success, error) {
  exec(success, error, barkoderScanner, "startCamera", []);
};

/**
 * Initiates the barcode scanning process, allowing the application to detect and decode barcodes from the device's camera feed
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.startScanning = function (success, error) {
  exec(success, error, barkoderScanner, "startScanning", []);
};

/**
 * Halts the barcode scanning process, stopping the camera from capturing and processing barcode information
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.stopScanning = function (success, error) {
  exec(success, error, barkoderScanner, "stopScanning", []);
};

/**
 * Temporarily suspends the barcode scanning process, pausing the camera feed without completely stopping the scanning session
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.pauseScanning = function (success, error) {
  exec(success, error, barkoderScanner, "pauseScanning", []);
};

/**
 * Freezes the current AR scanning session by capturing a still image from the camera feed.
 * Use only when AR mode is enabled to temporarily freeze the view while keeping overlays visible.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.freezeScanning = function (success, error) {
  exec(success, error, barkoderScanner, "freezeScanning", []);
};

/**
 * Unfreezes the AR scanning session by removing the still image and reactivating the camera and overlays.
 * Use only when AR mode is enabled to restore the live AR view and continue scanning.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.unfreezeScanning = function (success, error) {
  exec(success, error, barkoderScanner, "unfreezeScanning", []);
};

/**
 * Captures the latest camera frame
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.captureImage = function (success, error) {
  exec(success, error, barkoderScanner, "captureImage", []);
};

/**
 * Scan barcodes from base64 string image
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.scanImage = function (base64, success, error) {
  exec(success, error, barkoderScanner, "scanImage", [base64]);
};

/**
 * Sets the color of the lines used to indicate the location of detected barcodes on the camera feed
 * @param {*} hexColor - The color to set for the location lines, specified in hexadecimal format (e.g., '#FF0000' for red)
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setLocationLineColor = function (hexColor, success, error) {
  exec(success, error, barkoderScanner, "setLocationLineColor", [hexColor]);
};

/**
 * Sets the width of the lines indicating the location of detected barcodes on the camera feed
 * @param {*} lineWidth - The width of the location lines, in pixels. Must be a positive number
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setLocationLineWidth = function (lineWidth, success, error) {
  exec(success, error, barkoderScanner, "setLocationLineWidth", [lineWidth]);
};

/**
 * Sets the color of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed
 * @param {*} hexColor - The color to set for the ROI lines, in hexadecimal format (e.g., '#FF0000' for red).
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRoiLineColor = function (hexColor, success, error) {
  exec(success, error, barkoderScanner, "setRoiLineColor", [hexColor]);
};

/**
 * Sets the width of the lines outlining the Region of Interest (ROI) for barcode scanning on the camera feed
 * @param {*} lineWidth - The width of the ROI lines, in pixels. This should be a positive number
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRoiLineWidth = function (lineWidth, success, error) {
  exec(success, error, barkoderScanner, "setRoiLineWidth", [lineWidth]);
};

/**
 * Sets the background color of the overlay within the Region of Interest (ROI) for barcode scanning on the camera feed
 * @param {*} hexColor - The background color to set for the ROI overlay, in hexadecimal format (e.g., '#FF0000' for red)
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRoiOverlayBackgroundColor = function (hexColor, success, error) {
  exec(success, error, barkoderScanner, "setRoiOverlayBackgroundColor", [
    hexColor,
  ]);
};

/**
 * Enables or disables the automatic closing of the scanning session upon detecting a barcode result
 * @param {*} enabled - Set to true to enable automatic session closure, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCloseSessionOnResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setCloseSessionOnResultEnabled", [
    enabled,
  ]);
};

/**
 * Enables or disables the capturing and processing of image data when a barcode is successfully detected
 * @param {*} enabled - Set to true to include an image in the result, false to exclude it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setImageResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setImageResultEnabled", [enabled]);
};

/**
 * Enables or disables the inclusion of barcode location information within the image data result
 * @param {*} enabled - Set to true to include location information in the image result, false to exclude it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setLocationInImageResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setLocationInImageResultEnabled", [
    enabled,
  ]);
};

/**
 * Defines the Region of Interest (ROI) on the camera preview for barcode scanning, specifying an area where the application focuses on detecting barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRegionOfInterest = function (
  left,
  top,
  width,
  height,
  success,
  error
) {
  exec(success, error, barkoderScanner, "setRegionOfInterest", [
    left,
    top,
    width,
    height,
  ]);
};

/**
 * Sets the threads limit
 * @param {*} threadsLimit - The maximum number of threads to use for decoding
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setThreadsLimit = function (threadsLimit, success, error) {
  exec(success, error, barkoderScanner, "setThreadsLimit", [threadsLimit]);
};

/**
 * Enables or disables the display of barcode location information on the camera preview
 * @param {*} enabled - Set to true to display location information in the scanning preview, false to hide it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setLocationInPreviewEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setLocationInPreviewEnabled", [
    enabled,
  ]);
};

/**
 * Enables or disables the pinch-to-zoom feature for adjusting the zoom level during barcode scanning
 * @param {*} enabled - Set to true to enable pinch-to-zoom gesture, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setPinchToZoomEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setPinchToZoomEnabled", [enabled]);
};

/**
 * Sets the visibility of the Region of Interest (ROI) on the camera preview
 * @param {*} regionOfInterestVisible - Set to true to make the region of interest visible, false to hide it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRegionOfInterestVisible = function (
  regionOfInterestVisible,
  success,
  error
) {
  exec(success, error, barkoderScanner, "setRegionOfInterestVisible", [
    regionOfInterestVisible,
  ]);
};

/**
 * Sets the resolution for barcode scanning
 * @param {*} resolution - The resolution to set for the barcode scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setBarkoderResolution = function (resolution, success, error) {
  exec(success, error, barkoderScanner, "setBarkoderResolution", [resolution]);
};

/**
 * Sets the style of the visual marker drawn at the center of the Region of Interest (ROI).
 * @param {*} roiCenterMark - The ROI center mark style to set
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setRoiCenterMark = function (roiCenterMark, success, error) {
  exec(success, error, barkoderScanner, "setRoiCenterMark", [roiCenterMark]);
};

/**
 * Enables or disables the audible beep sound upon successfully decoding a barcode
 * @param {*} enabled - Set to true to enable the beep sound, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setBeepOnSuccessEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setBeepOnSuccessEnabled", [enabled]);
};

/**
 * Enables or disables the device vibration upon successfully decoding a barcode.
 * @param {*} enabled - Set to true to enable vibration, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setVibrateOnSuccessEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setVibrateOnSuccessEnabled", [
    enabled,
  ]);
};

exports.showLogMessages = function (showLogMessages, success, error) {
  exec(success, error, barkoderScanner, "showLogMessages", [showLogMessages]);
};

/**
 * Sets the length range for the specified barcode type
 * @param {*} type - The barcode type to check
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setBarcodeTypeLengthRange = function (type, min, max, success, error) {
  exec(success, error, barkoderScanner, "setBarcodeTypeLengthRange", [
    type,
    min,
    max,
  ]);
};

/**
 * Sets the encoding character set for barcode scanning
 * @param {*} characterSet - The character set to use for encoding data
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setEncodingCharacterSet = function (characterSet, success, error) {
  exec(success, error, barkoderScanner, "setEncodingCharacterSet", [
    characterSet,
  ]);
};

/**
 * Sets the decoding speed for barcode scanning
 * @param {*} decodingSpeed - The decoding speed to set for the barcode scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setDecodingSpeed = function (decodingSpeed, success, error) {
  exec(success, error, barkoderScanner, "setDecodingSpeed", [decodingSpeed]);
};

/**
 * Sets the formatting type for barcode scanning
 * @param {*} formattingType - The formatting type to set for the barcode scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setFormattingType = function (formattingType, success, error) {
  exec(success, error, barkoderScanner, "setFormattingType", [formattingType]);
};

/**
 * Sets the Code11 checksum type
 * @param {*} checksumType - The checksum type to set for Code 11 barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCode11ChecksumType = function (checksumType, success, error) {
  exec(success, error, barkoderScanner, "setCode11ChecksumType", [
    checksumType,
  ]);
};

/**
 * Sets the MSI checksum type
 * @param {*} checksumType - The checksum type to set for the MSI barcode scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMsiChecksumType = function (checksumType, success, error) {
  exec(success, error, barkoderScanner, "setMsiChecksumType", [checksumType]);
};

/**
 * Sets the Code39 checksum type
 * @param {*} checksumType - The checksum type to set for Code 39 barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCode39ChecksumType = function (checksumType, success, error) {
  exec(success, error, barkoderScanner, "setCode39ChecksumType", [
    checksumType,
  ]);
};

/**
 * Sets whether a specific barcode type is enabled
 * @param {*} type - The barcode type to enable or disable
 * @param {*} enabled - Set to true to enable the barcode type, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setBarcodeTypeEnabled = function (type, enabled, success, error) {
  exec(success, error, barkoderScanner, "setBarcodeTypeEnabled", [
    type,
    enabled,
  ]);
};

/**
 * Sets whether multi-code caching is enabled
 * @param {*} enabled - Set to true to enable multi-code caching, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMulticodeCachingEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setMulticodeCachingEnabled", [
    enabled,
  ]);
};

/**
 * Sets the caching duration (in milliseconds) for multi-code results
 * @param {*} duration - The caching duration in milliseconds for multi-code barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMulticodeCachingDuration = function (duration, success, error) {
  exec(success, error, barkoderScanner, "setMulticodeCachingDuration", [
    duration,
  ]);
};

/**
 * Sets the maximum number of results to be returned from barcode scanning
 * @param {*} resultsCount - The maximum number of results to return
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMaximumResultsCount = function (resultsCount, success, error) {
  exec(success, error, barkoderScanner, "setMaximumResultsCount", [
    resultsCount,
  ]);
};

/**
 * A boolean indicating whether to enable barcode thumbnail on result.
 * @param {*} enabled - Set to true to include the barcode thumbnail in the result, false to exclude it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setBarcodeThumbnailOnResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setBarcodeThumbnailOnResultEnabled", [
    enabled,
  ]);
};

/**
 * Sets the threshold between duplicate scans
 * @param {*} thresholdBetweenDuplicatesScans - The threshold between duplicate scans
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setThresholdBetweenDuplicatesScans = function (
  thresholdBetweenDuplicatesScans,
  success,
  error
) {
  exec(success, error, barkoderScanner, "setThresholdBetweenDuplicatesScans", [
    thresholdBetweenDuplicatesScans,
  ]);
};

/**
 * Sets whether the deblurring feature for UPC/EAN barcodes is enabled
 * @param {*} enabled - Set to true to enable UPC/EAN deblur, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setUpcEanDeblurEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setUpcEanDeblurEnabled", [enabled]);
};

/**
 * Sets whether the detection of misshaped 1D barcodes is enabled
 * @param {*} enabled - Set to true to enable detection of misshaped 1D barcodes, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMisshaped1DEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setMisshaped1DEnabled", [enabled]);
};

/**
 * Sets whether Vehicle Identification Number (VIN) restrictions are enabled
 * @param {*} enableVINRestrictions - Set to true to enable VIN restrictions, false to disable them
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setEnableVINRestrictions = function (
  enableVINRestrictions,
  success,
  error
) {
  exec(success, error, barkoderScanner, "setEnableVINRestrictions", [
    enableVINRestrictions,
  ]);
};

/**
 * Sets whether the Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled.
 * @param {*} enabled - Set to true to enable Data Matrix DPM mode, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setDatamatrixDpmModeEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setDatamatrixDpmModeEnabled", [
    enabled,
  ]);
};

/**
 * Sets whether the Direct Part Marking (DPM) mode for QR barcodes is enabled.
 * @param {*} enabled - Set to true to enable Data Matrix DPM mode, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setQrDpmModeEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setQrDpmModeEnabled", [
    enabled,
  ]);
};

/**
 * Sets whether the Direct Part Marking (DPM) mode for QR Micro barcodes is enabled.
 * @param {*} enabled - Set to true to enable Data Matrix DPM mode, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setQrMicroDpmModeEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setQrMicroDpmModeEnabled", [
    enabled,
  ]);
};

/**
 * Sets whether the QR multi-part merge is enabled.
 * @param {*} enabled - Set to true to enable QR multi-part merge, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setQrMultiPartMergeEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setQrMultiPartMergeEnabled", [
    enabled,
  ]);
};

/**
 * Defines the string match filter applied to decoded results.
 * Results expose their match status through `isMatched`.
 * @param {*} value - The match filter string to set
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setMatchFilter = function (value, success, error) {
  exec(success, error, barkoderScanner, "setMatchFilter", [value]);
};

/**
 * Controls whether only results matching `matchFilter` are returned.
 * If `false`, all decoded results are returned, including unmatched results.
 * This option only applies when a match filter is active.
 * @param {*} enabled - Set to true to return only matched results, false to return all
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setReturnOnlyMatchedResults = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setReturnOnlyMatchedResults", [enabled]);
};

/**
 * Configures the Barkoder functionality based on the provided configuration
 * @param {*} barkoderConfig - The configuration object for Barkoder scanner
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.configureBarkoder = function (barkoderConfig, success, error) {
  exec(success, error, barkoderScanner, "configureBarkoder", [barkoderConfig]);
};

/**
 * Sets whether Master checksum should be requiered when scanning ID Documents.
 * @param {*} enabled - Set to true to enable Master checksum, false to disable it
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setIdDocumentMasterChecksumEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setIdDocumentMasterChecksumEnabled", [
    enabled,
  ]);
};

/**
 * Sets whether the UPC-E barcodes should be expanded to UPC-A format.
 * @param {*} enabled - A boolean indicating whether to enable the expansion for UPC-E barcodes.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setUPCEexpandToUPCA = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setUPCEexpandToUPCA", [enabled]);
};

/**
 * Sets whether the UPC-E1 barcodes should be expanded to UPC-A format.
 * @param {*} enabled - A boolean indicating whether to enable the expansion for UPC-E1 barcodes.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setUPCE1expandToUPCA = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setUPCE1expandToUPCA", [enabled]);
};

/**
 * Sets the color of the lines outlining the scanning indicator for barcode scanning on the camera feed.
 * @param {*} hexColor - The hexadecimal representation of the color.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setScanningIndicatorColor = function (hexColor, success, error) {
  exec(success, error, barkoderScanner, "setScanningIndicatorColor", [hexColor]);
};

/**
 * Sets the width of the scanning indicator for barcode scanning on the camera feed.
 * @param {*} lineWidth - The width of the scanning indicator to set.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setScanningIndicatorWidth = function (lineWidth, success, error) {
  exec(success, error, barkoderScanner, "setScanningIndicatorWidth", [lineWidth]);
};

/**
 * Sets the animation of the scanning indicator for barcode scanning on the camera feed.
 * @param {*} animation - The animation of the scanning indicator to set.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setScanningIndicatorAnimation = function (animation, success, error) {
  exec(success, error, barkoderScanner, "setScanningIndicatorAnimation", [animation]);
};

/**
 * Sets the scanning indicator to be always shown on the camera feed.
 * @param {*} value - A boolean indicating whether the scanning indicator should always remain visible.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setScanningIndicatorAlwaysVisible = function (value, success, error) {
  exec(success, error, barkoderScanner, "setScanningIndicatorAlwaysVisible", [value]);
};

/**
 * Sets a custom option.
 * @param {*} option - The string value for the custom option.
 * @param {*} value - The integer value for the custom option.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCustomOption = function (option, value, success, error) {
  exec(success, error, barkoderScanner, "setCustomOption", [option, value]);
};

/**
 * Sets a custom option globally (must be called before createBarkoderConfig()).
 * @param {*} option - The integer value for the custom option.
 * @param {*} value - The integer value for the custom option.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCustomOptionGlobal = function (option, value, success, error) {
  exec(success, error, barkoderScanner, "setCustomOptionGlobal", [option, value]);
};

/**
 * Sets the camera's exposure dynamically based on the provided intensity, cycling through predefined compensation values.
 * @param {*} intesnity - The integer value for the exposure intensity.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setDynamicExposure = function (intesnity, success, error) {
  exec(success, error, barkoderScanner, "setDynamicExposure", [intesnity]);
};

/**
 * Sets the camera to use the center of the viewfinder for focus and exposure.
 * @param {*} value - A boolean indicating whether the center of the viewfinder should be used.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCentricFocusAndExposure = function (value, success, error) {
  exec(success, error, barkoderScanner, "setCentricFocusAndExposure", [value]);
};

/**
 * Sets wheter Composite Mode should be enabled when scanning.
 * @param {*} value - The integer value if composite mode should be enabled.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setEnableComposite = function (value, success, error) {
  exec(success, error, barkoderScanner, "setEnableComposite", [value]);
};

/**
 * Enable or disable video stabilization for smoother video capture.
 * @param {*} value - A boolean indicating whether video stabilization should be enabled/disabled.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setVideoStabilization = function (value, success, error) {
  exec(success, error, barkoderScanner, "setVideoStabilization", [value]);
};

/**
 * Sets the camera to be used for scanning (back/front).
 * @param {*} value - The value which camera should be used.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setCamera = function (value, success, error) {
  exec(success, error, barkoderScanner, "setCamera", [value]);
};

/**
 * Enables or disables showing duplicate barcode locations on the preview overlay.
 * @param {*} value - A boolean indicating whether to show duplicate locations.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setShowDuplicatesLocations = function (value, success, error) {
  exec(success, error, barkoderScanner, "setShowDuplicatesLocations", [value]);
};

/**
 * Sets the AR mode used for barcode scanning visualization.
 * @param {*} value - The AR mode (e.g., interactive, non-interactive, off)
 * @param {*} success
 * @param {*} error
 */
exports.setARMode = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARMode", [value]);
};

/**
 * Sets the delay after which a detected AR result is considered expired.
 * @param {*} value - Delay in milliseconds.
 * @param {*} success
 * @param {*} error
 */
exports.setARResultDisappearanceDelayMs = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARResultDisappearanceDelayMs", [value]);
};

/**
 * Sets the speed of overlay transition for AR barcode locations.
 * @param {*} value - Transition speed value.
 * @param {*} success
 * @param {*} error
 */
exports.setARLocationTransitionSpeed = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARLocationTransitionSpeed", [value]);
};

/**
 * Sets the refresh mode for the AR overlay.
 * @param {*} value - Refresh mode value.
 * @param {*} success
 * @param {*} error
 */
exports.setAROverlayRefresh = function (value, success, error) {
  exec(success, error, barkoderScanner, "setAROverlayRefresh", [value]);
};

/**
 * Sets the overlay color for selected barcodes in AR mode.
 * @param {*} value - Hex color code.
 * @param {*} success
 * @param {*} error
 */
exports.setARSelectedLocationColor = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARSelectedLocationColor", [value]);
};

/**
 * Sets the overlay color for non-selected barcodes in AR mode.
 * @param {*} value - Hex color code.
 * @param {*} success
 * @param {*} error
 */
exports.setARNonSelectedLocationColor = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARNonSelectedLocationColor", [value]);
};

/**
 * Sets line width for selected barcode overlay.
 * @param {*} value - Width in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARSelectedLocationLineWidth = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARSelectedLocationLineWidth", [value]);
};

/**
 * Sets line width for non-selected barcode overlay.
 * @param {*} value - Width in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARNonSelectedLocationLineWidth = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARNonSelectedLocationLineWidth", [value]);
};

/**
 * Sets AR location style (tight, bounding box, none).
 * @param {*} value - Location type.
 * @param {*} success
 * @param {*} error
 */
exports.setARLocationType = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARLocationType", [value]);
};

/**
 * Enables or disables double-tap to freeze scanning in AR mode.
 * @param {*} enabled - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARDoubleTapToFreezeEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setARDoubleTapToFreezeEnabled", [enabled]);
};

/**
 * Enables or disables the capturing and processing of image data when a barcode is selected for AR mode.
 * @param {*} enabled - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARImageResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setARImageResultEnabled", [enabled]);
};

/**
 * Enables or disables the barcode thumbnail on result for AR mode.
 * @param {*} enabled - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARBarcodeThumbnailOnResultEnabled = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setARBarcodeThumbnailOnResultEnabled", [enabled]);
};

/**
 * Sets the maximum number of results allowed in a single AR scanning session.
 * @param {*} value - Maximum results limit.
 * @param {*} success
 * @param {*} error
 */
exports.setARResultLimit = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARResultLimit", [value]);
};

/**
 * Sets whether scanning continues when the result limit is reached (only in `.interactiveDisabled` mode).
 * @param {*} value - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARContinueScanningOnLimit = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARContinueScanningOnLimit", [value]);
};

/**
 * Sets whether results are emitted only at AR session end (or when the limit is reached).
 * @param {*} value - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setAREmitResultsAtSessionEndOnly = function (value, success, error) {
  exec(success, error, barkoderScanner, "setAREmitResultsAtSessionEndOnly", [value]);
};

/**
 * Sets height of header label above barcode in AR mode.
 * @param {*} value - Height in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderHeight = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderHeight", [value]);
};

/**
 * Sets header visibility condition (always, on selected, never).
 * @param {*} value - Show mode.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderShowMode = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderShowMode", [value]);
};

/**
 * Sets max text height for AR header.
 * @param {*} value - Max height in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderMaxTextHeight = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderMaxTextHeight", [value]);
};

/**
 * Sets min text height for AR header.
 * @param {*} value - Min height in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderMinTextHeight = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderMinTextHeight", [value]);
};

/**
 * Sets text color for selected barcode header.
 * @param {*} value - Hex color code.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderTextColorSelected = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderTextColorSelected", [value]);
};

/**
 * Sets text color for non-selected barcode header.
 * @param {*} value - Hex color code.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderTextColorNonSelected = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderTextColorNonSelected", [value]);
};

/**
 * Sets the horizontal margin applied to the header text in AR mode, creating equal padding on both sides.
 * @param {*} value - Margin in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderHorizontalTextMargin = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderHorizontalTextMargin", [value]);
};

/**
 * Sets the vertical margin applied to the header text in AR mode, creating equal padding on both sides.
 * @param {*} value - Margin in pixels.
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderVerticalTextMargin = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderVerticalTextMargin", [value]);
};

/**
 * Sets AR header text format using placeholders.
 * @param {*} value - Format string (e.g. [barcode_text]).
 * @param {*} success
 * @param {*} error
 */
exports.setARHeaderTextFormat = function (value, success, error) {
  exec(success, error, barkoderScanner, "setARHeaderTextFormat", [value]);
};

/**
 * When AR mode is `matchFilter`, controls whether only matched results are returned.
 * If `false`, all detected results are returned, while unmatched results remain marked through `isMatched`.
 * This option only applies when `arMode == matchFilter` and a match filter is active.
 * @param {*} enabled - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARReturnOnlyMatchedResults = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setARReturnOnlyMatchedResults", [enabled]);
};

/**
 * When AR mode is `matchFilter`, controls whether only matched results are displayed.
 * If `false`, all decoded results are displayed, including unmatched results.
 * This option only applies when `arMode == matchFilter` and a match filter is active.
 * @param {*} enabled - Boolean toggle.
 * @param {*} success
 * @param {*} error
 */
exports.setARDisplayOnlyMatchedResults = function (enabled, success, error) {
  exec(success, error, barkoderScanner, "setARDisplayOnlyMatchedResults", [enabled]);
};

/**
 * Configures the close button
 * @param {*} visible - Show the button while scanning.
 * @param {*} positionX - X position in points.
 * @param {*} positionY - Y position in points.
 * @param {*} iconSize - Glyph point size.
 * @param {*} tintColor - Icon tint. Hex string (e.g., "#3472c9"). (leave it as "" to use default)
 * @param {*} backgroundColor - Button background. Hex string. Default: clear. (leave it as "" to use the default)
 * @param {*} cornerRadius - Corner radius.
 * @param {*} padding - Inner padding around the glyph.
 * @param {*} useCustomIcon - Set true to use a provided custom icon.
 * @param {*} customIcon - Custom icon for the button as a Base64-encoded image string.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.configureCloseButton = function (visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIcon, success, error) {
  exec(success, error, barkoderScanner, "configureCloseButton", [visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIcon]);
};

/**
 Configures the flash (torch) button. Auto-hides if torch is unavailable.
 * @param {*} visible - Show the button while scanning.
 * @param {*} positionX - X position in points.
 * @param {*} positionY - Y position in points.
 * @param {*} iconSize - Glyph point size.
 * @param {*} tintColor - Icon tint. Hex string (e.g., "#3472c9"). (leave it as "" to use default)
 * @param {*} backgroundColor - Button background. Hex string. Default: clear. (leave it as "" to use the default)
 * @param {*} cornerRadius - Corner radius.
 * @param {*} padding - Inner padding around the glyph.
 * @param {*} useCustomIcon - Set true to use provided custom icons.
 * @param {*} customIconFlashOn - Custom icon for the ON state as a Base64-encoded image string.
 * @param {*} customIconFlashOff - Custom icon for the OFF state as a Base64-encoded image string.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.configureFlashButton = function (visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIconFlashOn, customIconFlashOff, success, error) {
  exec(success, error, barkoderScanner, "configureFlashButton", [visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIconFlashOn, customIconFlashOff]);
};

/**
 * Configures the zoom button
 * @param {*} visible - Show the button while scanning.
 * @param {*} positionX - X position in points.
 * @param {*} positionY - Y position in points.
 * @param {*} iconSize - Glyph point size.
 * @param {*} tintColor - Icon tint. Hex string (e.g., "#3472c9"). (leave it as "" to use default)
 * @param {*} backgroundColor - Button background. Hex string. Default: clear. (leave it as "" to use the default)
 * @param {*} cornerRadius - Corner radius.
 * @param {*} padding - Inner padding around the glyph.
 * @param {*} useCustomIcon - Set true to use provided custom icons.
 * @param {*} customIconZoomedIn - Custom icon for the zoomed-in state as a Base64-encoded image string.
 * @param {*} customIconZoomedOut - Custom icon for the zoomed-out state as a Base64-encoded image string.
 * @param {*} zoomedInFactor - Zoom factor when toggled in.
 * @param {*} zoomedOutFactor - Zoom factor when toggled out.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.configureZoomButton = function (visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIconZoomedIn, customIconZoomedOut, zoomedInFactor, zoomedOutFactor, success, error) {
  exec(success, error, barkoderScanner, "configureZoomButton", [visible, positionX, positionY, iconSize, tintColor, backgroundColor, cornerRadius, padding, useCustomIcon, customIconZoomedIn, customIconZoomedOut, zoomedInFactor, zoomedOutFactor]);
};

/**
 * Selects all barcodes that are currently visible in AR mode.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.selectVisibleBarcodes = function (success, error) {
  exec(success, error, barkoderScanner, "selectVisibleBarcodes", []);
};

/**
 * Clears the current AR result cache and removes all rendered AR barcode overlays without stopping the camera, ending the scanning session, or emitting results.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.resetARCache = function (success, error) {
  exec(success, error, barkoderScanner, "resetARCache", []);
};

/**
 * Power saving mode level. Higher values reduce CPU/battery usage by limiting frame processing. 0 = disabled (no constraints).
 * @param {*} powerSavingMode - The power saving mode level to set.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setPowerSavingMode = function (powerSavingMode, success, error) {
  exec(success, error, barkoderScanner, "setPowerSavingMode", [powerSavingMode]);
};

// - Getters

/**
 * Checks whether the device has a built-in flash (torch) that can be used for illumination during barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isFlashAvailable = function (success, error) {
  exec(success, error, barkoderScanner, "isFlashAvailable", []);
};

/**
 * Retrieves whether the front camera preview is horizontally mirrored.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isPreviewMirrored = function (success, error) {
  exec(success, error, barkoderScanner, "isPreviewMirrored", []);
};

exports.isCloseSessionOnResultEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isCloseSessionOnResultEnabled", []);
};

/**
 * Enables or disables the capturing and processing of image data when a barcode is successfully detected
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isImageResultEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isImageResultEnabled", []);
};

exports.isLocationInImageResultEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isLocationInImageResultEnabled", []);
};

/**
 * Checks if location in preview is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isLocationInPreviewEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isLocationInPreviewEnabled", []);
};

/**
 * Checks if pinch to zoom is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isPinchToZoomEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isPinchToZoomEnabled", []);
};

/**
 * Checks if the region of interest (ROI) is visible
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isRegionOfInterestVisible = function (success, error) {
  exec(success, error, barkoderScanner, "isRegionOfInterestVisible", []);
};

/**
 * Retrieves the value indicating whether a beep sound is played on successful barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isBeepOnSuccessEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isBeepOnSuccessEnabled", []);
};

/**
 * Retrieves the value indicating whether vibration is enabled on successful barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isVibrateOnSuccessEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isVibrateOnSuccessEnabled", []);
};

/**
 * Retrieves the version of the Barkoder SDK
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getVersion = function (success, error) {
  exec(success, error, barkoderScanner, "getVersion", []);
};

/**
 * Retrieves the version of the Barkoder library
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getLibVersion = function (success, error) {
  exec(success, error, barkoderScanner, "getLibVersion", []);
};

/**
 * Retrieves the hexadecimal color code representing the line color used to indicate the location of detected barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getLocationLineColorHex = function (success, error) {
  exec(success, error, barkoderScanner, "getLocationLineColorHex", []);
};

/**
 * Retrieves the hexadecimal color code representing the line color of the Region of Interest (ROI) on the camera preview
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getRoiLineColorHex = function (success, error) {
  exec(success, error, barkoderScanner, "getRoiLineColorHex", []);
};

/**
 * Retrieves the hexadecimal color code representing the background color of the overlay within the Region of Interest (ROI) on the camera preview
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getRoiOverlayBackgroundColorHex = function (success, error) {
  exec(success, error, barkoderScanner, "getRoiOverlayBackgroundColorHex", []);
};

/**
 * Retrieves the maximum available zoom factor for the device's camera
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMaxZoomFactor = function (success, error) {
  exec(success, error, barkoderScanner, "getMaxZoomFactor", []);
};

/**
 * Retrieves the current zoom factor for the device's camera
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getCurrentZoomFactor = function (success, error) {
  exec(success, error, barkoderScanner, "getCurrentZoomFactor", []);
};

/**
 * Retrieves the current width setting for the lines indicating the location of detected barcodes on the camera feed
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getLocationLineWidth = function (success, error) {
  exec(success, error, barkoderScanner, "getLocationLineWidth", []);
};

/**
 * Retrieves the current width setting for the lines outlining the Region of Interest (ROI) on the camera preview
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getRoiLineWidth = function (success, error) {
  exec(success, error, barkoderScanner, "getRoiLineWidth", []);
};

/**
 * Retrieves the region of interest (ROI)
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getRegionOfInterest = function (success, error) {
  exec(success, error, barkoderScanner, "getRegionOfInterest", []);
};

/**
 * Retrieves the length range of a specific barcode type
 * @param {*} type - The barcode type to check
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getBarcodeTypeLengthRange = function (type, success, error) {
  exec(success, error, barkoderScanner, "getBarcodeTypeLengthRange", [type]);
};

/**
 * Retrieves the MSI checksum type
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMsiChecksumType = function (success, error) {
  exec(success, error, barkoderScanner, "getMsiChecksumType", []);
};

/**
 * Retrieves the checksum type for Code 39 barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getCode39ChecksumType = function (success, error) {
  exec(success, error, barkoderScanner, "getCode39ChecksumType", []);
};

/**
 * Retrieves the Code11 checksum type
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getCode11ChecksumType = function (success, error) {
  exec(success, error, barkoderScanner, "getCode11ChecksumType", []);
};

/**
 * Retrieves the character set used for encoding barcode data
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getEncodingCharacterSet = function (success, error) {
  exec(success, error, barkoderScanner, "getEncodingCharacterSet", []);
};

/**
 * Retrieves the current decoding speed setting for barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getDecodingSpeed = function (success, error) {
  exec(success, error, barkoderScanner, "getDecodingSpeed", []);
};

/**
 * Retrieves the formatting type used for presenting decoded barcode data.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getFormattingType = function (success, error) {
  exec(success, error, barkoderScanner, "getFormattingType", []);
};

/**
 * Retrieves the threads limit
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getThreadsLimit = function (success, error) {
  exec(success, error, barkoderScanner, "getThreadsLimit", []);
};

/**
 * Retrieves the maximum number of results to be returned from barcode scanning at once
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMaximumResultsCount = function (success, error) {
  exec(success, error, barkoderScanner, "getMaximumResultsCount", []);
};

/**
 * Checks if a specific barcode type is enabled
 * @param {*} type - The barcode type to check
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isBarcodeTypeEnabled = function (type, success, error) {
  exec(success, error, barkoderScanner, "isBarcodeTypeEnabled", [type]);
};

/**
 * Retrieves whether multi-code caching is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMulticodeCachingEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "getMulticodeCachingEnabled", []);
};

/**
 * Retrieves the caching duration (in milliseconds) for multi-code results
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMulticodeCachingDuration = function (success, error) {
  exec(success, error, barkoderScanner, "getMulticodeCachingDuration", []);
};

/**
 * Retrieves the value indicating whether deblurring is enabled for UPC/EAN barcodes
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isUpcEanDeblurEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isUpcEanDeblurEnabled", []);
};

/**
 * Checks if the detection of misshaped 1D barcodes is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isMisshaped1DEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isMisshaped1DEnabled", []);
};

/**
 * Checks if the barcode thumbnail on result is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isBarcodeThumbnailOnResultEnabled = function (success, error) {
  exec(
    success,
    error,
    barkoderScanner,
    "isBarcodeThumbnailOnResultEnabled",
    []
  );
};

/**
 * Retrieves the threshold between duplicate scans
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getThresholdBetweenDuplicatesScans = function (success, error) {
  exec(
    success,
    error,
    barkoderScanner,
    "getThresholdBetweenDuplicatesScans",
    []
  );
};

/**
 * Checks if VIN restrictions are enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isVINRestrictionsEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isVINRestrictionsEnabled", []);
};

/**
 * Retrieves the string match filter applied to decoded results.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getMatchFilter = function (success, error) {
  exec(success, error, barkoderScanner, "getMatchFilter", []);
};

/**
 * Retrieves whether only results matching `matchFilter` are returned.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getReturnOnlyMatchedResults = function (success, error) {
  exec(success, error, barkoderScanner, "getReturnOnlyMatchedResults", []);
};

/**
 * Retrieves the resolution for barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getBarkoderResolution = function (success, error) {
  exec(success, error, barkoderScanner, "getBarkoderResolution", []);
};

/**
 * Retrieves the style of the visual marker drawn at the center of the Region of Interest (ROI).
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getRoiCenterMark = function (success, error) {
  exec(success, error, barkoderScanner, "getRoiCenterMark", []);
};

/**
 * Retrieves whether Direct Part Marking (DPM) mode for Datamatrix barcodes is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isDatamatrixDpmModeEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isDatamatrixDpmModeEnabled", []);
};

/**
 * Retrieves whether Direct Part Marking (DPM) mode for QR barcodes is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isQrDpmModeEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isQrDpmModeEnabled", []);
};

/**
 * Retrieves whether Direct Part Marking (DPM) mode for QR Micro barcodes is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isQrMicroDpmModeEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isQrMicroDpmModeEnabled", []);
};

/**
 * Retrieves whether QR multi-part merge is enabled
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isQrMultiPartMergeEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isQrMultiPartMergeEnabled", []);
};

/**
 * Retrieves whether Master checksum is enabled when scanning ID Documents
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isIdDocumentMasterChecksumEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isIdDocumentMasterChecksumEnabled", []);
};

/**
 * Retrieves the hexadecimal color code representing the line color of the scanning indicator on the camera preview.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getScanningIndicatorColorHex = function (success, error) {
  exec(success, error, barkoderScanner, "getScanningIndicatorColorHex", []);
};

/**
 * Retrieves the current width setting for the scanning indicator on the camera preview.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getScanningIndicatorWidth = function (success, error) {
  exec(success, error, barkoderScanner, "getScanningIndicatorWidth", []);
};

/**
 * Retrieves the current animation setting for the scanning indicator on the camera preview.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getScanningIndicatorAnimation = function (success, error) {
  exec(success, error, barkoderScanner, "getScanningIndicatorAnimation", []);
};

/**
 * Retrieves whether the scanning indicator is always visible on the camera preview.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isScanningIndicatorAlwaysVisible = function (success, error) {
  exec(success, error, barkoderScanner, "isScanningIndicatorAlwaysVisible", []);
};

/**
 * Retrieves whether showing duplicate barcode locations in the AR view is enabled.
 * @param {*} success
 * @param {*} error
 */
exports.getShowDuplicatesLocations = function (success, error) {
  exec(success, error, barkoderScanner, "getShowDuplicatesLocations", []);
};

/**
 *  Retrieves the current AR mode used for barcode scanning.
 * @param {*} success
 * @param {*} error
 */
exports.getARMode = function (success, error) {
  exec(success, error, barkoderScanner, "getARMode", []);
};

/**
 * Retrieves the delay after which AR results disappear once detected.
 * @param {*} success
 * @param {*} error
 */
exports.getARResultDisappearanceDelayMs = function (success, error) {
  exec(success, error, barkoderScanner, "getARResultDisappearanceDelayMs", []);
};

/**
 * Retrieves the transition speed for AR barcode location overlays.
 * @param {*} success
 * @param {*} error
 */
exports.getARLocationTransitionSpeed = function (success, error) {
  exec(success, error, barkoderScanner, "getARLocationTransitionSpeed", []);
};

/**
 * Retrieves the AR overlay refresh mode.
 * @param {*} success
 * @param {*} error
 */
exports.getAROverlayRefresh = function (success, error) {
  exec(success, error, barkoderScanner, "getAROverlayRefresh", []);
};

/**
 * Retrieves the color used for selected barcode overlays in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARSelectedLocationColor = function (success, error) {
  exec(success, error, barkoderScanner, "getARSelectedLocationColor", []);
};

/**
 * Retrieves the color used for non-selected barcode overlays in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARNonSelectedLocationColor = function (success, error) {
  exec(success, error, barkoderScanner, "getARNonSelectedLocationColor", []);
};

/**
 * Retrieves the line width for selected barcode overlays in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARSelectedLocationLineWidth = function (success, error) {
  exec(success, error, barkoderScanner, "getARSelectedLocationLineWidth", []);
};

/**
 * Retrieves the line width for non-selected barcode overlays in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARNonSelectedLocationLineWidth = function (success, error) {
  exec(success, error, barkoderScanner, "getARNonSelectedLocationLineWidth", []);
};

/**
 * Retrieves the style of AR location overlays (tight, bounding box, none).
 * @param {*} success
 * @param {*} error
 */
exports.getARLocationType = function (success, error) {
  exec(success, error, barkoderScanner, "getARLocationType", []);
};

/**
 * Checks whether double-tap to freeze is enabled in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.isARDoubleTapToFreezeEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isARDoubleTapToFreezeEnabled", []);
};

/**
 * Retrieves whether image result is enabled for AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.isARImageResultEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isARImageResultEnabled", []);
};

/**
 * Retrieves whether barcode thumbnail on result is enabled for AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.isARBarcodeThumbnailOnResultEnabled = function (success, error) {
  exec(success, error, barkoderScanner, "isARBarcodeThumbnailOnResultEnabled", []);
};

/**
 * Retrieves the maximum number of results allowed in a single AR scanning session.
 * @param {*} success
 * @param {*} error
 */
exports.getARResultLimit = function (success, error) {
  exec(success, error, barkoderScanner, "getARResultLimit", []);
};

/**
 * Retrieves whether scanning continues when the result limit is reached (only in `.interactiveDisabled` mode).
 * @param {*} success
 * @param {*} error
 */
exports.getARContinueScanningOnLimit = function (success, error) {
  exec(success, error, barkoderScanner, "getARContinueScanningOnLimit", []);
};

/**
 * Retrieves whether results are emitted only at AR session end (or when the limit is reached).
 * @param {*} success
 * @param {*} error
 */
exports.getAREmitResultsAtSessionEndOnly = function (success, error) {
  exec(success, error, barkoderScanner, "getAREmitResultsAtSessionEndOnly", []);
};

/**
 * Retrieves the header height above barcode in AR mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderHeight = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderHeight", []);
};

/**
 * Retrieves the header display mode (always, on selected, never).
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderShowMode = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderShowMode", []);
};

/**
 * Retrieves the maximum text height for AR headers.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderMaxTextHeight = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderMaxTextHeight", []);
};

/**
 * Retrieves the minimum text height for AR headers.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderMinTextHeight = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderMinTextHeight", []);
};

/**
 * Retrieves the header text color for selected barcodes.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderTextColorSelected = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderTextColorSelected", []);
};

/**
 * Retrieves the header text color for non-selected barcodes.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderTextColorNonSelected = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderTextColorNonSelected", []);
};

/**
 * Retrieves the horizontal margin for AR header text.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderHorizontalTextMargin = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderHorizontalTextMargin", []);
};

/**
 * Retrieves the vertical margin for AR header text.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderVerticalTextMargin = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderVerticalTextMargin", []);
};

/**
 * Retrieves the format string used for AR header text.
 * @param {*} success
 * @param {*} error
 */
exports.getARHeaderTextFormat = function (success, error) {
  exec(success, error, barkoderScanner, "getARHeaderTextFormat", []);
};

/**
 * Retrieves whether only matched results are returned in AR match filter mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARReturnOnlyMatchedResults = function (success, error) {
  exec(success, error, barkoderScanner, "getARReturnOnlyMatchedResults", []);
};

/**
 * Retrieves whether only matched results are displayed in AR match filter mode.
 * @param {*} success
 * @param {*} error
 */
exports.getARDisplayOnlyMatchedResults = function (success, error) {
  exec(success, error, barkoderScanner, "getARDisplayOnlyMatchedResults", []);
};

/**
 * Retrieves the power saving mode level.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getPowerSavingMode = function (success, error) {
  exec(success, error, barkoderScanner, "getPowerSavingMode", []);
};

/**
 * Retrieves the Device ID.
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getDeviceId = function (success, error) {
  exec(success, error, barkoderScanner, "getDeviceId", []);
};