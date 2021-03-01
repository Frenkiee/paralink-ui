import { PqlAggregation } from "./aggregators";
import { PqlLoader } from "./loaders";
import { PqlOperator } from "./operators";


type SourceOperation = 
  | PqlLoader
  | PqlOperator;

export interface Source {
  name: string;
  pipeline: SourceOperation[];
}

export interface Pql {
  name: string;
  psql_version: string; // TODO suggestion: changed from snake cased to camel cased!
  sources: Source[];
  aggregate?: PqlAggregation;
}

export const emptyPql: Pql = {
  name: '',
  psql_version: '0.1',
  sources: [],
};
