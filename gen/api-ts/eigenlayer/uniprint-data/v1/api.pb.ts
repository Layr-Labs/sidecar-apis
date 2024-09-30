/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
export type ManifestSignature = {
  v?: Uint8Array
  r?: Uint8Array
  s?: Uint8Array
}

export type UploadManifestRequest = {
  avsAddress?: string
  erc20TokenAddress?: string
  totalAmount?: string
  paymentManifest?: Uint8Array
}

export type UploadManifestResponse = {
  contentHash?: string
  contentUri?: string
  verificationHash?: string
  signature?: ManifestSignature
}

export class Api {
  static UploadManifest(req: UploadManifestRequest, initReq?: fm.InitReq): Promise<UploadManifestResponse> {
    return fm.fetchReq<UploadManifestRequest, UploadManifestResponse>(`/v1/manifests`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}