import useTime from "./hooks/useTime"


const App = () => {
  const day = useTime<string>('DAY')
  const hour = useTime<string>('HOUR')

  return (
    <div>
      <h3>Day: {day}</h3>
      <h3>Hour: {hour}</h3>
    </div>
  )
}

export default App