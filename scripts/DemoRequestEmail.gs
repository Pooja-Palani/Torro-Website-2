/**
 * Google Apps Script — Demo request email relay
 *
 * Deploy once, then set VITE_DEMO_FORM_ENDPOINT to the Web App URL.
 *
 * Setup:
 * 1. https://script.google.com → New project
 * 2. Paste this file
 * 3. Deploy → New deployment → Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL into .env:
 *    VITE_DEMO_FORM_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
 */

const TO_EMAIL = 'solutions@torro.ai';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents || '{}');
    const name = data.name || '—';
    const email = data.email || '—';
    const company = data.company || '—';
    const role = data.role || '—';
    const challenge = data.challenge || '—';
    const source = data.source || 'book-demo';
    const subject =
      data.subject || `Torro Demo Request — ${company !== '—' ? company : name}`;

    const body = [
      'New Torro demo request',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      `Challenge: ${challenge}`,
      `Source: ${source}`,
      '',
      `Submitted: ${new Date().toISOString()}`,
    ].join('\n');

    MailApp.sendEmail({
      to: TO_EMAIL,
      subject: subject,
      body: body,
      replyTo: email !== '—' ? email : undefined,
    });

    return ContentService.createTextOutput(
      JSON.stringify({ success: true }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: String(err) }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, service: 'torro-demo-request' }),
  ).setMimeType(ContentService.MimeType.JSON);
}
