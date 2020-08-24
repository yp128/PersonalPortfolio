export class ProjectsModel {
  constructor(
    public image: string,
    public projectIntro: string,
    public projectName: string,
    public technologiesUsed: string[],
    public projectDescription: string[],
    public mainLang: string,
    public type: string[],
    public gitRepo: string
  ) {
  }
}
