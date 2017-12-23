export class FormioHelper {

  static extractOnlyPayload(submission: any): any {
    delete submission.data.submit;
    return submission.data;
  }
}

export class FormioRefreshType {
  public static SUBMISSION = 'submission';
  public static FORM = 'form';
}
