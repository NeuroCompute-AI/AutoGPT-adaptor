/**
 * Generated by orval v7.10.0 🍺
 * Do not edit manually.
 * AutoGPT Agent Server
 * This server is used to execute agents that are created by the AutoGPT system.
 * OpenAPI spec version: 0.1
 */
import type { CredentialsDeletionResponse } from "./credentialsDeletionResponse";
import type { CredentialsDeletionNeedsConfirmationResponse } from "./credentialsDeletionNeedsConfirmationResponse";

export type DeleteV1DeleteCredentials200 =
  | CredentialsDeletionResponse
  | CredentialsDeletionNeedsConfirmationResponse;
