const { useState } = React

export function LongTxt({ txt, length = 100 }) {
  const [slicedTxt, setSlicedTxt] = useState(txt.slice(0, length))
  const [isSliced, setIsSliced] = useState(true)

  function toggleIsSliced() {
    if (isSliced) handleUnslice()
    else handleSlice()
  }

  function handleSlice() {
    setSlicedTxt(txt.slice(0, length))
    setIsSliced(true)
  }

  function handleUnslice() {
    setSlicedTxt(txt)
    setIsSliced(false)
  }

  return (
    <section className="long-txt">
      <p>
        {slicedTxt}
        <span>
          <button onClick={toggleIsSliced}>...</button>
        </span>
      </p>
    </section>
  )
}
