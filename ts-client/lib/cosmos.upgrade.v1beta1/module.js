// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgCancelUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { QueryCurrentPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAppliedPlanRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAppliedPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryUpgradedConsensusStateRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { MsgSoftwareUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { MsgCancelUpgradeResponse } from "./types/cosmos/upgrade/v1beta1/tx";
import { SoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { CancelSoftwareUpgradeProposal } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { Plan } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { QueryModuleVersionsRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { MsgSoftwareUpgrade } from "./types/cosmos/upgrade/v1beta1/tx";
import { ModuleVersion } from "./types/cosmos/upgrade/v1beta1/upgrade";
import { QueryCurrentPlanResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryUpgradedConsensusStateResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityRequest } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryModuleVersionsResponse } from "./types/cosmos/upgrade/v1beta1/query";
import { QueryAuthorityResponse } from "./types/cosmos/upgrade/v1beta1/query";
export { MsgCancelUpgrade, QueryCurrentPlanRequest, QueryAppliedPlanRequest, QueryAppliedPlanResponse, QueryUpgradedConsensusStateRequest, MsgSoftwareUpgradeResponse, MsgCancelUpgradeResponse, SoftwareUpgradeProposal, CancelSoftwareUpgradeProposal, Plan, QueryModuleVersionsRequest, MsgSoftwareUpgrade, ModuleVersion, QueryCurrentPlanResponse, QueryUpgradedConsensusStateResponse, QueryAuthorityRequest, QueryModuleVersionsResponse, QueryAuthorityResponse };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgCancelUpgrade({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCancelUpgrade: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgCancelUpgrade({ value: MsgCancelUpgrade.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCancelUpgrade: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryCurrentPlanRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryCurrentPlanRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryCurrentPlanRequest({ value: QueryCurrentPlanRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryCurrentPlanRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAppliedPlanRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAppliedPlanRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAppliedPlanRequest({ value: QueryAppliedPlanRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAppliedPlanRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAppliedPlanResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAppliedPlanResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAppliedPlanResponse({ value: QueryAppliedPlanResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAppliedPlanResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryUpgradedConsensusStateRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryUpgradedConsensusStateRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryUpgradedConsensusStateRequest({ value: QueryUpgradedConsensusStateRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryUpgradedConsensusStateRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSoftwareUpgradeResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSoftwareUpgradeResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSoftwareUpgradeResponse({ value: MsgSoftwareUpgradeResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSoftwareUpgradeResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgCancelUpgradeResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgCancelUpgradeResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgCancelUpgradeResponse({ value: MsgCancelUpgradeResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgCancelUpgradeResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendSoftwareUpgradeProposal({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendSoftwareUpgradeProposal: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.softwareUpgradeProposal({ value: SoftwareUpgradeProposal.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendSoftwareUpgradeProposal: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendCancelSoftwareUpgradeProposal({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendCancelSoftwareUpgradeProposal: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.cancelSoftwareUpgradeProposal({ value: CancelSoftwareUpgradeProposal.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendCancelSoftwareUpgradeProposal: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendPlan({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendPlan: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.plan({ value: Plan.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendPlan: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleVersionsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleVersionsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleVersionsRequest({ value: QueryModuleVersionsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleVersionsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgSoftwareUpgrade({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgSoftwareUpgrade: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgSoftwareUpgrade({ value: MsgSoftwareUpgrade.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgSoftwareUpgrade: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendModuleVersion({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendModuleVersion: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.moduleVersion({ value: ModuleVersion.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendModuleVersion: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryCurrentPlanResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryCurrentPlanResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryCurrentPlanResponse({ value: QueryCurrentPlanResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryCurrentPlanResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryUpgradedConsensusStateResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryUpgradedConsensusStateResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryUpgradedConsensusStateResponse({ value: QueryUpgradedConsensusStateResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryUpgradedConsensusStateResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAuthorityRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAuthorityRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAuthorityRequest({ value: QueryAuthorityRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAuthorityRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryModuleVersionsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryModuleVersionsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryModuleVersionsResponse({ value: QueryModuleVersionsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryModuleVersionsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAuthorityResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAuthorityResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAuthorityResponse({ value: QueryAuthorityResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAuthorityResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        msgCancelUpgrade({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgrade", value: MsgCancelUpgrade.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCancelUpgrade: Could not create message: ' + e.message);
            }
        },
        queryCurrentPlanRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanRequest", value: QueryCurrentPlanRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryCurrentPlanRequest: Could not create message: ' + e.message);
            }
        },
        queryAppliedPlanRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanRequest", value: QueryAppliedPlanRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAppliedPlanRequest: Could not create message: ' + e.message);
            }
        },
        queryAppliedPlanResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryAppliedPlanResponse", value: QueryAppliedPlanResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAppliedPlanResponse: Could not create message: ' + e.message);
            }
        },
        queryUpgradedConsensusStateRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateRequest", value: QueryUpgradedConsensusStateRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryUpgradedConsensusStateRequest: Could not create message: ' + e.message);
            }
        },
        msgSoftwareUpgradeResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgradeResponse", value: MsgSoftwareUpgradeResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSoftwareUpgradeResponse: Could not create message: ' + e.message);
            }
        },
        msgCancelUpgradeResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.MsgCancelUpgradeResponse", value: MsgCancelUpgradeResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgCancelUpgradeResponse: Could not create message: ' + e.message);
            }
        },
        softwareUpgradeProposal({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal", value: SoftwareUpgradeProposal.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:SoftwareUpgradeProposal: Could not create message: ' + e.message);
            }
        },
        cancelSoftwareUpgradeProposal({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal", value: CancelSoftwareUpgradeProposal.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:CancelSoftwareUpgradeProposal: Could not create message: ' + e.message);
            }
        },
        plan({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.Plan", value: Plan.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Plan: Could not create message: ' + e.message);
            }
        },
        queryModuleVersionsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsRequest", value: QueryModuleVersionsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleVersionsRequest: Could not create message: ' + e.message);
            }
        },
        msgSoftwareUpgrade({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.MsgSoftwareUpgrade", value: MsgSoftwareUpgrade.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgSoftwareUpgrade: Could not create message: ' + e.message);
            }
        },
        moduleVersion({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion", value: ModuleVersion.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:ModuleVersion: Could not create message: ' + e.message);
            }
        },
        queryCurrentPlanResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryCurrentPlanResponse", value: QueryCurrentPlanResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryCurrentPlanResponse: Could not create message: ' + e.message);
            }
        },
        queryUpgradedConsensusStateResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryUpgradedConsensusStateResponse", value: QueryUpgradedConsensusStateResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryUpgradedConsensusStateResponse: Could not create message: ' + e.message);
            }
        },
        queryAuthorityRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityRequest", value: QueryAuthorityRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAuthorityRequest: Could not create message: ' + e.message);
            }
        },
        queryModuleVersionsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryModuleVersionsResponse", value: QueryModuleVersionsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryModuleVersionsResponse: Could not create message: ' + e.message);
            }
        },
        queryAuthorityResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.upgrade.v1beta1.QueryAuthorityResponse", value: QueryAuthorityResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAuthorityResponse: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosUpgradeV1Beta1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;
