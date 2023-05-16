const OTP_REGEX = new RegExp('^[0-9]{1,6}$');
const PASS_REGEX = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^ws]).{8,30}$');
const IGNORE_CASE_REGEX = new RegExp('^G[a-b].*$');
const MUST_HAVE_LETTERS = /^(?=.*[a-zA-Z])[a-zA-Z\d\s\-_!@#$%^&*()+=?.,:®;/[\]{}|\\`~]*$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MOBILE_REGEX = /^\d{10,15}$/;
const ZIP_REGEX = /^[0-9]+$/;

export {
  OTP_REGEX,
  PASS_REGEX,
  IGNORE_CASE_REGEX,
  MUST_HAVE_LETTERS,
  EMAIL_REGEX,
  MOBILE_REGEX,
  ZIP_REGEX
};
