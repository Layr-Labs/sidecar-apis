/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
export type GetBlockHeightRequest = {
}

export type GetBlockHeightResponse = {
  blockNumber?: string
  blockHash?: string
}

export type GetStateRootRequest = {
  blockNumber?: string
}

export type GetStateRootResponse = {
  ethBlockNumber?: string
  ethBlockHash?: string
  stateRoot?: string
}

export class Rpc {
  static GetBlockHeight(req: GetBlockHeightRequest, initReq?: fm.InitReq): Promise<GetBlockHeightResponse> {
    return fm.fetchReq<GetBlockHeightRequest, GetBlockHeightResponse>(`/v1/latest-block`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetStateRoot(req: GetStateRootRequest, initReq?: fm.InitReq): Promise<GetStateRootResponse> {
    return fm.fetchReq<GetStateRootRequest, GetStateRootResponse>(`/v1/state-roots/${req["blockNumber"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}