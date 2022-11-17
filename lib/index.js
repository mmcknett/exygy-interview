"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TextField = exports.Form = void 0;
class Form {
    constructor(actionURL) {
        this.lastOrder = 0;
        this.actionURL = actionURL;
        this.textFields = [];
    }
    addTextField(label, name, type, value) {
        // NOTE: this.lastOrder may interfere with later ACs.
        this.textFields.push(new TextField(label, name, this.lastOrder, type, value));
        this.lastOrder += 1;
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
    constructor(label, name, order, type, value) {
        this.label = label;
        this.name = name;
        this.order = order;
        this.type = type;
        if (value) {
            this.value = value;
        }
    }
}
exports.TextField = TextField;
