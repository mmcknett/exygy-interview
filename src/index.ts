
export class Form {
  actionURL: string
  textFields: TextField[]

  constructor(actionURL: string) {
    this.actionURL = actionURL;
    this.textFields = []
  }

  addTextField(label: string, name: string, type: string, value?: string) {
    this.textFields.push(new TextField(label, name, type, value));
  }

  findTextFieldByName(name: string) {
    const textField = this.textFields.find(tf => tf.name === name);
    return textField;
  }

  setTextFieldValue(name: string, value: string) {
    const textField = this.findTextFieldByName(name);
    if (textField) {
      textField.value = value;
    }
  }

  setOrder(name: string, order: number) {
    const iTextField = this.textFields.findIndex(tf => tf.name === name);
    if (iTextField < 0) {
      return;
    }

    // Remove the found element from the list and re-insert it @ order
    const textField = this.textFields[iTextField];
    this.textFields.splice(iTextField, 1);
    this.textFields.splice(order, 0, textField);
  }
}


export class TextField {
  label: string
  name: string
  type: string
  value?: string

  constructor(label: string, name: string, type: string, value?: string) {
    this.label = label;
    this.name = name;
    this.type = type;
    if (value) {
      this.value = value
    }
  }
}
