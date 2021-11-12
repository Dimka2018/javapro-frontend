export abstract class ArticleComponent {
  public type: string

  protected constructor(type: string) {
    this.type = type;
  }
}
