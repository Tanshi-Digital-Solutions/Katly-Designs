import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'unsubscribed-emails.json');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Read current unsubscribed emails
    let emails = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      emails = JSON.parse(fileContent);
    }

    // Add email to unsubscribed list if not already present
    if (!emails.includes(email)) {
      emails.push(email);
      fs.writeFileSync(filePath, JSON.stringify(emails, null, 2));
    }

    return res.status(200).json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    console.error('Error handling unsubscribe:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
