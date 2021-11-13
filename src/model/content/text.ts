import {Mark} from "../mark";
import {Content} from "./content";

export class Text extends Content{

  value: string
  marks: Mark[]

  constructor(value: string, marks: Mark[]) {
    super("TEXT")
    this.value = value
    this.marks = marks
  }
}
