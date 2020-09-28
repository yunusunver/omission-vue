export const computed = {

    titleErrors() {
        const errors = []
        if (!this.$v.codePost.title.$dirty) return errors;
        !this.$v.codePost.title.required && errors.push('Title alanı zorunludur.')
        return errors;
    },
    descriptionErrors() {
        const errors = []
        if (!this.$v.codePost.description.$dirty) return errors;
        !this.$v.codePost.description.required && errors.push('Description alaanı zorunludur.')
        return errors;
    },
    languageErrors() {
        const errors = []
        if (!this.$v.codePost.lookupId.$dirty) return errors;
        !this.$v.codePost.lookupId.required && errors.push('Language alanı zorunludur.')
        return errors;
    },
    
    codeErrors() {
        const errors = []
        if (!this.$v.codePost.code.$dirty) return errors;
        !this.$v.codePost.code.required && errors.push('Code alanı zorunludur.')
        return errors;
    },
   
};