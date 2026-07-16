export async function GET() {
	const content = `# Swarikaro

Website: https://swarikaro.com

About:
https://swarikaro.com/about

Partner:
https://swarikaro.com/partner

FAQ:
https://swarikaro.com/faq

Contact:
https://swarikaro.com/contact

Privacy Policy:
https://swarikaro.com/privacy-policy

Terms & Conditions:
https://swarikaro.com/terms-and-condition

Description:
Swarikaro is an Indian mobility platform that helps users discover vehicle rental options and enables vehicle owners and rental businesses to connect with customers.

Primary Services:
- Car Rentals
- Bike Rentals
- Scooter Rentals
- Vehicle Partner Program
`;

	return new Response(content, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
}
