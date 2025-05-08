import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(email: string, name: string, message: string) {
try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "myname14saif@gmail.com",
        subject: `New Contact Message from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      });
  
      
      return data
} catch (error) {
    console.error(error,"error from mail")
    return error
}
}
