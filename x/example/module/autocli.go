package example

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "example/api/example/example"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "UserAll",
					Use:       "list-user",
					Short:     "List all user",
				},
				{
					RpcMethod:      "User",
					Use:            "show-user [id]",
					Short:          "Shows a user by id",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod:      "CreateUser",
					Use:            "create-user [address] [balance] [state] [sponsor]",
					Short:          "Create user",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "address"}, {ProtoField: "balance"}, {ProtoField: "state"}, {ProtoField: "sponsor"}},
				},
				{
					RpcMethod:      "UpdateUser",
					Use:            "update-user [id] [address] [balance] [state] [sponsor]",
					Short:          "Update user",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "address"}, {ProtoField: "balance"}, {ProtoField: "state"}, {ProtoField: "sponsor"}},
				},
				{
					RpcMethod:      "DeleteUser",
					Use:            "delete-user [id]",
					Short:          "Delete user",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}},
				},
				{
					RpcMethod:      "AddCitizen",
					Use:            "add-citizen [name] [desc] [sponsor]",
					Short:          "Send a add-citizen tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "name"}, {ProtoField: "desc"}, {ProtoField: "sponsor"}},
				},
				{
					RpcMethod:      "AddProposal",
					Use:            "add-proposal [name] [desc] [votes]",
					Short:          "Send a add-proposal tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "name"}, {ProtoField: "desc"}, {ProtoField: "votes"}},
				},
				{
					RpcMethod:      "VoteonProposal",
					Use:            "voteon-proposal [id] [votes]",
					Short:          "Send a voteon-proposal tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "votes"}},
				},
				{
					RpcMethod:      "VoteForProposal",
					Use:            "vote-for-proposal [id] [votes] [yesno]",
					Short:          "Send a vote-for-proposal tx",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{{ProtoField: "id"}, {ProtoField: "votes"}, {ProtoField: "yesno"}},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
