/** Demo / contact form submissions → solutions@torro.ai */

export const DEMO_INBOX = 'solutions@torro.ai';

/**
 * Posts a demo request to FormSubmit (or a custom endpoint via VITE_DEMO_FORM_ENDPOINT).
 * First submission to a new inbox requires confirming the activation email at solutions@torro.ai.
 */
export async function submitDemoRequest(fields) {
  const endpoint =
    import.meta.env.VITE_DEMO_FORM_ENDPOINT ||
    `https://formsubmit.co/ajax/${DEMO_INBOX}`;

  const payload = {
    name: fields.name?.trim() || '',
    email: fields.email?.trim() || '',
    company: fields.company?.trim() || '',
    role: fields.role?.trim() || '',
    challenge: fields.challenge?.trim() || '—',
    source: fields.source || 'book-demo',
    _replyto: fields.email?.trim() || '',
    _subject: `Torro Demo Request — ${fields.company?.trim() || fields.name?.trim() || 'New lead'}`,
    _template: 'table',
    _captcha: 'false',
  };

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  let data = {};
  try {
    data = await response.json();
  } catch {
    data = {};
  }

  if (!response.ok || data.success === false || data.success === 'false') {
    throw new Error(data.message || 'Could not send your request. Please try again or email solutions@torro.ai.');
  }

  return data;
}
