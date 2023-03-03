import axios from 'axios';
import { TraceData } from '@/interfaces/trace.interfaces';
import { RequestResponse } from '@/interfaces/common.interfaces';
import { Code } from '@/interfaces/code.interfaces';

const client = axios.create({
  baseURL: '/',
  headers: {
    Authorization: 'Basic Y2FuZGlkYXRlOnN1cGVyc2VjcmV0',
  },
});

export default {
  fetchTrace: (code: string): Promise<RequestResponse<TraceData>> => client.get(
    `/compass-ws-rest/trace/${code}`,
  ),
  fetchCode: (payload: {codes: string[]}): Promise<RequestResponse<Code[]>> => client.post(
    '/code-authentication/v2/batch',
    payload,
  ),
};
