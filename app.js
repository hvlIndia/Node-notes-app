const yargs = require("yargs");
const notes = require("./notes.js");

//cusmize yargs version//
yargs.version("1.1.0");

//create add command//
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    },
    body: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  }
});

//create remove command//
yargs.command({
  command: "remove",
  describe: "Note removed",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.removeNote(argv.title);
  }
});

//create read command//
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string"
    }
  },
  handler(argv) {
    notes.readNotes(argv.title);
  }
});

//create list command//
yargs.command({
  command: "list",
  describe: "List of notes",
  handler() {
    notes.listNotes();
  }
});

//add, remove, read, list//

yargs.parse();
