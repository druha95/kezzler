// eslint-disable-next-line no-shadow
export enum CodeStatus {
  Invalid = 'INVALID',
  Valid = 'VALID',
  Verified = 'VERIFIED',
}

// eslint-disable-next-line no-shadow
export enum RecallStatus {
  Active = 'ACTIVE',
}

export interface CodeFlag {
  id: number;
  name: string;
}

export interface CodeResponseResultError {
  id: number;
  message: string;
}

export interface CodeResponseResult {
  status: CodeStatus;
  errors: CodeResponseResultError[];
}

export interface CodeData {
  manufacturingDate: string;
  batchID: string
  productName: string;
  expiryDate: string;
  intendedMarket: string;
  milkCollectionDate: string;
  lastQualityDate: string;
  customsClearanceCertificateData: string;
}

export interface CodeMeta {
  schemaId: number;
  data: CodeData;
}

export interface Code {
  metadata: CodeMeta;
  validationCount: number;
  code: number;
  result: CodeResponseResult;
  recalls: {
    [key:string]: RecallStatus;
  };
  codeFlags?: CodeFlag[];
}

export interface CodeSearchItem {
  code: string;
  status: CodeStatus;
}
