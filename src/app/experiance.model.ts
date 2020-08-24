export class ExperianceModel {
  constructor(
    public image: string,
    public position: string,
    public comapnyName: string,
    public startDate: string,
    public endDate: string,
    public technology: string[],
    public jobDuties: string[]
  ) {
  }
}
