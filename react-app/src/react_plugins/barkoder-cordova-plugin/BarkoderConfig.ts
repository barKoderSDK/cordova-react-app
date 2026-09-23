export enum DecodingSpeed {
  fast,
  normal,
  slow,
  rigorous
}

export enum FormattingType {
  disabled,
  automatic,
  gs1,
  aamva,
  sadl,
  bcbp
}

export enum MsiChecksumType {
  disabled,
  mod10,
  mod11,
  mod1010,
  mod1110,
  mod11IBM,
  mod1110IBM
}

export enum Code39ChecksumType {
  disabled,
  enabled
}

export enum Code11ChecksumType {
  disabled,
  single,
  double
}

export enum BarkoderCameraPosition {
  BACK,
  FRONT,
}

export enum BarkoderResolution {
  HD,
  FHD,
  UHD,
}

export enum BarkoderRoiCenterMark {
  none,
  crosshair,
  point,
}

export enum BarcodeType {
  aztec,
  aztecCompact,
  qr,
  qrMicro,
  code128,
  code93,
  code39,
  codabar,
  code11,
  msi,
  upcA,
  upcE,
  upcE1,
  ean13,
  ean8,
  pdf417,
  pdf417Micro,
  datamatrix,
  code25,
  interleaved25,
  itf14,
  iata25,
  matrix25,
  datalogic25,
  coop25,
  code32,
  telepen,
  dotcode,
  idDocument,
  databar14,         
  databarLimited,
  databarExpanded,
  postalIMB,
  postnet,
  planet,
  australianPost,
  royalMail,
  kix,
  japanesePost,
  maxiCode,
  ocrText
}

export enum BarkoderARMode {
  off,
  interactiveDisabled,
  interactiveEnabled,
  nonInteractive,
  matchFilter
}
  
export enum BarkoderAROverlayRefresh {
  smooth,
  normal
}
  
export enum BarkoderARLocationType {
  none,
  tight,
  boundingBox
}
  
export enum BarkoderARHeaderShowMode {
  never,
  always,
  onSelected
}

export class BarkoderConfig {
  locationLineColor?: string;
  locationLineWidth?: number;
  roiLineColor?: string;
  roiLineWidth?: number;
  roiOverlayBackgroundColor?: string;
  scanningIndicatorColor?: string;
  scanningIndicatorWidth?: number;
  scanningIndicatorAnimation?: number;
  scanningIndicatorAlwaysVisible?: boolean;
  closeSessionOnResultEnabled?: boolean;
  imageResultEnabled?: boolean;
  barcodeThumbnailOnResult?: boolean;
  locationInImageResultEnabled?: boolean;
  locationInPreviewEnabled?: boolean;
  pinchToZoomEnabled?: boolean;
  regionOfInterestVisible?: boolean;
  barkoderResolution?: BarkoderResolution;
  roiCenterMark?: BarkoderRoiCenterMark;
  powerSavingMode?: number;
  beepOnSuccessEnabled?: boolean;
  vibrateOnSuccessEnabled?: boolean;
  decoder?: DekoderConfig;
  arConfig?: BarkoderARConfig;

  constructor(config: Partial<BarkoderConfig>) {
    Object.assign(this, config);
  }

}

export class DekoderConfig {
  aztec?: BarcodeConfig;
  aztecCompact?: BarcodeConfig;
  qr?: QRBarcodeConfig;
  qrMicro?: BarcodeConfigWithDpmMode;
  code128?: BarcodeConfigWithLength;
  code93?: BarcodeConfigWithLength;
  code39?: Code39BarcodeConfig;
  codabar?: BarcodeConfigWithLength;
  code11?: Code11BarcodeConfig;
  msi?: MSIBarcodeConfig;
  upcA?: BarcodeConfig;
  upcE?: BarcodeConfig;
  upcE1?: BarcodeConfig;
  ean13?: BarcodeConfig;
  ean8?: BarcodeConfig;
  pdf417?: BarcodeConfig;
  pdf417Micro?: BarcodeConfig;
  datamatrix?: BarcodeConfigWithDpmMode;
  code25?: BarcodeConfig;
  interleaved25?: BarcodeConfig;
  itf14?: BarcodeConfig;
  iata25?: BarcodeConfig;
  matrix25?: BarcodeConfig;
  datalogic25?: BarcodeConfig;
  coop25?: BarcodeConfig;
  code32?: BarcodeConfig;
  telepen?: BarcodeConfig;
  dotcode?: BarcodeConfig;
  idDocument?: IdDocumentBarcodeConfig;
  databar14?: BarcodeConfig;         
  databarLimited?: BarcodeConfig;
  databarExpanded?: BarcodeConfig;
  postalIMB?: BarcodeConfig;
  postnet?: BarcodeConfig;
  planet?: BarcodeConfig;
  australianPost?: BarcodeConfig;
  royalMail?: BarcodeConfig;
  kix?: BarcodeConfig;
  japanesePost?: BarcodeConfig;
  maxiCode?: BarcodeConfig;
  ocrText?: BarcodeConfig;
  general?: GeneralSettings;

  constructor(config: Partial<DekoderConfig>) {
    Object.assign(this, config);
  }
}

export class BarkoderARConfig {
  arMode?: BarkoderARMode;
  resultDisappearanceDelayMs?: number;
  locationTransitionSpeed?: number;
  overlayRefresh?: BarkoderAROverlayRefresh;
  selectedLocationColor?: string;
  nonSelectedLocationColor?: string;
  selectedLocationLineWidth?: number;
  nonSelectedLocationLineWidth?: number;
  locationType?: BarkoderARLocationType;
  doubleTapToFreezeEnabled?: boolean;
  imageResultEnabled?: boolean;
  barcodeThumbnailOnResult?: boolean;
  resultLimit?: number;
  continueScanningOnLimit?: boolean;
  emitResultsAtSessionEndOnly?: boolean;
  headerHeight?: number;
  headerShowMode?: BarkoderARHeaderShowMode;
  headerMaxTextHeight?: number;
  headerMinTextHeight?: number;
  headerTextColorSelected?: string;
  headerTextColorNonSelected?: string;
  headerHorizontalTextMargin?: number;
  headerVerticalTextMargin?: number;
  headerTextFormat?: string;
  returnOnlyMatchedResults?: boolean;
  displayOnlyMatchedResults?: boolean;
  
  constructor(config: Partial<BarkoderARConfig>) {
    Object.assign(this, config);
  }
}

export class BarcodeConfig {
  enabled?: boolean;

  constructor(config: Partial<BarcodeConfig>) {
    Object.assign(this, config);
  }
}

export class BarcodeConfigWithLength {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<BarcodeConfigWithLength>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class MSIBarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: MsiChecksumType;

  constructor(config: Partial<MSIBarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class Code39BarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: Code39ChecksumType;

  constructor(config: Partial<Code39BarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class Code11BarcodeConfig {
  enabled?: boolean;
  minLength?: number;
  maxLength?: number;
  checksum?: Code11ChecksumType;

  constructor(config: Partial<Code11BarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class BarcodeConfigWithDpmMode {
  enabled?: boolean;
  dpmMode?: number;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<BarcodeConfigWithDpmMode>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export class QRBarcodeConfig {
  enabled?: boolean;
  dpmMode?: number;
  multiPartMerge?: boolean;
  minLength?: number;
  maxLength?: number;

  constructor(config: Partial<QRBarcodeConfig>) {
    Object.assign(this, config);
  }

  setLengthRange(minLength: number, maxLength: number) {
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export enum IdDocumentMasterChecksumType {
  disabled,
  enabled,
}

export class IdDocumentBarcodeConfig {
  enabled?: boolean;
  masterChecksum?: IdDocumentMasterChecksumType;

  constructor(config: Partial<IdDocumentBarcodeConfig>) {
    Object.assign(this, config);
  }
}

export class GeneralSettings {
  threadsLimit?: number;
  decodingSpeed?: DecodingSpeed;
  roiX?: number;
  roiY?: number;
  roiWidth?: number;
  roiHeight?: number;
  formattingType?: FormattingType;
  encodingCharacterSet?: string;
  maximumResultsCount?: number;
  multicodeCachingDuration?: number;
  multicodeCachingEnabled?: boolean;
  upcEanDeblur?: boolean;
  enableMisshaped1D?: boolean;
  matchFilter?: string;
  returnOnlyMatchedResults?: boolean;

  constructor(config: Partial<GeneralSettings>) {
    Object.assign(this, config);
  }

  setROI(x: number, y: number, width: number, height: number): void {
    this.roiX = x;
    this.roiY = y;
    this.roiWidth = width;
    this.roiHeight = height;
  }

}

export class BarkoderResult {
  decoderResults: DecoderResult[];
  resultThumbnailsAsBase64?: string[] | null;
  resultImageAsBase64?: string | null;

  constructor(resultMap: Record<string, any>) {
    if (Array.isArray(resultMap['decoderResults'])) {
      this.decoderResults = resultMap['decoderResults'].map((result: any) => new DecoderResult(result));
    } else {
      this.decoderResults = [];
    }

    this.resultThumbnailsAsBase64 = Array.isArray(resultMap['resultThumbnailsAsBase64'])
      ? resultMap['resultThumbnailsAsBase64']
        .map(thumbnail => this.convertToBase64(thumbnail))
        .filter((thumbnail): thumbnail is string => thumbnail !== null)
      : null;

    this.resultImageAsBase64 = this.convertToBase64(resultMap['resultImageAsBase64']);
  }

  private convertToBase64(data: string | null | undefined): string | null {
    return data ? `data:image/jpeg;base64,${data}` : null;
  }
}

export class DecoderResult {
  barcodeType: number;
  barcodeTypeName: string;
  binaryDataAsBase64: string;
  textualData: string;
  characterSet?: string | null;
  extra?: Record<string, any> | null;
  mrzImagesAsBase64?: { name: string; base64: string }[];
  sadlImageAsBase64?: string | null;
  locationPoints?: { x: number; y: number }[];
  isMatched: boolean;

  constructor(resultMap: Record<string, any>) {
    this.barcodeType = resultMap["barcodeType"];
    this.barcodeTypeName = resultMap["barcodeTypeName"];
    this.binaryDataAsBase64 = resultMap["binaryDataAsBase64"];
    this.textualData = resultMap["textualData"];
    this.characterSet = resultMap["characterSet"] || null;
    this.extra = "extra" in resultMap ? JSON.parse(resultMap["extra"]) : null;
    this.isMatched = resultMap["isMatched"];
    this.mrzImagesAsBase64 = Array.isArray(resultMap["mrzImagesAsBase64"])
      ? resultMap["mrzImagesAsBase64"].map(
          (image: { name: string; base64: string }) => ({
            name: image.name,
            base64: `data:image/jpeg;base64,${image.base64}`,
          })
        )
      : [];
    this.sadlImageAsBase64 = this.convertToBase64(
      resultMap["sadlImageAsBase64"]
    );
    this.locationPoints = Array.isArray(resultMap["locationPoints"])
      ? resultMap["locationPoints"]
      : undefined;
  }

  private convertToBase64(data: string | null | undefined): string | null {
    return data ? `data:image/jpeg;base64,${data}` : null;
  }
}