import React from 'react';
import renderer from 'react-test-renderer';
import {Spin, IProps} from '../components/Spin';

it('render correctly spinner component', () => {
  const primaryProps: IProps = {
    spinning: true,
    children: null,
  };

  const SpinningComponent = renderer.create(<Spin {...primaryProps} />).toJSON();
  expect(SpinningComponent).toMatchSnapshot();

  const secondaryProps: IProps = {
    spinning: false,
    children: null,
  };

  const NotSpinningComponent = renderer.create(<Spin {...secondaryProps} />).toJSON();
  expect(NotSpinningComponent).toMatchSnapshot();
});
