import { AbstractControl } from '../../node_modules/@angular/forms';

export class Validations {
  static ValidDocument(control: AbstractControl){
    const document = control.value;

    let sum: number = 0;
    let rest: number;
    let valid: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      document == '00000000000' ||
      document == '11111111111' ||
      document == '22222222222' ||
      document == '33333333333' ||
      document == '44444444444' ||
      document == '55555555555' ||
      document == '66666666666' ||
      document == '77777777777' ||
      document == '88888888888' ||
      document == '99999999999' ||
      !regex.test(document)
    )
    valid = false;
   else {
     for(let i = 1; i <= 9; i++)
      sum = sum + parseInt(document.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if(rest == 10 || rest == 11) rest = 0;
    if(rest != parseInt(document.substring(9, 10))) valid = false;

    sum = 0;
    for (let i = 1; i <= 10; i++)
      sum = sum + parseInt(document.substring(i -1, i )) * (12 -i);
      rest = (sum * 10) % 11;

    if(rest == 10 || rest == 11) rest = 0;
    if(rest != parseInt(document.substring(10, 11))) valid = false;
    valid = true;
   }

   if(valid) return null;

   return { invalidDocument: true };
  }

  static ThanThat16Years(control: AbstractControl)
  {
    const birth = control.value;
    const [year, month, day] = birth.split('-');
    const today = new Date();
    const birthDate = new Date(year, month, day, 0, 0, 0);
    const timeToTest = 1000 * 60 * 60 * 24 * 365 * 16;

    if(today.getTime() - birthDate.getTime() >= timeToTest)
     return null;

     return { children: true};
  }

}
