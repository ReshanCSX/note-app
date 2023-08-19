
export default function Sidebar(props) {
    const noteElements = props.notes.map((note) => {
        const noteBody = note.body.split("\n")[0]
        const selectedNote = note.id === props.currentNote.id
        return (
            <div key={note.id}>
                <div
                    className={`title ${selectedNote ? "selected-note" : ""}`}
                    onClick={() => props.setCurrentNoteId(note.id)}
                >
                    <h4 className="text-snippet">{noteBody ? noteBody : "Untitled Note"}</h4>

                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteNote(note.id)}
                    >
                        <i className={`gg-trash trash-icon ${selectedNote ? "trash-icon-color-light" : "trash-icon-color-dark"}`}></i>
                    </button>

                </div>
            </div>
        )}
    )

    return (
        <section className="pane sidebar">
            <div className="sidebar--header">
                <h3>Notes</h3>
                <button className="new-note" onClick={props.newNote}>+</button>
            </div>
            {noteElements}
        </section>
    )
}
