import React, { useState } from "react";

const App = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const newTodoList = {
    id: Date.now(),
    content,
    title,
  };

  const makeList = () => {
    if (content === "") {
      alert("내용을 입력해주세요");
      return;
    }
    if (title === "") {
      alert("제목을 입력해주세요");
      return;
    }
    setList([...list, newTodoList]);
  };

  const deleteBtnHandler = (selectedList) => {
    const filteredList = list.filter((e) => {
      return selectedList.id !== e.id;
    });
    setList(filteredList);
  };

  const deleteComBtnHandler = (selectedList) => {
    const filteredList = completeList.filter((e) => {
      return selectedList.id !== e.id;
    });
    setCompleteList(filteredList);
  };

  const completeBtnHandler = (selectedList) => {
    const removeList = list.filter((e) => {
      return selectedList.id !== e.id;
    });

    const filteredList = list.filter((e) => {
      return selectedList.id === e.id;
    });
    setList(removeList);
    setCompleteList(filteredList);
  };

  const cancelBtnHandler = (selectedList) => {
    const removeList = completeList.filter((e) => {
      return selectedList.id !== e.id;
    });
    const backToWorkingList = completeList.filter((e) => {
      return selectedList.id === e.id;
    });
    setList([...list, backToWorkingList[0]]);
    setCompleteList(removeList);
  };

  return (
    <div>
      <span>제목</span>
      <input
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
      <span>내용</span>
      <input
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      ></input>
      <button onClick={makeList}>추가하기</button>
      <br></br>
      <div>
        <h3>working</h3>
        {list.map((e) => {
          return (
            <div key={e.id}>
              <span>제목:{e.title}</span>
              <br />
              <span>내용:{e.content}</span>
              <br />
              <button onClick={() => deleteBtnHandler(e)}>삭제하기</button>
              <button onClick={() => completeBtnHandler(e)}>완료</button>
            </div>
          );
        })}
        <br />
        <h3>complete</h3>
        {completeList.map((e) => {
          return (
            <div key={e.id}>
              <span>제목:{e.title}</span>
              <br />
              <span>내용:{e.content}</span>
              <br />
              <button onClick={() => deleteComBtnHandler(e)}>삭제하기</button>
              <button onClick={() => cancelBtnHandler(e)}>취소</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default App;
