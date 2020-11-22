export const computed = {

    titleErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.code.validations.required;
        const errors = []
        if (!this.$v.codePost.title.$dirty) return errors;
        !this.$v.codePost.title.required && errors.push(required)
        return errors;
    },
    descriptionErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.code.validations.required;
        const errors = []
        if (!this.$v.codePost.description.$dirty) return errors;
        !this.$v.codePost.description.required && errors.push(required)
        return errors;
    },
    languageErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.code.validations.required;
        const errors = []
        if (!this.$v.codePost.lookupId.$dirty) return errors;
        !this.$v.codePost.lookupId.required && errors.push(required)
        return errors;
    },
    
    codeErrors() {
        var locale = this.$i18n.locale;
        var message = this.$i18n.messages[locale];
        var required = message.code.validations.required;
        const errors = []
        if (!this.$v.codePost.code.$dirty) return errors;
        !this.$v.codePost.code.required && errors.push(required)
        return errors;
    },
   
};