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
 * Sets the delay in milliseconds for considering duplicate barcodes during scanning
 * @param {*} delayMs - The delay in milliseconds between duplicate scans
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.setDuplicatesDelayMs = function (delayMs, success, error) {
  exec(success, error, barkoderScanner, "setDuplicatesDelayMs", [delayMs]);
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

// - Getters

/**
 * Checks whether the device has a built-in flash (torch) that can be used for illumination during barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.isFlashAvailable = function (success, error) {
  exec(success, error, barkoderScanner, "isFlashAvailable", []);
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
 * Retrieves the version of the Barkoder library
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getVersion = function (success, error) {
  exec(success, error, barkoderScanner, "getVersion", []);
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
 * Retrieves the delay in milliseconds for considering duplicate barcodes during scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getDuplicatesDelayMs = function (success, error) {
  exec(success, error, barkoderScanner, "getDuplicatesDelayMs", []);
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
 * Retrieves the resolution for barcode scanning
 * @param {*} success - The callback function to be invoked on successful execution
 * @param {*} error - The callback function to be invoked on execution error
 */
exports.getBarkoderResolution = function (success, error) {
  exec(success, error, barkoderScanner, "getBarkoderResolution", []);
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