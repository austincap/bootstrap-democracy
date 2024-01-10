package example_test

import (
	"testing"

	keepertest "example/testutil/keeper"
	"example/testutil/nullify"
	"example/x/example/module"
	"example/x/example/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		UserList: []types.User{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		UserCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.ExampleKeeper(t)
	example.InitGenesis(ctx, k, genesisState)
	got := example.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.UserList, got.UserList)
	require.Equal(t, genesisState.UserCount, got.UserCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
