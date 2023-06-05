import NotesList from "./_components/notes-list";
import TimerCounter from "./_components/timer-counter";


export default function Home() {
  return (
    <main>
      <div className="m-10 text-center">
        <p>Hello World!</p>
        <NotesList />
        <TimerCounter />
      </div>
    </main>
  )
}
