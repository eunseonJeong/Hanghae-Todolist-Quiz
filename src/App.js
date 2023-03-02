import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [arr, setArr] = useState([
    { id: 1, text: '리액트 뿌시기', isdone: false },
    { id: 2,text: '자바스크립트 격파', isdone: false  },
  ]);

  const [text, setText] = useState('');

  const textChange = e => {
    setText(e.target.value);
  };

  // 클릭했을 때 추가되는 버튼
  const clickButtonHandler = () => {
    const newArr = {
      id: arr.length + 1,
      text,
      isdone: false,
    }
    setArr([...arr, newArr]);
    setText('');
    alert('추가되었습니다!')
  };

  //삭제
  const removeButtonHandler = (id) => {
    const removeBtn = arr.filter(item => item.id !== id);
    setArr(removeBtn)
  }

  const checkButtonHandler = (id) => {
    const checkBtn = arr.map(item => {
      if (item.id === id) {
        if (item.isdon === false) {
          item.isdon = true;
        } else {
          item.isdon = false;
        }
      }
      return item;
    })
    setArr([...checkBtn]);
  }

  return (
    <>
      <div className='box'>
        {/* 제목 : <input value={title} onChange={titleChange} /> <br /> */}
        <input value={text} onChange={textChange} />
        <button onClick={clickButtonHandler}> 추가 </button>

      </div>


      <div className='box'>
        <h2>TodoList</h2>
        <div className='style'>
          {
            arr.map(item => {
              if (item.isdone === false) {
                return (
                <div className='textStyle' key={item.id}>
                  {item.title} {item.text}
                  <button onClick={() => removeButtonHandler(item.id)}>삭제</button>
                  <button onClick={() => checkButtonHandler(item.id)}>완료</button>
                </div>
                )
              }
            })
          }
        </div>
      </div>
    </>

  )
}

export default App