import { Resend } from 'resend';
import { RESEND_KEY } from '$env/static/private';

const resend = new Resend(RESEND_KEY);

export async function POST({ request }) {
	const { reason, firstName, lastName, email } = await request.json();

	try {
		const { data, error } = await resend.emails.send({
			from: `${firstName + ' ' + lastName} <onboarding@resend.dev>`,
			to: ['slimaster14@gmail.com'],
			subject: 'Voltage Request - ' + Date.now(),
			html: `
      <main style="font-family: monospace; height: 720px; background: oklch(20% 0 0);">
        <h1 style="color: #4ade80;">Take Home Request</h1>
        <h2>Reason: ${reason}</h3>
        <h2>Email: ${email}</h3>

        <br>
        <a href="https://voltage.beanarchy.org/accept/${Date.now()}" style="color: #4ade80;">Accept</a>
        <a style="color: #ef4444;" href="https://voltage.beanarchy.org/reject/${Date.now()}">Deny</a>
      </main>`
		});

		if (error) {
			return Response.json({ error }, { status: 500 });
		}

		return Response.json({ data });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
