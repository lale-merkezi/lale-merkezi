import * as Yup from "yup"
import "yup-phone-lite"

const i18nMessages = {
  en: {
    required: "This field is required.",
    nameMin: "Names must be longer than 2 characters.",
    nameMax: "Names must be shorter than 100 characters.",
    phoneInvalid: "Invalid phone number.",
    gdpr: "Must accept the agreement.",
  },
  tr: {
    required: "Bu alan gereklidir.",
    nameMin: "Kullanıcı adları 2 harften uzun olmalıdır.",
    nameMax: "Kullanıcı adları 100 harften kısa olmalıdır.",
    phoneInvalid: "Geçersiz telefon numarası",
    gdpr: "Bu alan gereklidir.",
  },
  ar: {
    required: "هذا الفراغ مطلوب",
    nameMin: "يجب أن تكون الأسماء أطول من حرفين.",
    nameMax: "يجب أن تكون الأسماء أقصر من مائة حرف.",
    phoneInvalid: "رقم هاتف غير صحيح",
    gdpr: "هذا الفراغ مطلوب",
  },
}

const LeadValidationSchema = locale => {
  const t = i18nMessages[locale]
  return Yup.object().shape({
    fname: Yup.string()
      .min(2, t.nameMin)
      .max(50, t.nameMax)
      .required(t.required),
    lname: Yup.string()
      .min(2, t.nameMin)
      .max(50, t.nameMax)
      .required(t.required),
    phone: Yup.string().phone("TR", t.phoneInvalid).required(t.required),
    gdpr: Yup.boolean().oneOf([true], t.gdpr),
  })
}

export default LeadValidationSchema
