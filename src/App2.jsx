import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [arr, setArr] = useState([
    { id: 1, title: '리액트', text: '뿌시기', isdone: false },
    { id: 2, title: '자바스크립트', text: '격파', isdone: true },
  ]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const titleChange = e => {
    setTitle(e.target.value);
  };

  const textChange = e => {
    setText(e.target.value);
  };

// 클릭했을 때 추가되는 버튼
  const clickButtonGandler = () => {
    const newArr = {
      id: arr.length + 1,
      title,
      text,
      isdone: false,
    }
    setArr([...arr,newArr]);
  };

  return (
    <>
      {/* 헤더 */}
      <div>
        <header>React</header>
        <header>Date</header>
      </div>

      {/* 작성  살짝 헷갈 >  해결 */}
      <div>
        제목 : <input value={title} onChange={titleChange} /> <br />
        내용 : <input value={text} onChange={textChange} />
        <button onClick={clickButtonGandler}> 추가 </button>
       
      </div>


      <div>
        <h2>START</h2> 
        <div className='style'>
          {
            arr.map(item => {
              return <div className='squareStyle' key={item.id}> {item.title} {item.text}</div>
            })
          }
        </div>
      </div>

      <div>
        <h2>끝</h2>
      </div>

      {/* <div className='style'>
      {
        // arr.filter(item =>{
        //   return item.isdone !== true;
        // })
        arr.map( item => {
          return <div className='squareStyle' key={item.id}> {item.title} {item.text}</div> 
        })
      }
    </div> */}
    </>

  )
}

export default App