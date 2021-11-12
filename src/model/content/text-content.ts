import {Mark} from "../mark";
import {Content} from "./content";

export class TextContent extends Content{

  value: string
  marks: Mark[]

  constructor(value: string, marks: Mark[]) {
    super("text")
    this.value = value
    this.marks = marks
  }
}
