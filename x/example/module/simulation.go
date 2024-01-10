package example

import (
	"math/rand"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"

	"example/testutil/sample"
	examplesimulation "example/x/example/simulation"
	"example/x/example/types"
)

// avoid unused import issue
var (
	_ = examplesimulation.FindAccount
	_ = rand.Rand{}
	_ = sample.AccAddress
	_ = sdk.AccAddress{}
	_ = simulation.MsgEntryKind
)

const (
	opWeightMsgCreateUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateUser int = 100

	opWeightMsgUpdateUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUpdateUser int = 100

	opWeightMsgDeleteUser = "op_weight_msg_user"
	// TODO: Determine the simulation weight value
	defaultWeightMsgDeleteUser int = 100

	opWeightMsgAddCitizen = "op_weight_msg_add_citizen"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddCitizen int = 100

	opWeightMsgAddProposal = "op_weight_msg_add_proposal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgAddProposal int = 100

	opWeightMsgVoteonProposal = "op_weight_msg_voteon_proposal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgVoteonProposal int = 100

	opWeightMsgVoteForProposal = "op_weight_msg_vote_for_proposal"
	// TODO: Determine the simulation weight value
	defaultWeightMsgVoteForProposal int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module.
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	exampleGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		UserList: []types.User{
			{
				Id:      0,
				Creator: sample.AccAddress(),
			},
			{
				Id:      1,
				Creator: sample.AccAddress(),
			},
		},
		UserCount: 2,
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&exampleGenesis)
}

// RegisterStoreDecoder registers a decoder.
func (am AppModule) RegisterStoreDecoder(_ simtypes.StoreDecoderRegistry) {}

// ProposalContents doesn't return any content functions for governance proposals.
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgCreateUser int
	simState.AppParams.GetOrGenerate(opWeightMsgCreateUser, &weightMsgCreateUser, nil,
		func(_ *rand.Rand) {
			weightMsgCreateUser = defaultWeightMsgCreateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateUser,
		examplesimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgUpdateUser int
	simState.AppParams.GetOrGenerate(opWeightMsgUpdateUser, &weightMsgUpdateUser, nil,
		func(_ *rand.Rand) {
			weightMsgUpdateUser = defaultWeightMsgUpdateUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUpdateUser,
		examplesimulation.SimulateMsgUpdateUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgDeleteUser int
	simState.AppParams.GetOrGenerate(opWeightMsgDeleteUser, &weightMsgDeleteUser, nil,
		func(_ *rand.Rand) {
			weightMsgDeleteUser = defaultWeightMsgDeleteUser
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgDeleteUser,
		examplesimulation.SimulateMsgDeleteUser(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAddCitizen int
	simState.AppParams.GetOrGenerate(opWeightMsgAddCitizen, &weightMsgAddCitizen, nil,
		func(_ *rand.Rand) {
			weightMsgAddCitizen = defaultWeightMsgAddCitizen
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddCitizen,
		examplesimulation.SimulateMsgAddCitizen(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgAddProposal int
	simState.AppParams.GetOrGenerate(opWeightMsgAddProposal, &weightMsgAddProposal, nil,
		func(_ *rand.Rand) {
			weightMsgAddProposal = defaultWeightMsgAddProposal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgAddProposal,
		examplesimulation.SimulateMsgAddProposal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgVoteonProposal int
	simState.AppParams.GetOrGenerate(opWeightMsgVoteonProposal, &weightMsgVoteonProposal, nil,
		func(_ *rand.Rand) {
			weightMsgVoteonProposal = defaultWeightMsgVoteonProposal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgVoteonProposal,
		examplesimulation.SimulateMsgVoteonProposal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgVoteForProposal int
	simState.AppParams.GetOrGenerate(opWeightMsgVoteForProposal, &weightMsgVoteForProposal, nil,
		func(_ *rand.Rand) {
			weightMsgVoteForProposal = defaultWeightMsgVoteForProposal
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgVoteForProposal,
		examplesimulation.SimulateMsgVoteForProposal(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}

// ProposalMsgs returns msgs used for governance proposals for simulations.
func (am AppModule) ProposalMsgs(simState module.SimulationState) []simtypes.WeightedProposalMsg {
	return []simtypes.WeightedProposalMsg{
		simulation.NewWeightedProposalMsg(
			opWeightMsgCreateUser,
			defaultWeightMsgCreateUser,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgCreateUser(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgUpdateUser,
			defaultWeightMsgUpdateUser,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgUpdateUser(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgDeleteUser,
			defaultWeightMsgDeleteUser,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgDeleteUser(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgAddCitizen,
			defaultWeightMsgAddCitizen,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgAddCitizen(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgAddProposal,
			defaultWeightMsgAddProposal,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgAddProposal(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgVoteonProposal,
			defaultWeightMsgVoteonProposal,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgVoteonProposal(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		simulation.NewWeightedProposalMsg(
			opWeightMsgVoteForProposal,
			defaultWeightMsgVoteForProposal,
			func(r *rand.Rand, ctx sdk.Context, accs []simtypes.Account) sdk.Msg {
				examplesimulation.SimulateMsgVoteForProposal(am.accountKeeper, am.bankKeeper, am.keeper)
				return nil
			},
		),
		// this line is used by starport scaffolding # simapp/module/OpMsg
	}
}
