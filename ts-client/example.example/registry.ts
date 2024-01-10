import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreateUser } from "./types/example/example/tx";
import { MsgAddProposal } from "./types/example/example/tx";
import { QueryGetUserResponse } from "./types/example/example/query";
import { MsgVoteonProposalResponse } from "./types/example/example/tx";
import { QueryParamsResponse } from "./types/example/example/query";
import { MsgUpdateParams } from "./types/example/example/tx";
import { MsgUpdateUser } from "./types/example/example/tx";
import { Params } from "./types/example/example/params";
import { QueryGetUserRequest } from "./types/example/example/query";
import { QueryParamsRequest } from "./types/example/example/query";
import { MsgCreateUserResponse } from "./types/example/example/tx";
import { MsgUpdateUserResponse } from "./types/example/example/tx";
import { MsgDeleteUser } from "./types/example/example/tx";
import { MsgDeleteUserResponse } from "./types/example/example/tx";
import { MsgAddCitizenResponse } from "./types/example/example/tx";
import { MsgVoteonProposal } from "./types/example/example/tx";
import { User } from "./types/example/example/user";
import { GenesisState } from "./types/example/example/genesis";
import { MsgUpdateParamsResponse } from "./types/example/example/tx";
import { MsgAddCitizen } from "./types/example/example/tx";
import { MsgAddProposalResponse } from "./types/example/example/tx";
import { QueryAllUserRequest } from "./types/example/example/query";
import { QueryAllUserResponse } from "./types/example/example/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/example.example.MsgCreateUser", MsgCreateUser],
    ["/example.example.MsgAddProposal", MsgAddProposal],
    ["/example.example.QueryGetUserResponse", QueryGetUserResponse],
    ["/example.example.MsgVoteonProposalResponse", MsgVoteonProposalResponse],
    ["/example.example.QueryParamsResponse", QueryParamsResponse],
    ["/example.example.MsgUpdateParams", MsgUpdateParams],
    ["/example.example.MsgUpdateUser", MsgUpdateUser],
    ["/example.example.Params", Params],
    ["/example.example.QueryGetUserRequest", QueryGetUserRequest],
    ["/example.example.QueryParamsRequest", QueryParamsRequest],
    ["/example.example.MsgCreateUserResponse", MsgCreateUserResponse],
    ["/example.example.MsgUpdateUserResponse", MsgUpdateUserResponse],
    ["/example.example.MsgDeleteUser", MsgDeleteUser],
    ["/example.example.MsgDeleteUserResponse", MsgDeleteUserResponse],
    ["/example.example.MsgAddCitizenResponse", MsgAddCitizenResponse],
    ["/example.example.MsgVoteonProposal", MsgVoteonProposal],
    ["/example.example.User", User],
    ["/example.example.GenesisState", GenesisState],
    ["/example.example.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/example.example.MsgAddCitizen", MsgAddCitizen],
    ["/example.example.MsgAddProposalResponse", MsgAddProposalResponse],
    ["/example.example.QueryAllUserRequest", QueryAllUserRequest],
    ["/example.example.QueryAllUserResponse", QueryAllUserResponse],
    
];

export { msgTypes }