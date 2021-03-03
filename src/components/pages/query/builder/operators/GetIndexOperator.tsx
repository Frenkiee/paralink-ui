import React from 'react';
import { GetIndexPqlOperator, OperatorStep } from '../../../../../pql/operators';
import { Input, Label } from '../../../../common/Inputs';
import { Operator, RefreshCallback } from '../../../../../pql/pql';

export default class GetIndexOperator implements Operator {
  title = 'Get index';
  private params: number = 0;

  constructor(params: number) {
    this.params = params;
  }

  build(): GetIndexPqlOperator {
    return {
      params: this.params,
      step: OperatorStep.GetIndex,
    };
  }

  renderConfig(refresh: RefreshCallback) {
    const onChange = (value: number) => {
      this.params = value;
      refresh();
    }
    return (
      <>
        <Label name='Index:' />
        <Input value={this.params} onChange={onChange} type='number' />
      </>
    );
  }
}