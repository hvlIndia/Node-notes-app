const fs = require("fs");
const chalk = require("chalk");

const getnotes = () => {
  return "Tomorroow 15th August (Independece Day)";
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find(note => {
    return note.title === title;
  });

  debugger

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note saved successfully!"));
  } else {
    console.log(chalk.red.inverse("Title already exist"));
  }
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = title => {
  const notes = loadNotes();
  const noteToKeep = notes.filter(note => {
    return note.title !== title;
  });

  if (notes.length > noteToKeep.length) {
    console.log(chalk.green.inverse("Note removed successfully!"));
    saveNotes(noteToKeep);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

const listNotes = () => {
  const notes = loadNotes();

  console.log(chalk.inverse("Your Notes"));

  notes.forEach(note => {
    console.log(note.title);
  });
};

const readNotes = title => {
  const notes = loadNotes();
  const note = notes.find(note => {
    return note.title === title;
  });

  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.red.inverse("Note not found!"));
  }
};

module.exports = {
  gernotes: getnotes,
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
