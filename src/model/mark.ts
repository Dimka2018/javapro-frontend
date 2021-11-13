export class Mark {
  type: string
  attributes: Record<string, any>

  constructor(type: string, attributes: Record<string, any>) {
    this.type = type;
    this.attributes = attributes
  }
}
