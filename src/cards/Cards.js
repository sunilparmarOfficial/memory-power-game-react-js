import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import styles from './style.module.scss'

const Cards = () => {
  const [level, setLevel] = useState(1)
  const [totalBox, setTotalBox] = useState([])
  const [hideFalg, setHideFalg] = useState(false)
  const [resultArr, setresultArr] = useState([])
  const [attempSequence, setattempSequence] = useState([])
  const [totalLifeLine, setTotalLifeLine] = useState(5)
  const [defaultTotalLenght, setdefaultTotalLenght] = useState(9)
  const [totalAttempts, settotalAttempts] = useState(0)
  useEffect(() => {
    setHideFalg(false)
    const setPoint = defaultTotalLenght / 2
    const boxArr = Array.from({ length: defaultTotalLenght }).map((item, index) => {
      return {
        sequence: index + 1,
        available: Math.floor((Math.random() * (Math.round(setPoint) - 1))) % 2 === 0
      }
    })
    const findOkResult = boxArr.length > 0 ? boxArr.filter(item => item.available) : []
    setresultArr(findOkResult)
    settotalAttempts(findOkResult.length)
    setTotalBox(boxArr)

    const timer = setTimeout(() => {
      setHideFalg(true)
    }, 5000)
    return () => {
      clearTimeout(timer)
    }
  }, [defaultTotalLenght])

  const handleClickBox = (sequence) => {
    if (totalLifeLine > 0) {
      const result = resultArr.find(item => item.sequence === sequence)
      if (result === undefined) {
        setTotalLifeLine((preState) => preState - 1)
      }
      const duplicateArr = [...attempSequence]
      duplicateArr.push(result !== undefined ? result.sequence : 0)
      setattempSequence(duplicateArr.filter(item => item !== 0))
      if (duplicateArr.length === totalAttempts) {
        setLevel((preState) => preState + 1)
        setdefaultTotalLenght((preState) => preState + 3)
        setattempSequence([])
      } else if (duplicateArr.length >= totalAttempts) {
        settotalAttempts(resultArr.length)
        console.log('Game over')
      }
    }
  }

  const reStartGame = () => {
    setLevel(1)
    setTotalLifeLine(5)
    setdefaultTotalLenght(9)
    attempSequence([])
  }

  var randomColor = Math.floor(Math.random()*16777215).toString(16);
  return (
    <>
      {totalLifeLine <= 0 && (
        <>
          <div className={styles.alert}>
            You lose the game.
          </div>
          <button onClick={reStartGame}>Restart Game</button>
        </>
      )}
      <h3 style={{ color: '#3ca52f' }}>Game Level : {level}</h3>
      <div className={styles.BoxContainer}>
        {totalBox.length > 0 && totalBox.map((val, index) =>
          <Card key={index} color={randomColor} hideFalg={hideFalg} cardValue={val} handleClickBox={handleClickBox} />
        )}
      </div>
      <div style={{ color: "yellow" }}>
        You have a Total available lifeline {totalLifeLine}
      </div>
      <div style={{ color: "yellow" }}>
        You have to choose {totalAttempts} right cards for the next level. 
      </div>
    </>
  )
}
export default Cards