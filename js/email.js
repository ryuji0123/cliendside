function sendMail(mail_to, name)
{
	Email.send({
		From : 'asutarisukumul@gmail.com',
		To : mail_to,
		Subject : 'subject',
		Body : 'body',
		Host : 'smtp25.elasticemail.com',
		Username : 'asutarisukumul@gmail.com',
		Password : '59640544-0cea-4950-a4e4-65b5ac25d256'
	}).then(
		message => console.log(message)
	);
}
