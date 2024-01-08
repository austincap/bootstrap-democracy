import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { QueryDelegationRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegationTotalRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorDistributionInfoResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorAccumulatedCommission } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryDelegatorValidatorsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgWithdrawValidatorCommission } from "./types/cosmos/distribution/v1beta1/tx";
import { FeePool } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgCommunityPoolSpendResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorSlashEvents } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegationDelegatorReward } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryParamsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorSlashesResponse } from "./types/cosmos/distribution/v1beta1/query";
import { MsgDepositValidatorRewardsPool } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorHistoricalRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { Params } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryDelegationRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorOutstandingRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryDelegatorValidatorsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorCurrentRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { ValidatorSlashEvent } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegatorWithdrawInfo } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryValidatorOutstandingRewardsResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/query";
import { ValidatorAccumulatedCommissionRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { DelegatorStartingInfoRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { MsgSetWithdrawAddress } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgWithdrawDelegatorRewardResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgCommunityPoolSpend } from "./types/cosmos/distribution/v1beta1/tx";
import { GenesisState } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryParamsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryDelegatorWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/query";
import { QueryCommunityPoolRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgSetWithdrawAddressResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPool } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorCurrentRewardsRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryValidatorDistributionInfoRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgDepositValidatorRewardsPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorHistoricalRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { DelegatorStartingInfo } from "./types/cosmos/distribution/v1beta1/distribution";
import { CommunityPoolSpendProposalWithDeposit } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorOutstandingRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgUpdateParams } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgUpdateParamsResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorOutstandingRewards } from "./types/cosmos/distribution/v1beta1/distribution";
import { MsgWithdrawValidatorCommissionResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { MsgFundCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/tx";
import { ValidatorSlashEventRecord } from "./types/cosmos/distribution/v1beta1/genesis";
import { QueryDelegationTotalRewardsRequest } from "./types/cosmos/distribution/v1beta1/query";
import { MsgWithdrawDelegatorReward } from "./types/cosmos/distribution/v1beta1/tx";
import { CommunityPoolSpendProposal } from "./types/cosmos/distribution/v1beta1/distribution";
import { QueryValidatorCommissionRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryValidatorSlashesRequest } from "./types/cosmos/distribution/v1beta1/query";
import { QueryCommunityPoolResponse } from "./types/cosmos/distribution/v1beta1/query";
export { QueryDelegationRewardsResponse, QueryDelegationTotalRewardsResponse, QueryValidatorDistributionInfoResponse, ValidatorAccumulatedCommission, QueryDelegatorValidatorsRequest, MsgWithdrawValidatorCommission, FeePool, MsgCommunityPoolSpendResponse, ValidatorSlashEvents, DelegationDelegatorReward, QueryParamsResponse, QueryValidatorSlashesResponse, MsgDepositValidatorRewardsPool, ValidatorHistoricalRewardsRecord, Params, QueryDelegationRewardsRequest, ValidatorOutstandingRewardsRecord, QueryDelegatorValidatorsResponse, ValidatorCurrentRewards, ValidatorSlashEvent, DelegatorWithdrawInfo, QueryValidatorOutstandingRewardsResponse, QueryValidatorCommissionResponse, ValidatorAccumulatedCommissionRecord, DelegatorStartingInfoRecord, MsgSetWithdrawAddress, MsgWithdrawDelegatorRewardResponse, MsgCommunityPoolSpend, GenesisState, QueryParamsRequest, QueryDelegatorWithdrawAddressRequest, QueryDelegatorWithdrawAddressResponse, QueryCommunityPoolRequest, MsgSetWithdrawAddressResponse, MsgFundCommunityPool, ValidatorCurrentRewardsRecord, QueryValidatorDistributionInfoRequest, MsgDepositValidatorRewardsPoolResponse, ValidatorHistoricalRewards, DelegatorStartingInfo, CommunityPoolSpendProposalWithDeposit, QueryValidatorOutstandingRewardsRequest, MsgUpdateParams, MsgUpdateParamsResponse, ValidatorOutstandingRewards, MsgWithdrawValidatorCommissionResponse, MsgFundCommunityPoolResponse, ValidatorSlashEventRecord, QueryDelegationTotalRewardsRequest, MsgWithdrawDelegatorReward, CommunityPoolSpendProposal, QueryValidatorCommissionRequest, QueryValidatorSlashesRequest, QueryCommunityPoolResponse };
type sendQueryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
    fee?: StdFee;
    memo?: string;
};
type sendFeePoolParams = {
    value: FeePool;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventsParams = {
    value: ValidatorSlashEvents;
    fee?: StdFee;
    memo?: string;
};
type sendDelegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventParams = {
    value: ValidatorSlashEvent;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
    fee?: StdFee;
    memo?: string;
};
type sendDelegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
    fee?: StdFee;
    memo?: string;
};
type sendMsgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type sendValidatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
    fee?: StdFee;
    memo?: string;
};
type sendQueryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
    fee?: StdFee;
    memo?: string;
};
type sendCommunityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
    fee?: StdFee;
    memo?: string;
};
type queryDelegationRewardsResponseParams = {
    value: QueryDelegationRewardsResponse;
};
type queryDelegationTotalRewardsResponseParams = {
    value: QueryDelegationTotalRewardsResponse;
};
type queryValidatorDistributionInfoResponseParams = {
    value: QueryValidatorDistributionInfoResponse;
};
type validatorAccumulatedCommissionParams = {
    value: ValidatorAccumulatedCommission;
};
type queryDelegatorValidatorsRequestParams = {
    value: QueryDelegatorValidatorsRequest;
};
type msgWithdrawValidatorCommissionParams = {
    value: MsgWithdrawValidatorCommission;
};
type feePoolParams = {
    value: FeePool;
};
type msgCommunityPoolSpendResponseParams = {
    value: MsgCommunityPoolSpendResponse;
};
type validatorSlashEventsParams = {
    value: ValidatorSlashEvents;
};
type delegationDelegatorRewardParams = {
    value: DelegationDelegatorReward;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type queryValidatorSlashesResponseParams = {
    value: QueryValidatorSlashesResponse;
};
type msgDepositValidatorRewardsPoolParams = {
    value: MsgDepositValidatorRewardsPool;
};
type validatorHistoricalRewardsRecordParams = {
    value: ValidatorHistoricalRewardsRecord;
};
type paramsParams = {
    value: Params;
};
type queryDelegationRewardsRequestParams = {
    value: QueryDelegationRewardsRequest;
};
type validatorOutstandingRewardsRecordParams = {
    value: ValidatorOutstandingRewardsRecord;
};
type queryDelegatorValidatorsResponseParams = {
    value: QueryDelegatorValidatorsResponse;
};
type validatorCurrentRewardsParams = {
    value: ValidatorCurrentRewards;
};
type validatorSlashEventParams = {
    value: ValidatorSlashEvent;
};
type delegatorWithdrawInfoParams = {
    value: DelegatorWithdrawInfo;
};
type queryValidatorOutstandingRewardsResponseParams = {
    value: QueryValidatorOutstandingRewardsResponse;
};
type queryValidatorCommissionResponseParams = {
    value: QueryValidatorCommissionResponse;
};
type validatorAccumulatedCommissionRecordParams = {
    value: ValidatorAccumulatedCommissionRecord;
};
type delegatorStartingInfoRecordParams = {
    value: DelegatorStartingInfoRecord;
};
type msgSetWithdrawAddressParams = {
    value: MsgSetWithdrawAddress;
};
type msgWithdrawDelegatorRewardResponseParams = {
    value: MsgWithdrawDelegatorRewardResponse;
};
type msgCommunityPoolSpendParams = {
    value: MsgCommunityPoolSpend;
};
type genesisStateParams = {
    value: GenesisState;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type queryDelegatorWithdrawAddressRequestParams = {
    value: QueryDelegatorWithdrawAddressRequest;
};
type queryDelegatorWithdrawAddressResponseParams = {
    value: QueryDelegatorWithdrawAddressResponse;
};
type queryCommunityPoolRequestParams = {
    value: QueryCommunityPoolRequest;
};
type msgSetWithdrawAddressResponseParams = {
    value: MsgSetWithdrawAddressResponse;
};
type msgFundCommunityPoolParams = {
    value: MsgFundCommunityPool;
};
type validatorCurrentRewardsRecordParams = {
    value: ValidatorCurrentRewardsRecord;
};
type queryValidatorDistributionInfoRequestParams = {
    value: QueryValidatorDistributionInfoRequest;
};
type msgDepositValidatorRewardsPoolResponseParams = {
    value: MsgDepositValidatorRewardsPoolResponse;
};
type validatorHistoricalRewardsParams = {
    value: ValidatorHistoricalRewards;
};
type delegatorStartingInfoParams = {
    value: DelegatorStartingInfo;
};
type communityPoolSpendProposalWithDepositParams = {
    value: CommunityPoolSpendProposalWithDeposit;
};
type queryValidatorOutstandingRewardsRequestParams = {
    value: QueryValidatorOutstandingRewardsRequest;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type validatorOutstandingRewardsParams = {
    value: ValidatorOutstandingRewards;
};
type msgWithdrawValidatorCommissionResponseParams = {
    value: MsgWithdrawValidatorCommissionResponse;
};
type msgFundCommunityPoolResponseParams = {
    value: MsgFundCommunityPoolResponse;
};
type validatorSlashEventRecordParams = {
    value: ValidatorSlashEventRecord;
};
type queryDelegationTotalRewardsRequestParams = {
    value: QueryDelegationTotalRewardsRequest;
};
type msgWithdrawDelegatorRewardParams = {
    value: MsgWithdrawDelegatorReward;
};
type communityPoolSpendProposalParams = {
    value: CommunityPoolSpendProposal;
};
type queryValidatorCommissionRequestParams = {
    value: QueryValidatorCommissionRequest;
};
type queryValidatorSlashesRequestParams = {
    value: QueryValidatorSlashesRequest;
};
type queryCommunityPoolResponseParams = {
    value: QueryCommunityPoolResponse;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendQueryDelegationRewardsResponse({ value, fee, memo }: sendQueryDelegationRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsResponse({ value, fee, memo }: sendQueryDelegationTotalRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoResponse({ value, fee, memo }: sendQueryValidatorDistributionInfoResponseParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommission({ value, fee, memo }: sendValidatorAccumulatedCommissionParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsRequest({ value, fee, memo }: sendQueryDelegatorValidatorsRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommission({ value, fee, memo }: sendMsgWithdrawValidatorCommissionParams): Promise<DeliverTxResponse>;
    sendFeePool({ value, fee, memo }: sendFeePoolParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpendResponse({ value, fee, memo }: sendMsgCommunityPoolSpendResponseParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvents({ value, fee, memo }: sendValidatorSlashEventsParams): Promise<DeliverTxResponse>;
    sendDelegationDelegatorReward({ value, fee, memo }: sendDelegationDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesResponse({ value, fee, memo }: sendQueryValidatorSlashesResponseParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPool({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewardsRecord({ value, fee, memo }: sendValidatorHistoricalRewardsRecordParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryDelegationRewardsRequest({ value, fee, memo }: sendQueryDelegationRewardsRequestParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewardsRecord({ value, fee, memo }: sendValidatorOutstandingRewardsRecordParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorValidatorsResponse({ value, fee, memo }: sendQueryDelegatorValidatorsResponseParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewards({ value, fee, memo }: sendValidatorCurrentRewardsParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEvent({ value, fee, memo }: sendValidatorSlashEventParams): Promise<DeliverTxResponse>;
    sendDelegatorWithdrawInfo({ value, fee, memo }: sendDelegatorWithdrawInfoParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsResponse({ value, fee, memo }: sendQueryValidatorOutstandingRewardsResponseParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionResponse({ value, fee, memo }: sendQueryValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendValidatorAccumulatedCommissionRecord({ value, fee, memo }: sendValidatorAccumulatedCommissionRecordParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfoRecord({ value, fee, memo }: sendDelegatorStartingInfoRecordParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddress({ value, fee, memo }: sendMsgSetWithdrawAddressParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorRewardResponse({ value, fee, memo }: sendMsgWithdrawDelegatorRewardResponseParams): Promise<DeliverTxResponse>;
    sendMsgCommunityPoolSpend({ value, fee, memo }: sendMsgCommunityPoolSpendParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressRequest({ value, fee, memo }: sendQueryDelegatorWithdrawAddressRequestParams): Promise<DeliverTxResponse>;
    sendQueryDelegatorWithdrawAddressResponse({ value, fee, memo }: sendQueryDelegatorWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolRequest({ value, fee, memo }: sendQueryCommunityPoolRequestParams): Promise<DeliverTxResponse>;
    sendMsgSetWithdrawAddressResponse({ value, fee, memo }: sendMsgSetWithdrawAddressResponseParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPool({ value, fee, memo }: sendMsgFundCommunityPoolParams): Promise<DeliverTxResponse>;
    sendValidatorCurrentRewardsRecord({ value, fee, memo }: sendValidatorCurrentRewardsRecordParams): Promise<DeliverTxResponse>;
    sendQueryValidatorDistributionInfoRequest({ value, fee, memo }: sendQueryValidatorDistributionInfoRequestParams): Promise<DeliverTxResponse>;
    sendMsgDepositValidatorRewardsPoolResponse({ value, fee, memo }: sendMsgDepositValidatorRewardsPoolResponseParams): Promise<DeliverTxResponse>;
    sendValidatorHistoricalRewards({ value, fee, memo }: sendValidatorHistoricalRewardsParams): Promise<DeliverTxResponse>;
    sendDelegatorStartingInfo({ value, fee, memo }: sendDelegatorStartingInfoParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposalWithDeposit({ value, fee, memo }: sendCommunityPoolSpendProposalWithDepositParams): Promise<DeliverTxResponse>;
    sendQueryValidatorOutstandingRewardsRequest({ value, fee, memo }: sendQueryValidatorOutstandingRewardsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendValidatorOutstandingRewards({ value, fee, memo }: sendValidatorOutstandingRewardsParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawValidatorCommissionResponse({ value, fee, memo }: sendMsgWithdrawValidatorCommissionResponseParams): Promise<DeliverTxResponse>;
    sendMsgFundCommunityPoolResponse({ value, fee, memo }: sendMsgFundCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    sendValidatorSlashEventRecord({ value, fee, memo }: sendValidatorSlashEventRecordParams): Promise<DeliverTxResponse>;
    sendQueryDelegationTotalRewardsRequest({ value, fee, memo }: sendQueryDelegationTotalRewardsRequestParams): Promise<DeliverTxResponse>;
    sendMsgWithdrawDelegatorReward({ value, fee, memo }: sendMsgWithdrawDelegatorRewardParams): Promise<DeliverTxResponse>;
    sendCommunityPoolSpendProposal({ value, fee, memo }: sendCommunityPoolSpendProposalParams): Promise<DeliverTxResponse>;
    sendQueryValidatorCommissionRequest({ value, fee, memo }: sendQueryValidatorCommissionRequestParams): Promise<DeliverTxResponse>;
    sendQueryValidatorSlashesRequest({ value, fee, memo }: sendQueryValidatorSlashesRequestParams): Promise<DeliverTxResponse>;
    sendQueryCommunityPoolResponse({ value, fee, memo }: sendQueryCommunityPoolResponseParams): Promise<DeliverTxResponse>;
    queryDelegationRewardsResponse({ value }: queryDelegationRewardsResponseParams): EncodeObject;
    queryDelegationTotalRewardsResponse({ value }: queryDelegationTotalRewardsResponseParams): EncodeObject;
    queryValidatorDistributionInfoResponse({ value }: queryValidatorDistributionInfoResponseParams): EncodeObject;
    validatorAccumulatedCommission({ value }: validatorAccumulatedCommissionParams): EncodeObject;
    queryDelegatorValidatorsRequest({ value }: queryDelegatorValidatorsRequestParams): EncodeObject;
    msgWithdrawValidatorCommission({ value }: msgWithdrawValidatorCommissionParams): EncodeObject;
    feePool({ value }: feePoolParams): EncodeObject;
    msgCommunityPoolSpendResponse({ value }: msgCommunityPoolSpendResponseParams): EncodeObject;
    validatorSlashEvents({ value }: validatorSlashEventsParams): EncodeObject;
    delegationDelegatorReward({ value }: delegationDelegatorRewardParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    queryValidatorSlashesResponse({ value }: queryValidatorSlashesResponseParams): EncodeObject;
    msgDepositValidatorRewardsPool({ value }: msgDepositValidatorRewardsPoolParams): EncodeObject;
    validatorHistoricalRewardsRecord({ value }: validatorHistoricalRewardsRecordParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryDelegationRewardsRequest({ value }: queryDelegationRewardsRequestParams): EncodeObject;
    validatorOutstandingRewardsRecord({ value }: validatorOutstandingRewardsRecordParams): EncodeObject;
    queryDelegatorValidatorsResponse({ value }: queryDelegatorValidatorsResponseParams): EncodeObject;
    validatorCurrentRewards({ value }: validatorCurrentRewardsParams): EncodeObject;
    validatorSlashEvent({ value }: validatorSlashEventParams): EncodeObject;
    delegatorWithdrawInfo({ value }: delegatorWithdrawInfoParams): EncodeObject;
    queryValidatorOutstandingRewardsResponse({ value }: queryValidatorOutstandingRewardsResponseParams): EncodeObject;
    queryValidatorCommissionResponse({ value }: queryValidatorCommissionResponseParams): EncodeObject;
    validatorAccumulatedCommissionRecord({ value }: validatorAccumulatedCommissionRecordParams): EncodeObject;
    delegatorStartingInfoRecord({ value }: delegatorStartingInfoRecordParams): EncodeObject;
    msgSetWithdrawAddress({ value }: msgSetWithdrawAddressParams): EncodeObject;
    msgWithdrawDelegatorRewardResponse({ value }: msgWithdrawDelegatorRewardResponseParams): EncodeObject;
    msgCommunityPoolSpend({ value }: msgCommunityPoolSpendParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    queryDelegatorWithdrawAddressRequest({ value }: queryDelegatorWithdrawAddressRequestParams): EncodeObject;
    queryDelegatorWithdrawAddressResponse({ value }: queryDelegatorWithdrawAddressResponseParams): EncodeObject;
    queryCommunityPoolRequest({ value }: queryCommunityPoolRequestParams): EncodeObject;
    msgSetWithdrawAddressResponse({ value }: msgSetWithdrawAddressResponseParams): EncodeObject;
    msgFundCommunityPool({ value }: msgFundCommunityPoolParams): EncodeObject;
    validatorCurrentRewardsRecord({ value }: validatorCurrentRewardsRecordParams): EncodeObject;
    queryValidatorDistributionInfoRequest({ value }: queryValidatorDistributionInfoRequestParams): EncodeObject;
    msgDepositValidatorRewardsPoolResponse({ value }: msgDepositValidatorRewardsPoolResponseParams): EncodeObject;
    validatorHistoricalRewards({ value }: validatorHistoricalRewardsParams): EncodeObject;
    delegatorStartingInfo({ value }: delegatorStartingInfoParams): EncodeObject;
    communityPoolSpendProposalWithDeposit({ value }: communityPoolSpendProposalWithDepositParams): EncodeObject;
    queryValidatorOutstandingRewardsRequest({ value }: queryValidatorOutstandingRewardsRequestParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    validatorOutstandingRewards({ value }: validatorOutstandingRewardsParams): EncodeObject;
    msgWithdrawValidatorCommissionResponse({ value }: msgWithdrawValidatorCommissionResponseParams): EncodeObject;
    msgFundCommunityPoolResponse({ value }: msgFundCommunityPoolResponseParams): EncodeObject;
    validatorSlashEventRecord({ value }: validatorSlashEventRecordParams): EncodeObject;
    queryDelegationTotalRewardsRequest({ value }: queryDelegationTotalRewardsRequestParams): EncodeObject;
    msgWithdrawDelegatorReward({ value }: msgWithdrawDelegatorRewardParams): EncodeObject;
    communityPoolSpendProposal({ value }: communityPoolSpendProposalParams): EncodeObject;
    queryValidatorCommissionRequest({ value }: queryValidatorCommissionRequestParams): EncodeObject;
    queryValidatorSlashesRequest({ value }: queryValidatorSlashesRequestParams): EncodeObject;
    queryCommunityPoolResponse({ value }: queryCommunityPoolResponseParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        CosmosDistributionV1Beta1: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;