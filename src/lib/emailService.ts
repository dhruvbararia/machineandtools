import emailjs from 'emailjs-com'

interface FormData {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  message: string
}

export const sendEmail = async (formData: FormData) => {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Modern Chain Machines',
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    return { success: true, result }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
}