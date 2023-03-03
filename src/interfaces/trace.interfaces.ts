export enum Material {
  SomeMock = 'SOME_MOCK',
  Other = 'OTHER'
}

export enum PackageType {
  SomeMock = 'SOME_MOCK',
  Other = 'OTHER'
}

export interface Package {
  name: string;
  type: PackageType;
  material: Material;
}

export interface TraceInfo {
  code: string;
  packageType: Package;
}

export interface TraceCountry {
  code: string;
  name: string;
}

export interface TraceCoordinates {
  latitude: number;
  longitude: number;
}

export interface TraceLocation {
  name: string;
  country: TraceCountry;
  coordinates: TraceCoordinates;
}

export interface TraceEvent {
  eventTime: number;
  disposition: string;
  bizStep: string;
  type: string;
  location: TraceLocation;
}

export interface TraceEvents {
  event: TraceEvent[];
}

export interface TraceData {
  self: TraceInfo;
  events: TraceEvents;
}

export interface TraceError {
  code: string;
  error: string;
  message: string;
  path: string;
  status: number;
  timestamp: string;
}
