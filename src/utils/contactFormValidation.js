const NAME_PATTERN = /^[\p{L}][\p{L}\s'-]{1,49}$/u;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const ALLOWED_EXTENSIONS = ['.pdf', '.doc', '.docx'];
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

export function isValidName(value) {
  const trimmed = value.trim();
  return NAME_PATTERN.test(trimmed);
}

export function isValidEmail(value) {
  return EMAIL_PATTERN.test(value.trim());
}

export function validateDocument(file) {
  if (!file) return null;

  const extension = `.${file.name.split('.').pop()?.toLowerCase() || ''}`;
  const hasValidExtension = ALLOWED_EXTENSIONS.includes(extension);
  const hasValidMime = !file.type || ALLOWED_MIME_TYPES.includes(file.type);

  if (!hasValidExtension && !hasValidMime) {
    return 'documentInvalid';
  }

  if (file.size > MAX_FILE_SIZE) {
    return 'documentSize';
  }

  return null;
}

export function validateContactForm({ name, lastName, email, document }) {
  const errors = {};

  if (!isValidName(name)) {
    errors.name = 'nameInvalid';
  }

  if (!isValidName(lastName)) {
    errors.lastName = 'lastNameInvalid';
  }

  if (!isValidEmail(email)) {
    errors.email = 'emailInvalid';
  }

  const documentError = validateDocument(document);
  if (documentError) {
    errors.document = documentError;
  }

  return errors;
}
