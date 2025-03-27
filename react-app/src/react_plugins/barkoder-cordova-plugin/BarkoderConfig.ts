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
  sadl
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
  japanesePost
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
  locationInImageResultEnabled?: boolean;
  locationInPreviewEnabled?: boolean;
  pinchToZoomEnabled?: boolean;
  regionOfInterestVisible?: boolean;
  barkoderResolution?: BarkoderResolution;
  beepOnSuccessEnabled?: boolean;
  vibrateOnSuccessEnabled?: boolean;
  decoder?: DekoderConfig;

  constructor(config: Partial<BarkoderConfig>) {
    Object.assign(this, config);
  }

}

export class DekoderConfig {
  aztec?: BarcodeConfig;
  aztecCompact?: BarcodeConfig;
  qr?: BarcodeConfigWithDpmMode;
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
  general?: GeneralSettings;

  constructor(config: Partial<DekoderConfig>) {
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
  duplicatesDelayMs?: number;
  multicodeCachingDuration?: number;
  multicodeCachingEnabled?: boolean;
  upcEanDeblur?: number;
  enableMisshaped1D?: number;

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

  constructor(resultMap: Record<string, any>) {
    this.barcodeType = resultMap['barcodeType'];
    this.barcodeTypeName = resultMap['barcodeTypeName'];
    this.binaryDataAsBase64 = resultMap['binaryDataAsBase64'];
    this.textualData = resultMap['textualData'];
    this.characterSet = resultMap['characterSet'] || null;
    this.extra = 'extra' in resultMap ? JSON.parse(resultMap['extra']) : null;
    this.mrzImagesAsBase64 = Array.isArray(resultMap['mrzImagesAsBase64'])
      ? resultMap['mrzImagesAsBase64'].map((image: { name: string; base64: string }) => ({
        name: image.name,
        base64: `data:image/jpeg;base64,${image.base64}`,
      }))
      : [];
  }
}