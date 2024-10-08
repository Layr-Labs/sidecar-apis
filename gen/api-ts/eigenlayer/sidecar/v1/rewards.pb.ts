/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../../fetch.pb"
export type GetRewardsRootRequest = {
  blockNumber?: string
}

export type GetRewardsRootResponse = {
  rewardsRoot?: string
}

export type GenerateClaimProofRequest = {
  earnerAddress?: string
  tokens?: string[]
}

export type EarnerLeaf = {
  earner?: string
  earnerTokenRoot?: string
}

export type TokenLeaf = {
  token?: string
  cumulativeEarnings?: string
}

export type Proof = {
  root?: string
  rootIndex?: number
  earnerIndex?: number
  earnerTreeProof?: string
  earnerLeaf?: EarnerLeaf
  leafIndices?: number[]
  tokenTreeProofs?: string[]
  tokenLeaves?: TokenLeaf[]
}

export type GenerateClaimProofResponse = {
  proof?: Proof
}

export type GetAvailableRewardsRequest = {
  earnerAddress?: string
}

export type Reward = {
  token?: string
  amount?: string
}

export type GetAvailableRewardsResponse = {
  rewards?: Reward[]
}

export type GetAvailableRewardsTokensRequest = {
  earnerAddress?: string
}

export type GetAvailableRewardsTokensResponse = {
  tokens?: string[]
}

export class Rewards {
  static GetRewardsRoot(req: GetRewardsRootRequest, initReq?: fm.InitReq): Promise<GetRewardsRootResponse> {
    return fm.fetchReq<GetRewardsRootRequest, GetRewardsRootResponse>(`/v1/rewards-roots/${req["blockNumber"]}`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GenerateClaimProof(req: GenerateClaimProofRequest, initReq?: fm.InitReq): Promise<GenerateClaimProofResponse> {
    return fm.fetchReq<GenerateClaimProofRequest, GenerateClaimProofResponse>(`/v1/claim-proof`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAvailableRewards(req: GetAvailableRewardsRequest, initReq?: fm.InitReq): Promise<GetAvailableRewardsResponse> {
    return fm.fetchReq<GetAvailableRewardsRequest, GetAvailableRewardsResponse>(`/v1/available-rewards`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAvailableRewardsTokens(req: GetAvailableRewardsTokensRequest, initReq?: fm.InitReq): Promise<GetAvailableRewardsTokensResponse> {
    return fm.fetchReq<GetAvailableRewardsTokensRequest, GetAvailableRewardsTokensResponse>(`/v1/available-rewards-tokens`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}