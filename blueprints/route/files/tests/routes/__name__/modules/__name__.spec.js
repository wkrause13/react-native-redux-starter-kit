import {
  DEFAULT_ACTION,
  defaultActionFunction,
  default as <%= pascalEntityName %>Reducer
} from 'routes/<%= pascalEntityName %>/modules/<%= pascalEntityName %>'

describe('(Redux Module) <%= pascalEntityName %>', () => {
  it('Should export a constant DEFAULT_ACTION.', () => {
    expect(DEFAULT_ACTION).to.equal('DEFAULT_ACTION')
  })
})