const fs = require('fs');
const path = require('path');

const dir = './src/environments';
const file = 'environment.prod.ts';
const content = `
export const environment = {
  production: true,
  formspreeId: '${process.env.FORMSPREE_ID || 'maqdjkkv'}',
  whatsappNumber: '${process.env.WHATSAPP_NUMBER || '5218182007534'}'
};
`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(path.join(dir, file), content);
console.log('Environment file generated successfully.');
