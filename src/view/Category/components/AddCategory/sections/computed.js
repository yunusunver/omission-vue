export const computed = {

    nameErrors() {
        const errors = []
        if (!this.$v.lookupPost.name.$dirty) return errors;
        !this.$v.lookupPost.name.required && errors.push('Name alanı zorunludur.')
        return errors
    },
    typeErrors() {
        const errors = []
        if (!this.$v.lookupPost.type.$dirty) return errors;
        !this.$v.lookupPost.type.required && errors.push('Type alanı zorunludur.')
        return errors
    },
    orderIdErrors() {
        const errors = []
        if (!this.$v.lookupPost.orderId.$dirty) return errors;
        !this.$v.lookupPost.orderId.required && errors.push('OrderId alanı zorunludur.')
        return errors
    },
};