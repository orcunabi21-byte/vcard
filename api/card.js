export default function handler(req, res) {
  const vcf = `
BEGIN:VCARD
VERSION:3.0
FN:Orçun Aslan
TEL:+905413011544
EMAIL:aslantisdesign@gmail.com
END:VCARD
  `;

  res.setHeader('Content-Type', 'text/vcard; charset=utf-8');
  res.setHeader('Content-Disposition', 'inline');
  res.status(200).send(vcf);
}
