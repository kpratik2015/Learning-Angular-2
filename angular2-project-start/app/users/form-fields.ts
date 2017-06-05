export class FormFields {
  constructor(
    public name: string,
    public email: string,
    public phone?: string,
    public street?: string,
    public suite?: string,
    public city?: string,
    public zipcode?: string
  ) {  }
}