import React from 'react';
import { Operator } from '../../../../state/pql/pql';
import EthereumBalanceLoader from '../builder/loaders/EthereumBalanceLoader';
import EthereumFunctionLoader from '../builder/loaders/EthereumFunctionLoader';
import HttpGetLoader from '../builder/loaders/HttpGetLoader';
import HttpPostLoader from '../builder/loaders/HttpPostLoader';
import PostgresLoader from '../builder/loaders/PostgresLoader';
import QuerySelectorContainer from '../QueryClosableContainer';
import SelectorButton from './SelectorButton';

interface LoaderSelector extends QuerySelectorContainer {
  addOperator: (operator: Operator) => void;
}

const LoaderSelector = ({ addOperator, onClose }: LoaderSelector): JSX.Element => {
  const onHttpGetClick = () => addOperator(new HttpGetLoader(''));
  const onHttpPostClick = () => addOperator(new HttpPostLoader('', { '': '' }));
  const onPostgressClick = () => addOperator(new PostgresLoader('', ''));
  const onEthBalanceClick = () => addOperator(new EthereumBalanceLoader('', '', undefined));
  const onEthFunctionClick = () => addOperator(new EthereumFunctionLoader('', '', '', ['']));

  return (
    <QuerySelectorContainer onClose={onClose}>
      <SelectorButton onClick={onHttpGetClick}>Http Get</SelectorButton>
      <SelectorButton onClick={onHttpPostClick}>Http Post</SelectorButton>
      <SelectorButton onClick={onPostgressClick}>Postgress</SelectorButton>
      <SelectorButton onClick={onEthBalanceClick}>Ethereum Balance</SelectorButton>
      <SelectorButton onClick={onEthFunctionClick}>Ethereum Function</SelectorButton>
    </QuerySelectorContainer>
  );
};

export default LoaderSelector;
