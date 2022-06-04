import { customRender } from '@test-utils';
import { MultipleSelectField } from './multiple-select-field.component';

describe('MultipleSelectField', () => {
  test('Should render MultipleSelectField component', async () => {
    const { asFragment } = customRender(
      <MultipleSelectField />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});