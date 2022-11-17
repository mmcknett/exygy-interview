import { Form, TextField } from ".";

describe('The Form', () => {
  it('Can have a text field added to it', () => {
    // const textField = new TextField('anyLabel', 'anyName', )
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel', 'anyName', 'anyType')

    expect(form.textFields.length).toEqual(1);
  });

  it('Can find a text field by its name', () => {
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel1', 'name-1', 'anyType')
    form.addTextField('anyLabel2', 'name-2', 'anyType')

    const actual = form.findTextFieldByName('name-1');

    expect(actual!.name).toBe('name-1');
  });

  it('Find returns something falsy if there is no textfield of a particular name', () => {
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel1', 'name-1', 'anyType')
    form.addTextField('anyLabel2', 'name-2', 'anyType')

    const actual = form.findTextFieldByName('name-3');

    expect(actual).toBeFalsy;
  });

  it('Can set a value of a named field', () => {
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel1', 'name-1', 'anyType')
    form.addTextField('anyLabel2', 'name-2', 'anyType')

    form.setTextFieldValue('name-1', 'aNewValue');

    const tf = form.findTextFieldByName('name-1');
    expect(tf!.value).toBe('aNewValue');
  });

  it('Can update a textfield to a new order at the end', () => {
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel1', 'a', 'anyType');
    form.addTextField('anyLabel2', 'b', 'anyType');
    form.addTextField('anyLabel3', 'c', 'anyType');

    form.setOrder('c', 0);

    expect(form.textFields).toMatchObject([
      new TextField('anyLabel3', 'c', 'anyType'),
      new TextField('anyLabel1', 'a', 'anyType'),
      new TextField('anyLabel2', 'b', 'anyType')
    ])
  });

  it('Can update a textfield to a new order at the beginning', () => {
    const form = new Form('someActionUrl');
    form.addTextField('anyLabel1', 'a', 'anyType');
    form.addTextField('anyLabel2', 'b', 'anyType');
    form.addTextField('anyLabel3', 'c', 'anyType');

    form.setOrder('a', 2);

    expect(form.textFields).toMatchObject([
      new TextField('anyLabel2', 'b', 'anyType'),
      new TextField('anyLabel3', 'c', 'anyType'),
      new TextField('anyLabel1', 'a', 'anyType')
    ])
  })
});