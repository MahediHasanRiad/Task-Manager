import cogoToast from 'cogo-toast'

let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
// let ValidationFileExtension = ["jpg", "JPG", "jpeg", "JPEG", "png", "PNG"]


class FormHelper{
    isEmpty(value){
        return value.length === 0
    }

    isMobile(value){
        return MobileRegx.test(value)
    }

    isEmail(value){
        return EmailRegx.test(value)
    }

    success(value){
        return cogoToast.success(value)
    }

    error(value){
        return cogoToast.error(value)
    }
}

export const {isEmpty, isMobile, isEmail, success, error} = new FormHelper()