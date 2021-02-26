import { PQL } from '../pql/pql';
import { axiosInstance } from './api';

interface PQLWithHash {
  pql: PQL;
  hash: string;
}

export const loadIPFSWithHash = (hash: string): Promise<PQLWithHash> =>
  Promise.resolve()
    .then(() => axiosInstance.get<PQLWithHash>(`/ipfs/${hash}`))
    .then((res) => res.data);

// TODO Move those two interfaces somewhere
interface Result {
  result: string;
}

interface Success {
  success: string;
}

const resolvePqlApiAction = <Res>(endpoint: string, pql: PQL): Promise<Res> =>
  Promise.resolve()
    .then(() => axiosInstance.post<Res>(endpoint, pql))
    .then((res) => res.data);

export const runPqlApi = (pql: PQL): Promise<string> =>
  resolvePqlApiAction<Result>('pql/test', pql).then((res) => res.result);

export const savePqlApi = (pql: PQL): Promise<string> =>
  resolvePqlApiAction<Success>('ipfs/save_pql', pql).then((res) => res.success);
