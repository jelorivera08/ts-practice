function interpret(command: string): string {
  while (command.includes("(al)") || command.includes("()")) {
    command = command.replace("(al)", "al").replace("()", "o");
  }

  return command;
}
