
export const computed = {
    
    nameErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.category.validations.required;
        const errors = []
        if (!this.$v.lookupPost.name.$dirty) return errors;
        !this.$v.lookupPost.name.required && errors.push(required);
        return errors
    },
    typeErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.category.validations.required;
        const errors = []
        if (!this.$v.lookupPost.type.$dirty) return errors;
        !this.$v.lookupPost.type.required && errors.push(required)
        return errors
    },
    orderIdErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.category.validations.required;
        const errors = []
        if (!this.$v.lookupPost.orderId.$dirty) return errors;
        !this.$v.lookupPost.orderId.required && errors.push(required);
        return errors
    },
};