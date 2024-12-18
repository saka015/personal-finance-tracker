    import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
    import { GetKpisResponse } from "./types";
    export const api = createApi({
        baseQuery : fetchBaseQuery({
            baseUrl : "http://localhost:5173"
        }),
        reducerPath :"main",
        tagTypes :["kpis"],
        endpoints : (build) => ({
            getKpis : build.query<Array<GetKpisResponse> , void>({
                query:() => "kpi/kpis",
                providesTags: ["kpis"]
            }),
        })
    });

    export const { useGetKpisQuery } = api;