const { NEXT_PUBLIC_RECAPTCHA_SECRET_KEY } = process.env;

export default async function(req, res) {
  try {
    const { value } = JSON.parse(req.body);
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${value}`);
    const validation = await response.json();
    res.status(200).json(validation);
  } catch (error) {
    res.status(400).json(error.message)
  }
}
