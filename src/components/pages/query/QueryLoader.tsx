import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadIPFSWithHash } from '../../../api/pql';
import { Pql, emptyPql } from '../../../state/pql/pql';
import ErrorContainer from '../../common/sub-pages/ErrorContainer';
import Loading from '../../common/sub-pages/Loading';
import { convertPql, emptyQueryData } from './builder/builder';
import QueryController from './QueryController';

interface UrlParams {
  hash: string;
}

const QueryLoader = (): JSX.Element => {
  const { hash } = useParams<UrlParams>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [pql, setPql] = useState<Pql>({...emptyPql});
  const [queryData, setQueryData] = useState({ ...emptyQueryData });

  useEffect(() => {
    const load = async () => {
      try {
        setIsLoading(true);
        const res = await loadIPFSWithHash(hash);
        const data = convertPql(res.pql);
        setPql(res.pql);
        setQueryData(data);
      } 
      catch(error) {
        setError(error.message);
      }
      finally {
        setIsLoading(false);
      }
    }
    load();
  }, [hash]);

  if (isLoading) return <Loading />;
  if (error.length > 0) return <ErrorContainer message={error} hash={hash} />;
  return <QueryController queryData={queryData} pql={pql} />;
};

export default QueryLoader;
