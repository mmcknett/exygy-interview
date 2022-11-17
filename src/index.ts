
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
