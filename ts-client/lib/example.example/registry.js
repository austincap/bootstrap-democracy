import { MsgUpdateParams } from "./types/example/example/tx";
import { GenesisState } from "./types/example/example/genesis";
import { Params } from "./types/example/example/params";
import { QueryParamsRequest } from "./types/example/example/query";
import { QueryParamsResponse } from "./types/example/example/query";
import { MsgUpdateParamsResponse } from "./types/example/example/tx";
const msgTypes = [
    ["/example.example.MsgUpdateParams", MsgUpdateParams],
    ["/example.example.GenesisState", GenesisState],
    ["/example.example.Params", Params],
    ["/example.example.QueryParamsRequest", QueryParamsRequest],
    ["/example.example.QueryParamsResponse", QueryParamsResponse],
    ["/example.example.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
];
export { msgTypes };
