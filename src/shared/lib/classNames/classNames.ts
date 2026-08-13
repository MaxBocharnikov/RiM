type ClassValue = string | null | undefined | false | Record<string, boolean | undefined | null>;

export const classNames = (...args: ClassValue[]): string => {
  const classes: string[] = [];

  for (const arg of args) {
    if (!arg) continue;

    if (typeof arg === 'string') {
      classes.push(arg);
    } else {
      for (const [key, value] of Object.entries(arg)) {
        if (value) classes.push(key);
      }
    }
  }

  return classes.join(' ');
};
