declare module 'classnames' {
  type Value = string | number | boolean | undefined | null;
  type Mapping = { [key: string]: any };
  type ArgumentArray = Array<Argument>;
  type Argument = Value | Mapping | ArgumentArray;

  interface ClassNames {
    (...args: ArgumentArray): string;
  }

  const classNames: ClassNames;
  export = classNames;
} 