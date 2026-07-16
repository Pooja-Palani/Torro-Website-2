/** Demo form submissions → digihub@torro.ai */

export const DEMO_INBOX = 'digihub@torro.ai';

const buildMessage = (fields) =>
  [
    'New Torro demo request',
    '',
    `Name: ${fields.name || '—'}`,
    `Email: ${fields.email || '—'}`,
    `Company: ${fields.company || '—'}`,
    `Role: ${fields.role || '—'}`,
    `Challenge: ${fields.challenge || '—'}`,
    `Source: ${fields.source || 'book-demo'}`,
  ].join('\n');

export const buildMailtoHref = (fields) => {
  const subject = `Torro Demo Request — ${fields.company || fields.name || 'New lead'}`;
  return `mailto:${DEMO_INBOX}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage(fields))}`;
};

const isActivationMessage = (message = '') =>
  /activation|activate form|actived|activate/i.test(String(message));

async function postJson(url, payload) {
  const response = await fetch(url, {
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

  return { response, data };
}

async function sendViaWeb3Forms(fields) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) return null;

  const { response, data } = await postJson('https://api.web3forms.com/submit', {
    access_key: accessKey,
    subject: `Torro Demo Request — ${fields.company || fields.name || 'New lead'}`,
    from_name: 'Torro Website',
    name: fields.name,
    email: fields.email,
    company: fields.company,
    role: fields.role,
    challenge: fields.challenge || '—',
    source: fields.source || 'book-demo',
    message: buildMessage(fields),
    replyto: fields.email,
  });

  if (response.ok && data.success) {
    return { ok: true, provider: 'web3forms' };
  }

  return { ok: false, provider: 'web3forms', message: data.message };
}

async function sendViaCustomEndpoint(fields) {
  const endpoint = import.meta.env.VITE_DEMO_FORM_ENDPOINT;
  if (!endpoint) return null;

  const { response, data } = await postJson(endpoint, {
    name: fields.name,
    email: fields.email,
    company: fields.company,
    role: fields.role,
    challenge: fields.challenge || '—',
    source: fields.source || 'book-demo',
    to: DEMO_INBOX,
    subject: `Torro Demo Request — ${fields.company || fields.name || 'New lead'}`,
    message: buildMessage(fields),
  });

  if (response.ok && data.success !== false && data.success !== 'false') {
    return { ok: true, provider: 'custom' };
  }

  return { ok: false, provider: 'custom', message: data.message };
}

async function sendViaFormSubmit(fields) {
  const { response, data } = await postJson(`https://formsubmit.co/ajax/${DEMO_INBOX}`, {
    name: fields.name,
    email: fields.email,
    company: fields.company,
    role: fields.role,
    challenge: fields.challenge || '—',
    source: fields.source || 'book-demo',
    message: buildMessage(fields),
    _replyto: fields.email,
    _subject: `Torro Demo Request — ${fields.company || fields.name || 'New lead'}`,
    _template: 'table',
    _captcha: 'false',
    _honey: '',
  });

  if (response.ok && (data.success === true || data.success === 'true')) {
    return { ok: true, provider: 'formsubmit' };
  }

  if (isActivationMessage(data.message)) {
    return {
      ok: true,
      provider: 'formsubmit-activation',
      needsMailtoBackup: true,
      message: data.message,
    };
  }

  return { ok: false, provider: 'formsubmit', message: data.message || 'Submission failed' };
}

/**
 * Sends a demo request to digihub@torro.ai.
 * Returns { ok, provider, needsMailtoBackup?, mailtoHref? }.
 */
export async function submitDemoRequest(fields) {
  const payload = {
    name: fields.name?.trim() || '',
    email: fields.email?.trim() || '',
    company: fields.company?.trim() || '',
    role: fields.role?.trim() || '',
    challenge: fields.challenge?.trim() || '',
    source: fields.source || 'book-demo',
  };

  const attempts = [
    await sendViaWeb3Forms(payload),
    await sendViaCustomEndpoint(payload),
  ].filter(Boolean);

  for (const result of attempts) {
    if (result.ok) return { ...result, mailtoHref: buildMailtoHref(payload) };
  }

  const formSubmit = await sendViaFormSubmit(payload);
  if (formSubmit.ok) {
    return {
      ...formSubmit,
      mailtoHref: buildMailtoHref(payload),
    };
  }

  // Last resort: visitor can complete via their email client
  return {
    ok: true,
    provider: 'mailto',
    needsMailtoBackup: true,
    mailtoHref: buildMailtoHref(payload),
    message: formSubmit.message,
  };
}
