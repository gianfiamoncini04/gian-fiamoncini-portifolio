import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { useState } from 'react'
import Alert from '@/components/alert'

export default function Form() {
	const {t} = useTranslation('common')
	
	const formSchema = z.object({
		name: z.string()
		.nonempty(t('form.validation.name'))
		.transform(name => {
			return name.trim().split(' ').map(w => {
				return w[0].toLocaleUpperCase().concat(w.substring(1))
			}).join(' ')
		}),
		email: z.string()
		.nonempty(t('form.validation.email.empty'))
		.email(t('form.validation.email.invalid'))
		.toLowerCase(),
		message: z.string().nonempty(t('form.validation.message.empty')).min(20, t('form.validation.message.min')).max(300, t('form.validation.message.max'))
	})
	
	type FormSchemaType = z.infer<typeof formSchema>

	const { register, handleSubmit, formState:{errors}} = useForm<FormSchemaType>({
		resolver: zodResolver(formSchema)
	})

	const [ notsuc, setNotSuc ] = useState<EmailJSResponseStatus>()
	const [ noterr, setNotErr ] = useState<EmailJSResponseStatus>()

	function sendEmail(data: Record<string, unknown> | undefined) {
		emailjs.send(
			"service_m2t90xn",
			"template_vvgoyfs",
			data,
			"dFyA-AabOTZ8uFaKH"
		).then(
			(result) => {
				setNotSuc(result);
			},(error) => {
				setNotErr(error)
			} 
		);
	}

	return (
		<>
		<section className='form'>
			<h1 className="text-3xl text-black dark:text-white mb-8 font-bold">{t('form.title')}</h1>
			<form onSubmit={handleSubmit(sendEmail)} className="flex flex-col w-[200px] gap-6 self-center">
				<div className='flex flex-col font-sans'>
					{/* <label htmlFor="name" className="text-black dark:text-white text-md">{t('form.placeholders.name')}</label> */}
					<input type="text" id="name" {...register('name')}  placeholder={t('form.placeholders.name')} className="inputs h-8"/> 
					{errors.name && <small className="text-red-500">{errors.name.message}</small>}
				</div>
				<div className='flex flex-col font-sans'>
					{/* <label htmlFor="email" className="text-black dark:text-white text-md">Email</label> */}
					<input type="email" id="email" {...register('email')} placeholder="Email" className="inputs h-8"/>
					{errors.email && <small className="text-red-500">{errors.email.message}</small>}
				</div>
				<div className='flex flex-col font-sans'>
					{/* <label htmlFor="message" className="text-black dark:text-white text-md">{t('form.placeholders.message')}</label> */}
					<textarea id="message" {...register('message')} placeholder={t('form.placeholders.message')} className="inputs h-24" />
					{errors.message && <small className="text-red-500">{errors.message.message}</small>}
				</div>

				<button type="submit" className='btn-send'>{t('form.placeholders.submit')}</button>
			</form>
		</section>

		{notsuc && <Alert describe={t('form.notification.done')} color="text-green-500"/>}
		{noterr && <Alert describe={t('form.notification.error')} color="text-red-500"/>}	
		</>
	);
}
