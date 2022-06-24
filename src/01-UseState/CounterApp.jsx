import { useState } from "react"

export const CounterApp = () => {

  const [state, setCounter] = useState(
    {
      counter1: 10,
      counter2: 20,
      counter3: 30
    }
  )

  const { counter1 , counter2 , counter3 } = state


  return (
    <>
      <h1> Counter {counter1}</h1>
      <h1> Counter {counter2}</h1>
      <h1> Counter {counter3}</h1>
      <hr />
      <div className="d-grid gap-2 col-2 mx-auto">
        <button
          type="button" className="btn btn-primary btn-lg"
          onClick={() => setCounter(
            {
              ...state,
              counter1: counter1 + 1,
            
            }
          )}
        >
          Sumar 1 al counter 1
        </button>
        <button type="button" className="btn btn-warning btn-lg"
          onClick={() => setCounter(
            {
              ...state,
              counter1: counter1 - 1,
            
            }
          )}
        >
          Restar 1 al counter 1
        </button>
        <button type="button" className="btn btn-danger btn-lg"
          onClick={() => setCounter(
            {
              ...state,
              counter1: 10,
            
            }
          )}
        >
          Resetear counter 1 a 10
        </button>
      </div>
    </>
  )
}
