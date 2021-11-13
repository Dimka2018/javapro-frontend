import {Content} from "./content";

export class Image extends Content {

  attributes: Record<string, any>

  constructor(attributes: Record<string, any>) {
    super("IMAGE")
    this.attributes = attributes
  }
}
