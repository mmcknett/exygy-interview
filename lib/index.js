"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = exports.Form = void 0;
class Form {
    constructor(actionURL) {
        this.actionURL = actionURL;
        this.textFields = [];
    }
    addTextField(label, name, type, value) {
        this.textFields.push(new TextField(label, name, type, value));
    }
    findTextFieldByName(name) {
        const textField = this.textFields.find(tf => tf.name === name);
        return textField;
    }
    setTextFieldValue(name, value) {
        const textField = this.findTextFieldByName(name);
        if (textField) {
            textField.value = value;
        }
    }
}
exports.Form = Form;
class TextField {
    constructor(label, name, type, value) {
        this.label = label;
        this.name = name;
        this.type = type;
        if (value) {
            this.value = value;
        }
    }
}
exports.TextField = TextField;
