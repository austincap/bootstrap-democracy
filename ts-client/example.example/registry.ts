import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/example/example/genesis";
import { MsgUpdateParams } from "./types/example/example/tx";
import { MsgUpdateParamsResponse } from "./types/example/example/tx";
import { Params } from "./types/example/example/params";
import { QueryParamsRequest } from "./types/example/example/query";
import { QueryParamsResponse } from "./types/example/example/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/example.example.GenesisState", GenesisState],
    ["/example.example.MsgUpdateParams", MsgUpdateParams],
    ["/example.example.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/example.example.Params", Params],
    ["/example.example.QueryParamsRequest", QueryParamsRequest],
    ["/example.example.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }