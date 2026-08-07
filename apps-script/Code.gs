const NOTIFY_EMAIL = 'tiffindevelopments@gmail.com';
const SHEET_NAME = 'Leads';

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    if (!sheet) throw new Error('Create a sheet tab named Leads.');
    const p = e.parameter || {};
    if (p.website) return json_({ ok: true });
    const created = new Date();
    sheet.appendRow([created, clean_(p.name), clean_(p.phone), clean_(p.email), clean_(p.service), clean_(p.message), clean_(p.page), 'New']);
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New website lead: ' + (clean_(p.name) || 'Unknown name'),
      htmlBody: '<h2>New Belleville Spray Foam lead</h2>' +
        '<p><b>Name:</b> ' + esc_(p.name) + '</p><p><b>Phone:</b> ' + esc_(p.phone) +
        '</p><p><b>Email:</b> ' + esc_(p.email) + '</p><p><b>Service:</b> ' + esc_(p.service) +
        '</p><p><b>Message:</b> ' + esc_(p.message) + '</p><p><b>Page:</b> ' + esc_(p.page) + '</p>'
    });
    return json_({ ok: true });
  } finally { lock.releaseLock(); }
}
function clean_(v) { return String(v || '').trim().slice(0, 2000); }
function esc_(v) { return clean_(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function json_(obj) { return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); }
