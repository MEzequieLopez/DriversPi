const validation = (input) => {
    console.log("Input for validation:", input);
    let errors = {};
    const regexText = /^[a-zA-Z]{2,}$/;
    const regexImage = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;

    if (!regexText.test(input.forename)) {
        errors.forename = 'Forename must contain only letters';
    }
    if (!regexText.test(input.surname)) {
        errors.surname = 'Surname must contain only letters';
    }
    if (!regexText.test(input.nationality)) {
        errors.nationality = 'Nationality must contain only letters';
    }
   
    if (input.description.length < 10) {
        errors.description = 'Description should be longer';
    }
    if (!regexImage.test(input.image)) {
        errors.image = 'url is not valid';
    }
    if (!input.teams || input.teams.length === 0) {
        errors.teams = 'You must select at least one team';
    }

    console.log(errors)
    return errors;
 
};


export default validation;