const validation = (input) => {
    let errors = {};
    const regexText = /^[a-zA-Z]{2,}$/;
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    const maxLength = 10;
    const regexInvalidChars = /[^a-zA-Z0-9\s:.,"]/g;
    const maxLengthDescription = 500;
    const regexRepeatedLetters = /([a-zA-Z])\1{3,}/g;
    const repeatedLetters = input.description.match(regexRepeatedLetters);
    const repeatedLettersforename = input.forename.match(regexRepeatedLetters);
    const repeatedLetterssurname = input.surname.match(regexRepeatedLetters);
    const repeatedLettersnationality = input.nationality.match(regexRepeatedLetters);
    
    if (!regexText.test(input.forename)) {
    errors.forename = "Forename must contain only letters";
  } else if (input.forename.length > maxLength) {
    errors.forename = `Forename must be ${maxLength} characters or less`;
  } else if (repeatedLettersforename) {
    errors.forename =
      "not repeat the same letter more than 3 times consecutively";
  }

  if (!regexText.test(input.surname)) {
    errors.surname = "Surname must contain only letters";
  } else if (input.surname.length > maxLength) {
    errors.surname = `Surname must be ${maxLength} characters or less`;
  } else if (repeatedLetterssurname) {
    errors.surname =
      "not repeat the same letter more than 3 times consecutively";
  }


  if (!regexText.test(input.nationality)) {
    errors.nationality = "Nationality must contain only letters";
  } else if (input.nationality.length > maxLength) {
    errors.nationality = `nationality must be ${maxLength} characters or less`;
  } else if (repeatedLettersnationality) {
    errors.surname =
      "not repeat the same letter more than 3 times consecutively";
  }


  if (repeatedLetters) {
    errors.description =
      "not repeat the same letter more than 3 times consecutively";
  } else if (input.description.length < 20) {
    errors.description = "Description should be longer";
} else if (input.description.length > maxLengthDescription) {
    errors.description = `Description must be ${maxLengthDescription} characters or less`;
}
 if (regexInvalidChars.test(input.description)) {
  errors.description =
    "Description must not contain special characters or URLs";
 }

  if (!regexImage.test(input.image)) {
    errors.image = "url is not valid";
  }
  if (!input.teams || input.teams.length === 0) {
    errors.teams = "You must select at least one team";
  }

const dateOfBirth = new Date(input.dob);
const ageLimitMin = 18;
const ageLimitMax = 40;

  if (isNaN(dateOfBirth.getTime())) {
    errors.dob = "Invalid Date of Birth";
  }

  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const m = today.getMonth() - dateOfBirth.getMonth();
  
  if (m < 0 || (m === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  
  if (age < ageLimitMin || age > ageLimitMax) {
    errors.dob = `Date of Birth must be between ${ageLimitMin} and ${ageLimitMax} years ago`;
  }

  return errors;
};

export default validation;
