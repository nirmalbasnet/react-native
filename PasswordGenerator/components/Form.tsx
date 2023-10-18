import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import {passwordlengthValidator} from '../validation-schema/passwordLengthValidator.schema';
import PasswordOptions from './PasswordOptions';
import FormError from './FormError';
import CreatedPassword from './CreatedPassword';

interface FormFields {
  passwordLength: string;
}

const INITIAL_VALUE = {
  passwordLength: '',
};

const Form = () => {
  const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
  const numberCharacters = '0123456789';
  const specialCharacters = '!@#$%&*_+-?';

  const [includeUppercase, setIncludeUppercase] = useState<boolean>(false);
  const [includeNumber, setIncludeNumber] = useState<boolean>(false);
  const [includeSpecialChars, setIncludeSpecialChars] =
    useState<boolean>(false);
  const [createdPassword, setCreatedPassword] = useState<string | undefined>(
    undefined,
  );

  const handleIncludeUppercase = (set: boolean) => {
    setIncludeUppercase(set);
  };

  const handleIncludeNumber = (set: boolean) => {
    setIncludeNumber(set);
  };

  const handleIncludeSpecialChars = (set: boolean) => {
    setIncludeSpecialChars(set);
  };

  const includeUppercaseInPassword = (password: string) => {
    const selectedUppercaseChar = uppercaseCharacters.charAt(
      Math.floor(Math.random() * 26),
    );
    return `${password}${selectedUppercaseChar}`;
  };

  const includeNumberInPassword = (password: string) => {
    const selectedNumberChar = numberCharacters.charAt(
      Math.floor(Math.random() * 10),
    );
    return `${password}${selectedNumberChar}`;
  };

  const includeSpecialCharsInPassword = (password: string) => {
    const selectedSpecialChar = specialCharacters.charAt(
      Math.floor(Math.random() * 11),
    );
    return `${password}${selectedSpecialChar}`;
  };

  const generatePasswordString = (password: string, passwordLength: number) => {
    const currentLength = password.length;

    let possiblePasswordChars = lowercaseCharacters;
    if (includeUppercase) {
      possiblePasswordChars += uppercaseCharacters;
    }

    if (includeNumber) {
      possiblePasswordChars += numberCharacters;
    }

    if (includeSpecialChars) {
      possiblePasswordChars += specialCharacters;
    }

    const possiblePasswordCharsLength = possiblePasswordChars.length;

    for (let i = currentLength; i < passwordLength; i++) {
      const selectedChar = possiblePasswordChars.charAt(
        Math.floor(Math.random() * possiblePasswordCharsLength),
      );
      password += selectedChar;
    }
    return password;
  };

  const shufflePassword = (password: string) => {
    // Convert the input string to an array of characters
    const characters = password.split('');

    // Shuffle the array using the Fisher-Yates shuffle algorithm
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }

    // Convert the shuffled array back to a string
    const shuffledString = characters.join('');

    return shuffledString;
  };

  const processGeneratePassword = (values: FormFields) => {
    if (!values.passwordLength) {
      return;
    }

    const passwordLengthNumber = +values.passwordLength;
    if (passwordLengthNumber < 4 || passwordLengthNumber > 16) {
      return;
    }

    let generatedPassword = '';
    if (includeUppercase) {
      generatedPassword = includeUppercaseInPassword(generatedPassword);
    }

    if (includeNumber) {
      generatedPassword = includeNumberInPassword(generatedPassword);
    }

    if (includeSpecialChars) {
      generatedPassword = includeSpecialCharsInPassword(generatedPassword);
    }

    generatedPassword = generatePasswordString(
      generatedPassword,
      passwordLengthNumber,
    );

    const finalPassword = shufflePassword(generatedPassword);
    setCreatedPassword(finalPassword);
  };

  const formik = useFormik({
    initialValues: INITIAL_VALUE,
    validationSchema: passwordlengthValidator,
    onSubmit: (values: FormFields) => {
      processGeneratePassword(values);
    },
  });

  const handleSubmit = () => {
    formik.submitForm();
  };

  const handleReset = () => {
    formik.resetForm();
    setIncludeUppercase(false);
    setIncludeNumber(false);
    setIncludeSpecialChars(false);
    setCreatedPassword(undefined);
  };

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.formContainer_text}>Password Length</Text>
        <View>
          <TextInput
            placeholder="Ex. 8"
            keyboardType="numeric"
            style={styles.formContainer_input}
            onChangeText={formik.handleChange('passwordLength')}
            onBlur={formik.handleBlur('passwordLength')}
            value={formik.values.passwordLength}
          />
          {formik.errors.passwordLength && formik.touched.passwordLength && (
            <FormError error={formik.errors.passwordLength} />
          )}
          <View style={styles.formContainer_options}>
            <PasswordOptions
              includeUppercase={includeUppercase}
              includeNumber={includeNumber}
              includeSpecialChars={includeSpecialChars}
              handleIncludeUppercase={handleIncludeUppercase}
              handleIncludeNumber={handleIncludeNumber}
              handleIncludeSpecialChars={handleIncludeSpecialChars}
            />
          </View>
          <View style={styles.formContainer_action}>
            <TouchableHighlight
              onPress={handleSubmit}
              style={[
                styles.formContainer_action_button,
                styles.formContainer_action_button_submit,
              ]}>
              <Text style={styles.formContainer_action_button_label}>
                Generate
              </Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={handleReset}
              style={[
                styles.formContainer_action_button,
                styles.formContainer_action_button_reset,
              ]}>
              <Text
                style={[
                  styles.formContainer_action_button_label,
                  styles.formContainer_action_button_label_reset,
                ]}>
                Reset
              </Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>

      {createdPassword && <CreatedPassword password={createdPassword} />}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
  },
  formContainer_text: {
    marginBottom: 10,
  },
  formContainer_input: {
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  formContainer_options: {
    marginTop: 15,
  },
  formContainer_action: {
    flex: 2,
    marginVertical: 15,
    flexDirection: 'row',
  },
  formContainer_action_button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: 100,
    marginRight: 10,
  },
  formContainer_action_button_label: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  formContainer_action_button_label_reset: {
    color: '#fff',
  },
  formContainer_action_button_submit: {
    backgroundColor: '#2879E6',
  },
  formContainer_action_button_reset: {
    backgroundColor: '#666666',
  },
});

export default Form;
