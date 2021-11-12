export abstract class Content {
  type: string

  protected constructor(type: string) {
    this.type = type
  }
}
