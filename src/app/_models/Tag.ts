export class Tag {
  static readonly ANGULAR = new Tag('Angular', 'red');
  static readonly TYPESCRIPT = new Tag('TypeScript', 'lightblue');
  static readonly JAVA = new Tag('Java', 'orange');
  static readonly JAVASCRIPT = new Tag('JavaScript', '#fce803');
  static readonly REACT = new Tag('React', 'blue');



  private constructor(public readonly key: string, public readonly color: string) {


  }

  toString() {
    return this.key;
  }
}
