import emailjs from '@emailjs/browser';
import { EMAIL_JS_SERVICE_ID,EMAIL_JS_TEMPLATE_ID,EMAIL_JS_PUBLIC_KEY } from '../../EMAIL_JS';
export default function mailHandler(req,res){
    // mail.setApiKey(process.env.SEND_MAIL_API_KEY);
    const body = JSON.parse(req.body);
    console.log(JSON.parse(req.body));
    // console.log(process.env.EMAIL_JS_SERVICE_ID);
    
    const data = {
        emailID: process.env.EMAIL_JS_SERVICE_ID,
    }
    emailjs.sendForm(process.env.EMAIL_JS_SERVICE_ID, process.env.EMAIL_JS_TEMPLATE_ID, req.body, process.env.EMAIL_JS_PUBLIC_KEY)
        .then((result)=>{
             console.log("Result: "+result.text);
        },(error)=>{
            console.log("Error: "+error.text);
        });
    res.status(200).json(data);
}